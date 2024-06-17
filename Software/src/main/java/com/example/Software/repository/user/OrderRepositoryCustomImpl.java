package com.example.Software.repository.user;

import com.example.Software.model.Order;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class OrderRepositoryCustomImpl implements OrderRepositoryCustom{
    private final MongoTemplate mongoTemplate;

    public OrderRepositoryCustomImpl(@Qualifier("userDBMongoTemplate") MongoTemplate mongoTemplate){
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public List<Order> findOrders(int page, int size) {
        Query query = new Query();
        Sort sort = Sort.by(Sort.Direction.DESC, "update_at");
        Pageable pageable = PageRequest.of(page, size, sort);
        query.with(pageable);
        return mongoTemplate.find(query, Order.class);
    }
}
