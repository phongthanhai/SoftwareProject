package com.example.Software.service.user;

import com.example.Software.model.User;
import com.example.Software.repository.user.UserRepository;
import com.example.Software.request.user.LoginRequest;
import com.example.Software.request.user.UserDetailRequest;
import com.example.Software.response.jwt.JwtAuthenticationResponse;
import com.example.Software.service.jwt.JWTService;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
@AllArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JWTService jwtService;

    public User signup(UserDetailRequest userDetailRequest){
        User user = UserDetailRequest.convertToUser(userDetailRequest);
        user.setPassword(passwordEncoder.encode(userDetailRequest.getPassword()));
        return userRepository.save(user);
    }

    public JwtAuthenticationResponse login(LoginRequest loginRequest){
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    loginRequest.getEmail(), loginRequest.getPassword()
            ));

            User user = userRepository.findByEmail(loginRequest.getEmail()).orElse(new User());
            String jwt = jwtService.generateToken(user);
            String refreshToken = jwtService.generateRefreshToken(new HashMap<>(), user);

            JwtAuthenticationResponse jwtAuthenticationResponse = new JwtAuthenticationResponse();
            jwtAuthenticationResponse.setToken(jwt);
            jwtAuthenticationResponse.setRefreshToken(refreshToken);

            return jwtAuthenticationResponse;
        } catch (BadCredentialsException e){
            throw new UsernameNotFoundException("Email/password incorrect");
        }
    }

    public String getUserEmail(){
        SecurityContext securityContext = SecurityContextHolder.getContext();
        Authentication authentication = securityContext.getAuthentication();
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        return userDetails.getUsername();
    }
}
