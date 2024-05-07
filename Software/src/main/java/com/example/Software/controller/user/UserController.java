package com.example.Software.controller.user;
import com.example.Software.model.User;
import com.example.Software.service.user.TeamService;
import com.example.Software.service.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/user")
@AllArgsConstructor
public class UserController {
    private UserService userService;
    private TeamService teamService;

    @GetMapping("/{userId}")
    public User getUser(@PathVariable String userId) {
        return userService.getUserById(userId);
    }

    @PostMapping
    public void createUser(@RequestBody User user) {
        userService.addUser(user);
    }

    @PostMapping("/kickOff")
    public void kickOff(String userId){
        User user = userService.getUserById(userId);
        if(user.isKickOff()){
            return;
        }
        userService.kickOff(userId);
        teamService.updateTeamPoint(userId)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ;
    }
}
