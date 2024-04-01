package com.example.Software.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "product_category")
@Data
public class ProductCategory {
    @Id
    private String id;

    @Field("product_id")
    private String productId;

    @Field("category_id")
    private String categoryId;
}
