package com.example.Software.service.user;

import com.example.Software.model.Order;
import com.example.Software.repository.user.OrderRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;

    public Order insertOrder(Order order) {
        return orderRepository.insert(order);
    }

    public Order getOrderById(String orderId) {
        return orderRepository.findById(orderId).orElse(null);
    }

    public void removeOder(String orderId) {
        orderRepository.deleteById(orderId);
    }

    public void updateOrderStatus(String orderId, int status) {
        orderRepository.updateStatusByOrderId(orderId, status);
    }
    public List<Order> getOrderByUserEmail(String userEmail) {
        return orderRepository.findByEmail(userEmail);
    }

    public List<Order> getListOrder(int page, int size) {
        return orderRepository.findOrders(page, size);
    }
}
