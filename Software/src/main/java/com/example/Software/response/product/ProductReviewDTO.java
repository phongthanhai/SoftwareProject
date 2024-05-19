package com.example.Software.response.product;

import com.example.Software.model.ProductReview;
import com.example.Software.model.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductReviewDTO {
    private String productId;
    private String username;
    private String title;
    private String content;
    private double rating;
    private Date createAt;

    public static ProductReviewDTO from(ProductReview productReview, User user) {
        String username = user.getFirstName() + user.getMiddleName() + user.getLastName();
        return ProductReviewDTO.builder().productId(productReview.getProductId())
                .username(username)
                .title(productReview.getTitle())
                .content(productReview.getContent())
                .rating(productReview.getRating())
                .createAt(productReview.getCreateAt())
                .build();
    }
}
