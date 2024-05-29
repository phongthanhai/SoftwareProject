package com.example.Software.repository.product;

import com.example.Software.model.Product;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ProductRepositoryCustom {
    List<Product> findByFilterIn(String name, String sortType, String brand, String gender, int pageNo, int pageSize);
    long count(String name, String brand, String gender);
    List<Product> findRandomProductsByBrand(String brand);
}
