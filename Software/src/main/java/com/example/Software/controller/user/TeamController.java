package com.example.Software.controller.user;

import com.example.Software.model.Team;
import com.example.Software.service.user.TeamService;
import com.example.Software.service.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/team")
@AllArgsConstructor
public class TeamController {
    private TeamService teamService;
    private UserService userService;

    @GetMapping
    public List<Team> searchTeam(){
        return teamService.getAllTeams();
    }

    @GetMapping("/{teamId}")
    public Team getTeam(@PathVariable String teamId){
        return teamService.getTeamById(teamId);
    }

    @PostMapping
    public void addTeam(@RequestBody Team team){
        teamService.createTeam(team);
    }

//    @PostMapping("/addNewMember")
//    public void updateTeam(@RequestParam String teamId,
//                           @RequestParam String userId){
//        teamService.addUserToTeam(teamId, userId);
//    }

    @GetMapping("/point/{teamId}")
    public int getTeamPoint(@PathVariable String teamId){
        Team team = teamService.getTeamById(teamId);
        double point = team.getPoint();
        double pointResponse = point - (int) point >= 0.5 ? point + 1 : point;
        return (int) pointResponse;
    }
}
