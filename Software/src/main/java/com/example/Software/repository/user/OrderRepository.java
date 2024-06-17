package com.example.Software.repository.user;

import com.example.Software.model.Order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends MongoRepository<Order, String>, OrderRepositoryCustom {
    @Query("{ '_id' :  ?0}")
    @Update("{'$set' :  {'status' :  ?0}}")
    void updateStatusByOrderId(String orderId, int status);

    List<Order> findByEmail(String email);
}
