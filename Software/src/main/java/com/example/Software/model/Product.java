package com.example.Software.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.CompoundIndex;
import org.springframework.data.mongodb.core.index.CompoundIndexes;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

@Document(collection = "product")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Product implements Comparable<Product>{
        @Id
        private String id;
        private String brand;
        private String colorway;
        private float discountPrice;
        private String gender;
        private Image image;
        private String name;
        private String releaseDate;
        private String releaseYear;
        private float retailPrice;
        private String story;

        @Override
        public int compareTo(Product otherProduct) {
                return Float.compare(this.retailPrice, otherProduct.retailPrice);
        }
}

