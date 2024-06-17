package com.example.Software.controller;

import com.example.Software.model.Order;
import com.example.Software.model.OrderItem;
import com.example.Software.model.Product;
import com.example.Software.model.User;
import com.example.Software.request.user.UserDetailRequest;
import com.example.Software.response.admin.StoreDashBoardResponse;
import com.example.Software.service.product.ProductService;
import com.example.Software.service.user.AuthService;
import com.example.Software.service.user.OrderItemService;
import com.example.Software.service.user.OrderService;
import com.example.Software.service.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Role;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/admin")
@AllArgsConstructor
public class AdminController {
    private final UserService userService;
    private final AuthService authService;
    private final ProductService productService;
    private final OrderService orderService;
    private final OrderItemService orderItemService;

    @PostMapping("/insert/user")
    public void addUser(@RequestBody UserDetailRequest request){
        User user = UserDetailRequest.convertToUser(request);
        userService.insertUser(user);
    }

    @GetMapping("/info/{userId}")
    public ResponseEntity<User> getUserInformation(@PathVariable String userId){
        return ResponseEntity.ok(userService.getUserById(userId));
    }

    @DeleteMapping("/removeUser")
    public void removeUser(@RequestParam String userId) {
        userService.deleteUserById(userId);
    }

    @DeleteMapping("/deleteProduct")
    public void deleteProduct(@RequestParam String productId) {
        productService.deleteProduct(productId);
    }

    @PostMapping("/createProduct")
    public void createProduct(@RequestBody Product product) {
        productService.createProduct(product);
    }

    @GetMapping("/updateProduct")
    public Product getProductInformation(@RequestParam String productId){
        return productService.getProductById(productId);
    }

    @PutMapping("/updateProduct")
    public void updateProduct(@RequestBody Product product){
        productService.updateProduct(product);
    }

    @GetMapping("/order")
    public List<Order> getListOrder(@RequestParam int page,
                                    @RequestParam int size) {
        return orderService.getListOrder(page, size);
    }

    @GetMapping("/store")
    public StoreDashBoardResponse getStoreDashBoardResponse() {
        int productSold = 0;
        double revenue = 0;
        double expenses = 0;
        List<OrderItem> orderItems = orderItemService.getAllOrderItems();
        List<String> productIds = new ArrayList<>();
        for (OrderItem orderItem : orderItems) {
            productIds.add(orderItem.getProductId());
        }
        List<Product> products = productService.getProductsByIds(productIds);
        Map<String, Product> productMap =
                products.stream().collect(Collectors.toMap(Product::getId, product -> product, (a, b) -> a));
        for (OrderItem orderItem : orderItems) {
            Product product = productMap.get(orderItem.getProductId());
            if (Objects.isNull(product)) {
                continue;
            }
            productSold += orderItem.getQuantity();
            revenue += orderItem.getQuantity() * product.getDiscountPrice();
        }
        expenses = revenue * 0.6;
        return new StoreDashBoardResponse(productSold, revenue, expenses);
    }
}
