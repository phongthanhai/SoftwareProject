package com.example.Software.service.product;

import com.example.Software.model.ProductReview;
import com.example.Software.repository.product.ProductReviewRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProductReviewService {
    private final ProductReviewRepository productReviewRepository;

    public void addProductReview(ProductReview productReview) {
        productReviewRepository.save(productReview);
    }

    public List<ProductReview> getProductReviewById(String productId, int page, int sie) {
        Sort sort = Sort.by(Sort.Direction.DESC, "create_at");
        Pageable pageable = PageRequest.of(page, sie, sort);
        return productReviewRepository.findProductReviewByProductId(productId, pageable);
    }

    public double getAverageRating(String productId) {
        return productReviewRepository.getProductRatings(productId);
    }
}
