package com.example.Software.service;

import com.example.Software.model.User;
import com.example.Software.repository.user.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private UserRepository userRepository;

    public User getUserById(String userId){
        return userRepository.findById(userId).orElse(null);
    }
    public List<User> getAllUser(){
        return userRepository.findAll();
    }
}
