package com.example.Software.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @GetMapping("/login")
    public String getLoginForm(){
        return "Welcome to login form";
    }

    @GetMapping("/test")
    public String test(){
        return "test successfully";
    }
}
