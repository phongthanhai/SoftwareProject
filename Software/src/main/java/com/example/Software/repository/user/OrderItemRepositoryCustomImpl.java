package com.example.Software.repository.user;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class OrderItemRepositoryCustomImpl implements OrderItemRepositoryCustom {
    private final MongoTemplate mongoTemplate;

    public OrderItemRepositoryCustomImpl(@Qualifier("userDBMongoTemplate") MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }
}
