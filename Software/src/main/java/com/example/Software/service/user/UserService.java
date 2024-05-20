package com.example.Software.service.user;

import com.example.Software.model.User;
import com.example.Software.repository.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
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
    public User getUserByEmail(String email){
        return userRepository.findByEmail(email).orElse(null);
    }

    public UserDetailsService userDetailsService() {
        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
                return userRepository.findByEmail(username)
                        .orElseThrow(() -> new UsernameNotFoundException("User not found"));
            }
        };
    }

    public List<User> getUserByEmails(List<String> userEmails) {
        return userRepository.findByEmailIn(userEmails);
    }
}
