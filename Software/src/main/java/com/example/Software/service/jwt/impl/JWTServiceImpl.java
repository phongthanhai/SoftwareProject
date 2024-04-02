package com.example.Software.service.jwt.impl;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.function.Function;

@Service
public class JWTServiceImpl {
    private String generateToken(UserDetails userDetails){
        return Jwts.builder().setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000*60*60))
                .signWith(getSiginKey(), SignatureAlgorithm.HS256)
                .compact();
    }
    private String extractUserName(String token){
        return extractClaims(token, Claims::getSubject);
    }

    private <T> T extractClaims(String token, Function<Claims, T> claimsResolvers){
        final Claims claims = extractALlClaims(token);
        return claimsResolvers.apply(claims);
    }

    private Key getSiginKey(){
        byte[] key = Decoders.BASE64.decode("");
        return Keys.hmacShaKeyFor(key);
    }

    private Claims extractALlClaims(String token){
        return Jwts.parserBuilder().setSigningKey(getSiginKey()).build().parseClaimsJwt(token).getBody();
    }
}
