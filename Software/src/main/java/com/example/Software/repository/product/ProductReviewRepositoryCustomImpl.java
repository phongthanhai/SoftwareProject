package com.example.Software.repository.product;

import com.example.Software.model.ProductReview;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Repository;

import java.util.Objects;

@Repository
public class ProductReviewRepositoryCustomImpl implements ProductReviewRepositoryCustom {
    private final MongoTemplate mongoTemplate;

    public ProductReviewRepositoryCustomImpl(@Qualifier("productDBMongoTemplate") MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }
    @Override
    public double getProductRatings(String productId) {
        Aggregation aggregation = Aggregation.newAggregation(
                Aggregation.match(Criteria.where("productId").is(productId)),
                Aggregation.group().avg("rating").as("averageRating")
        );

        AggregationResults<AverageRating> result = mongoTemplate.aggregate(aggregation, ProductReview.class, AverageRating.class);
        AverageRating averageRating = result.getUniqueMappedResult();
        return Objects.nonNull(averageRating) ? averageRating.getAverageRating() : 0.0;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    static class AverageRating {
        private double averageRating;
    }
}

