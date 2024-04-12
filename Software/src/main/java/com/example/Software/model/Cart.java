package com.example.Software.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Document("cart")
@Data
public class Cart {

    @Id
    private String cartId;

    @Field("customer_id")
    private String customerId;

    @Field("address")
    private List<Address> addresses;

    @Field("cart_items")
    private List<CartItem> cartItems;
}
