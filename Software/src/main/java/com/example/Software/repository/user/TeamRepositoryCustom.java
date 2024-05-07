package com.example.Software.repository.user;

public interface TeamRepositoryCustom {
    void addMemberToTeam(String teamId, String userId);

    void updateTeamPoint(String teamId);
}
