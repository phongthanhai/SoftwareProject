package com.example.Software.repository.user;

import com.example.Software.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.Update;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    @Query("{'_id' : ?0 }")
    @Update("{$set : {'isKickOff' :  true}}")
    void updateKickOff(String userId);
//
//    @Query("{'_id' : ?0 }")
//    @Update("{$set :  {'teamId' :  ?1}}")
//    void updateTeam(String userId, String teamId);
}