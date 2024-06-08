package com.example.Software.service.user;

import com.example.Software.model.Order;
import com.example.Software.model.OrderItem;
import com.example.Software.repository.user.OrderItemRepository;
import com.example.Software.repository.user.OrderRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class OrderItemService {
    private final OrderItemRepository oderItemRepository;
    public void insertMany(List<OrderItem> orderItems) {
        oderItemRepository.insert(orderItems);
    }

    public List<OrderItem> getOrderItemsByOrderId(String orderId) {
        return oderItemRepository.findByOrderId(orderId);
    }
}
