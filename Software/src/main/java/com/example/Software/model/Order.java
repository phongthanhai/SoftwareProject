package com.example.Software.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;
import java.util.List;

@Document(collection = "order")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Order {
    @Id
    private String orderId;
    @Field("email")
    private String email;
    @Field("status")
    private int status;
    @Field("address")
    private String addressId;
    @Field("vat")
    private double vat;
    @Field("create_at")
    private Date createAt;
    @Field("update_at")
    private Date updateAt;
}
