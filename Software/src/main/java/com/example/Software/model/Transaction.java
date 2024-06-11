package com.example.Software.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Document(collection = "transaction")
@Data
public class Transaction {
    @Id
    private String transactionId;
    @Field("user_id")
    private String userId;
    @Field("order_id")
    private String orderId;
    @Field("code")
    private int code;
    @Field("type")
    private String type;
    @Field("mode")
    private int mode;
    @Field("status")
    private String status;
    @Field("create_at")
    private Date createAt;
    @Field("update_at")
    private Date updateAt;
}
