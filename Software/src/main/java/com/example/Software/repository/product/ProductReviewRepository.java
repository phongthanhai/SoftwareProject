package com.example.Software.repository.product;

import com.example.Software.model.ProductReview;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductReviewRepository extends MongoRepository<ProductReview, String>, ProductReviewRepositoryCustom {
    @Query("{ product_id : ?0 }")
    List<ProductReview> findProductReviewByProductId(String productId, Pageable pageable);
}
