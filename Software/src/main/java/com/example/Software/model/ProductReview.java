package com.example.Software.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "review")
public class ProductReview {
    @Id
    private String id;
    @Field("product_id")
    private String productId;
    @Field("user_email")
    private String userEmail;
    @Field("title")
    private String title;
    @Field("content")
    private String content;
    @Field("rating")
    private double rating;
    @Field("create_at")
    private Date createAt;

}
