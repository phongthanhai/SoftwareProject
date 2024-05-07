package com.example.Software.service.user;

import com.example.Software.model.User;
import com.example.Software.repository.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {
    private UserRepository userRepository;

    public void addUser(User user) {
        userRepository.save(user);
    }

    public User getUserById(String id) {
        return userRepository.findById(id).orElse(null);
    }

    public void kickOff(String id) {
        userRepository.updateKickOff(id);
    }

}
