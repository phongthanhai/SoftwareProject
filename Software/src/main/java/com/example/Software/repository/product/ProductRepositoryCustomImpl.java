package com.example.Software.repository.product;

import com.example.Software.model.Product;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import java.util.List;

import com.example.Software.constant.SortType;

@Repository
public class ProductRepositoryCustomImpl implements ProductRepositoryCustom {
    public static final int NUMBER_RELATED_PRODUCT = 10;
    private final MongoTemplate mongoTemplate;
    public ProductRepositoryCustomImpl(@Qualifier("productDBMongoTemplate") MongoTemplate mongoTemplate){
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public List<Product> findByFilterIn(String name, String brand, String gender, String sortType, int pageNo, int pageSize) {
        Query query = buildQueryFrom(name, brand, gender);
        Pageable pageAble = null;
        if (StringUtils.hasText(sortType)) {
            Sort.Direction direction = null;
            if (sortType.equals(SortType.ASC)) {
                direction = Sort.Direction.ASC;
            }
            else {
                direction = Sort.Direction.DESC;
            }
            Sort sort = Sort.by(direction, "discountPrice");
            pageAble = PageRequest.of(pageNo, pageSize, sort);
        }
        else {
            pageAble = PageRequest.of(pageNo, pageSize);
        }
        query.with(pageAble);
        return mongoTemplate.find(query, Product.class);
    }

    public long count(String name, String brand, String gender) {
        Query query = buildQueryFrom(name, brand, gender);
        return mongoTemplate.count(query, Product.class);
    }

    @Override
    public List<Product> findRandomProductsByBrand(String brand) {
        Aggregation aggregation = Aggregation.newAggregation(
                Aggregation.match(Criteria.where("brand").is(brand)),
                Aggregation.sample(NUMBER_RELATED_PRODUCT)
        );
        AggregationResults<Product> results = mongoTemplate.aggregate(aggregation, "product", Product.class);
        return results.getMappedResults();
    }

    public Query buildQueryFrom(String name, String brand, String gender){
        Query query = new Query();
        if (StringUtils.hasText(name)){
            query.addCriteria(Criteria.where("name").regex(name, "i"));
        }
        if (StringUtils.hasText(brand)){
            query.addCriteria(Criteria.where("brand").is(brand));
        }
        if (StringUtils.hasText(gender)){
            query.addCriteria(Criteria.where("gender").is(gender));
        }

        return query;
    }


}
