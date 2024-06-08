package com.example.Software.controller.user;

import com.example.Software.constant.OrderStatus;
import com.example.Software.model.*;
import com.example.Software.response.user.CartItemDTO;
import com.example.Software.response.user.OrderDetailResponse;
import com.example.Software.service.product.ProductService;
import com.example.Software.service.user.*;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@RequestMapping("/order")
public class OrderController {
    private final UserService userService;
    private final AuthService authService;
    private final AddressService addressService;
    private final CartItemService cartItemService;
    private final OrderService orderService;
    private final OrderItemService orderItemService;
    private final ProductService productService;

    @PostMapping
    public void checkout(@RequestParam String addressId) {
        String userEmail = authService.getUserEmail();
        Order order = Order.builder()
                        .email(userEmail)
                        .addressId(addressId)
                        .status(OrderStatus.APPROVED.getStatus())
                        .vat(0.1)
                        .createAt(new Date())
                        .updateAt(new Date())
                        .build();
        order = orderService.insertOrder(order);
        List<CartItem> cartItems = cartItemService.getCartItemsByUserEmail(userEmail);
        List<OrderItem> orderItems = OrderItem.from(cartItems, order.getOrderId());
        cartItemService.removeCartItemsByEmail(userEmail);
        orderItemService.insertMany(orderItems);
    }

    @GetMapping
    public List<Order> getOrders() {
        String userEmail = authService.getUserEmail();
        return orderService.getOrderByUserEmail(userEmail);
    }

    @GetMapping("/{orderId}")
    public OrderDetailResponse getOrderDetail(@PathVariable String orderId) {
        Order order = orderService.getOrderById(orderId);
        if (Objects.isNull(order)) {
            return new OrderDetailResponse();
        }
        Address address = addressService.getAddress(order.getAddressId());
        List<OrderItem> orderItems = orderItemService.getOrderItemsByOrderId(orderId);
        List<String> productIds = new ArrayList<>();
        for (OrderItem orderItem : orderItems) {
            productIds.add(orderItem.getProductId());
        }
        List<Product> products = productService.getProductsByIds(productIds);
        Map<String, Product> productMap =
                products.stream().collect(Collectors.toMap(Product::getId, product -> product, (a, b) -> a));
        List<CartItemDTO> listItem = new ArrayList<>();
        double total = 0;
        for (OrderItem orderItem : orderItems) {
            Product product = productMap.get(orderItem.getProductId());
            if (Objects.isNull(product)) {
                continue;
            }
            double totalPrice = product.getDiscountPrice() * orderItem.getQuantity();
            CartItemDTO cartItemDTO = CartItemDTO.builder()
                    .id(orderItem.getId())
                    .productId(product.getId())
                    .productName(product.getName())
                    .imageUrl(product.getImage())
                    .quantity(orderItem.getQuantity())
                    .retailPrice(product.getRetailPrice())
                    .discountPrice(product.getDiscountPrice())
                    .totalPrice(totalPrice)
                    .build();
            listItem.add(cartItemDTO);
            total += totalPrice;
        }
        return new OrderDetailResponse(address, total, listItem);
    }
}
