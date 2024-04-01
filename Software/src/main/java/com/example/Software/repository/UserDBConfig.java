package com.example.Software.repository;

import com.example.Software.repository.user.UserRepositoryCustom;
import com.mongodb.client.MongoClient;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(mongoTemplateRef = "userDBMongoTemplate", basePackages = "com.example.Software.repository.user")
public class UserDBConfig {
    @Bean
    public MongoTemplate userDBMongoTemplate(@Qualifier("primaryMongoClient") MongoClient mongoClient){
        return new MongoTemplate(mongoClient, "user");
    }
}
