package com.example.Software.controller;

import com.example.Software.model.User;
import com.example.Software.request.user.LoginRequest;
import com.example.Software.request.user.UserDetailRequest;
import com.example.Software.response.jwt.JwtAuthenticationResponse;
import com.example.Software.service.user.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthController {
    private final AuthService authService;
    @PostMapping("/signup")
    public ResponseEntity<User> signup(@RequestBody UserDetailRequest userDetailRequest){
        return ResponseEntity.ok(authService.signup(userDetailRequest));
    }

    @PostMapping("/login")
    public ResponseEntity<JwtAuthenticationResponse> login(@RequestBody LoginRequest loginRequest){
        return ResponseEntity.ok(authService.login(loginRequest));
    }
}
