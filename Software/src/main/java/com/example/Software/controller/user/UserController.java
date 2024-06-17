package com.example.Software.controller.user;

import com.example.Software.model.User;
import com.example.Software.service.user.AuthService;
import com.example.Software.service.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/user")
@AllArgsConstructor
public class UserController {
    private final UserService userService;
    private final AuthService authService;

    @GetMapping("/information")
    public ResponseEntity<User> getUserInformation(){
        String userEmail = authService.getUserEmail();
        return ResponseEntity.ok(userService.getUserByEmail(userEmail));
    }


}
