package com.example.Software.response.product;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ListProductReviewResponse {
    private double averageRating;
    private List<ProductReviewDTO> listReview;
}
