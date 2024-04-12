package com.example.Software.model;

import com.example.Software.constant.Rating;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Document("review")
@Data
public class Review {

    @Id
    private String reviewId;

    @Field("product_id")
    private String productId;

    @Field("rating")
    private Rating rating;

    @Field("title")
    private String title;

    @Field("createAt")
    private Date creatAt;

    @Field("content")
    private String content;

    @Field("name")
    private String name;
}
