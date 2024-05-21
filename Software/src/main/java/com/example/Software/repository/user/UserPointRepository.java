package com.example.Software.repository.user;

import com.example.Software.model.Point;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.Update;
import org.springframework.stereotype.Repository;

@Repository
public interface UserPointRepository extends MongoRepository<Point, String> {
    @Query("{'id' :  ?0}")
    @Update("{ '$inc' :  {'point' :  ?1}}")
    void increasePoints(String id, int points);
}
