package com.example.Software.repository.product;

import com.example.Software.model.Product;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import java.util.List;

import com.example.Software.constant.SortType;

@Repository
public class ProductRepositoryCustomImpl implements ProductRepositoryCustom {
    private final MongoTemplate mongoTemplate;
    public ProductRepositoryCustomImpl(@Qualifier("productDBMongoTemplate") MongoTemplate mongoTemplate){
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public List<Product> findByFilterIn(String name, String brand, String gender, String sortType, int pageNo, int pageSize) {
        Query query = buildQueryFrom(name, brand, gender);
        Sort.Direction direction = Sort.Direction.ASC;
        if (!StringUtils.hasText(sortType)) {
            sortType = SortType.RELEASE_DATE;
        }
        if (sortType.equals(SortType.RELEASE_DATE)) {
            direction = Sort.Direction.DESC;
        }
        Sort sort = Sort.by(direction, sortType);
        Pageable pageAble = PageRequest.of(pageNo, pageSize, sort);
        query.with(pageAble);
        return mongoTemplate.find(query, Product.class);
    }

    public long count(String name, String brand, String gender) {
        Query query = buildQueryFrom(name, brand, gender);
        return mongoTemplate.count(query, Product.class);
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
