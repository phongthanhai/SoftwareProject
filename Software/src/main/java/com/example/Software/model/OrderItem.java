package com.example.Software.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "order_item")
@Data
public class OrderItem {
    @Id
    private String id;

    @Field("product_id")
    private String product_id;

    @Field("order_id")
    private String orderId;

    @Field("price")
    private long price;

    @Field("discount")
    private long discount;

    @Field("quantity")
    private int quantity;

}
