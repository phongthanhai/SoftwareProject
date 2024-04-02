package com.example.Software.service.user;

import com.example.Software.model.User;
import com.example.Software.repository.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User getUserById(String userId){
        return userRepository.findById(userId).orElse(null);
    }
    public List<User> getAllUser(){
        return userRepository.findAll();
    }
    public void insertUser(User user){
        userRepository.insert(user);
    }
}
