package com.example.Software.repository.user;

import com.example.Software.model.OrderItem;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface OrderItemRepository extends MongoRepository<OrderItem, String> , OrderItemRepositoryCustom {
    List<OrderItem> findByOrderId(String orderId);
}
