package com.example.Software.controller;

import com.example.Software.model.User;
import com.example.Software.service.user.AuthService;
import com.example.Software.service.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.example.Software.constant.Role.USER;

@RestController
@RequestMapping("/user")
@PreAuthorize(USER)
@AllArgsConstructor
public class UserController {
    private final UserService userService;
    private final AuthService authService;
    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserInformation(@PathVariable String userId){
        return ResponseEntity.ok(userService.getUserById(userId));
    }

    @GetMapping("/information")
    public ResponseEntity<User> getUserInformation(){
        String userEmail = authService.getUserEmail();
        return ResponseEntity.ok(userService.getUserByEmail(userEmail));
    }
}
