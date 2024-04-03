package com.example.Software.controller;

import com.example.Software.model.User;
import com.example.Software.request.user.UserDetailRequest;
import com.example.Software.service.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@AllArgsConstructor
public class AdminController {
    private final UserService userService;
    @PostMapping("/insert/user")
    public void addUser(@RequestBody UserDetailRequest request){
        User user = UserDetailRequest.convertToUser(request);
        userService.insertUser(user);
    }

    @GetMapping("info/{userId}")
    public ResponseEntity<User> getUserInformation(@PathVariable String userId){
        return ResponseEntity.ok(userService.getUserById(userId));
    }
}
