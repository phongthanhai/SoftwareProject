package com.example.Software.repository.user;

import com.example.Software.model.Order;

import java.util.List;

public interface OrderRepositoryCustom {
    public List<Order> findOrders(int page, int size);
}
