package com.example.Software.repository.user;

import com.example.Software.model.Team;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

@Repository
public class TeamRepositoryCustomImp implements TeamRepositoryCustom {
    public static final int UNIT_POINT = 10;
    private final MongoTemplate mongoTemplate;

    public TeamRepositoryCustomImp(@Qualifier("userDBMongoTemplate" ) MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public void addMemberToTeam(String teamId, String userId) {
        Query query = new Query(Criteria.where("_id").is(teamId));
        Update update = new Update();
        update.push("members", userId);
        mongoTemplate.updateFirst(query, update, Team.class);
    }

    @Override
    public void updateTeamPoint(String userId) {
        Query query = new Query(Criteria.where("team_members").is(userId));
        int pointUpdate = (100 / getTeamSize(userId))*UNIT_POINT;
        Update update = new Update();
        update.inc("point", pointUpdate);
        mongoTemplate.updateFirst(query, update, Team.class);
    }

    public int getTeamSize(String userId) {
        Query query = new Query(Criteria.where("team_members").is(userId));
        Team team = mongoTemplate.findOne(query, Team.class);
        return team != null ? team.getMembers().size() : -1;
    }
}
