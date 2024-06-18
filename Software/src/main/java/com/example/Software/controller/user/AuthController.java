package com.example.Software.controller.user;

import com.example.Software.model.User;
import com.example.Software.request.user.LoginRequest;
import com.example.Software.request.user.UserDetailRequest;
import com.example.Software.response.jwt.JwtAuthenticationResponse;
import com.example.Software.service.user.AuthService;
import com.example.Software.service.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthController {
    private final AuthService authService;
    UserService userService;
    @PostMapping("/signup")
    public ResponseEntity<User> signup(@RequestBody UserDetailRequest userDetailRequest){
        String userEmail = userDetailRequest.getEmail();
        User user = userService.getUserByEmail(userEmail);
        if(user != null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        return ResponseEntity.ok(authService.signup(userDetailRequest));
    }

    @PostMapping("/login")
    public ResponseEntity<JwtAuthenticationResponse> login(@RequestBody LoginRequest loginRequest){
        return ResponseEntity.ok(authService.login(loginRequest));
    }
}
