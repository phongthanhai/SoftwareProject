package com.example.Software.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "category")
@Data
public class Category {
    @Id
    private String categoryId;

    @Field("parent_id")
    private String parentId;

    @Field("title")
    private String title;

    @Field("meta_title")
    private String metaTitle;

    @Field("content")
    private String content;
}
