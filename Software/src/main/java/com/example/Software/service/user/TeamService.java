package com.example.Software.service.user;

import com.example.Software.model.Team;
import com.example.Software.repository.user.TeamRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class TeamService {
    private TeamRepository teamRepository;

    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }

    public Team getTeamById(String id) {
        return teamRepository.findById(id).orElse(null);
    }

    public void createTeam(Team team) {
        teamRepository.save(team);
    }

//    public void addUserToTeam(String teamId, String userId) {
//        teamRepository.addMemberToTeam(teamId, userId);
//    }

    public void updateTeamPoint(String teamId){
        teamRepository.updateTeamPoint(teamId);
    }
}
