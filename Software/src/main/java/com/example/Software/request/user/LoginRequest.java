package com.example.Software.request.user;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}
