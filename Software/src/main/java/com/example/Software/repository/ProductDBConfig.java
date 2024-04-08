package com.example.Software.repository;

import com.mongodb.client.MongoClient;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(mongoTemplateRef = "productDBMongoTemplate", basePackages = "com.example.Software.repository.product")
public class ProductDBConfig {
    @Bean("productDBMongoTemplate")
    public MongoTemplate productDBMongoTemplate(@Qualifier("primaryMongoClient") MongoClient mongoClient){
        return new MongoTemplate(mongoClient, "productDB");
    }
}