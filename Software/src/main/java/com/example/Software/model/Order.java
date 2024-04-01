package com.example.Software.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Document(collection = "order")
@Data
public class Order {
    @Id
    private String orderId;

    @Field("sessionId")
    private String sessionId;

    @Field("token")
    private String token;

    @Field("status")
    private String status;

    @Field("address")
    private String addressId;

    @Field("tax")
    private float tax;

    @Field("create_at")
    private Date createAt;

    @Field("update_at")
    private Date updateAt;
}
