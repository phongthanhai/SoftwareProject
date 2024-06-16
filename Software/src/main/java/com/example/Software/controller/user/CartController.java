package com.example.Software.controller.user;

import com.example.Software.model.CartItem;
import com.example.Software.model.Product;
import com.example.Software.response.SearchResult;
import com.example.Software.response.user.CartItemDTO;
import com.example.Software.response.user.UserCartResponse;
import com.example.Software.service.product.ProductService;
import com.example.Software.service.user.AuthService;
import com.example.Software.service.user.CartItemService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/cart")
@AllArgsConstructor
public class CartController {
    private final AuthService authService;
    private final CartItemService cartItemService;
    private final ProductService productService;

    @GetMapping
    public UserCartResponse getCartItems() {
        String userEmail = authService.getUserEmail();
        List<CartItem> cartItems = cartItemService.getCartItemsByUserEmail(userEmail);
        List<String> productIds = new ArrayList<>();
        for (CartItem cartItem : cartItems) {
            productIds.add(cartItem.getProductId());
        }
        List<Product> products = productService.getProductsByIds(productIds);
        Map<String, Product> productMap = products.stream().collect(Collectors.toMap(Product::getId, product -> product, (a, b) -> a));
        List<CartItemDTO> data = new ArrayList<>();
        double total = 0;
        for (CartItem cartItem : cartItems) {
            Product product = productMap.get(cartItem.getProductId());
            if (Objects.isNull(product)) {
                continue;
            }
            double totalPrice = product.getDiscountPrice() * cartItem.getQuantity();
            CartItemDTO cartItemDTO = CartItemDTO.builder()
                                        .id(cartItem.getId())
                                        .productId(product.getId())
                                        .productName(product.getName())
                                        .imageUrl(product.getImage())
                                        .quantity(cartItem.getQuantity())
                                        .retailPrice(product.getRetailPrice())
                                        .discountPrice(product.getDiscountPrice())
                                        .currentStock(product.getCurrentStock())
                                        .totalPrice(totalPrice)
                                        .build();
            data.add(cartItemDTO);
            total += totalPrice;
        }
        return new UserCartResponse(total, data);
    }

    @PostMapping
    public void addItemToCart(@RequestParam String productId,
                              @RequestParam int quantity) {
        String userEmail = authService.getUserEmail();
        CartItem cartItem = cartItemService.getCartItemByUserEmailAndProductId(userEmail, productId);
        if (Objects.nonNull(cartItem)) {
            cartItemService.increaseQuantity(cartItem.getId(), quantity);
            return;
        }
        cartItemService.addItem(new CartItem(userEmail, productId, quantity));
    }

    @DeleteMapping
    public void deleteItem(@RequestParam String cartItemId) {
        cartItemService.removeItem(cartItemId);
    }

    @PutMapping
    public void updateQuantity(@RequestParam String cartItemId,
                               @RequestParam int quantity) {
        cartItemService.updateQuantity(cartItemId, quantity);
    }

    @DeleteMapping("/removeAll")
    public void removeAllItems() {
        String userEmail = authService.getUserEmail();
        cartItemService.removeCartItemsByEmail(userEmail);
    }
}
