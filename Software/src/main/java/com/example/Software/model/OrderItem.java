package com.example.Software.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "order_item")
public class OrderItem {
    @Id
    private String id;
    @Field("product_id")
    private String productId;
    @Field("order_id")
    private String orderId;
    @Field("quantity")
    private int quantity;

    public OrderItem(String productId, String orderId, int quantity) {
        this.productId = productId;
        this.orderId = orderId;
        this.quantity = quantity;
    }

    public static List<OrderItem> from(List<CartItem> cartItems, String orderId) {
        List<OrderItem> orderItems = new ArrayList<>();
        for (CartItem cartItem : cartItems) {
            OrderItem orderItem = new OrderItem(cartItem.getProductId(), orderId, cartItem.getQuantity());
            orderItems.add(orderItem);
        }
        return orderItems;
    }
}
