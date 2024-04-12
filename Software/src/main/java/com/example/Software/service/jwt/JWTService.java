package com.example.Software.service.jwt;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Map;

public interface JWTService {
    String generateToken(UserDetails userDetails);
    String extractUserName(String token);
    boolean isValidToken(String token, UserDetails userDetails);
    String generateRefreshToken(Map<String, Object> extraClaims, UserDetails userDetails);
}
