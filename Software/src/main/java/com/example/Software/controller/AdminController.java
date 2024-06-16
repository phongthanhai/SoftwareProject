package com.example.Software.controller;

import com.example.Software.model.Product;
import com.example.Software.model.User;
import com.example.Software.request.user.UserDetailRequest;
import com.example.Software.service.product.ProductService;
import com.example.Software.service.user.AuthService;
import com.example.Software.service.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Role;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@AllArgsConstructor
public class AdminController {
    private final UserService userService;
    private final AuthService authService;
    private final ProductService productService;
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

}
