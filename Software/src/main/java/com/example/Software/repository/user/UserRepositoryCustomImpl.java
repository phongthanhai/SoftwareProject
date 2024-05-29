package com.example.Software.repository.user;

import com.example.Software.model.Product;
import com.example.Software.model.User;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepositoryCustomImpl implements UserRepositoryCustom {
    private final MongoTemplate mongoTemplate;

    public UserRepositoryCustomImpl(@Qualifier("userDBMongoTemplate") MongoTemplate mongoTemplate){
        this.mongoTemplate = mongoTemplate;
    }

    public User findProductById(String id) {
        Query query = new Query(Criteria.where("_id").is(id));
        return mongoTemplate.findById(query, User.class);
    }
}
