package com.example.Software.repository.product;

import com.example.Software.model.Product;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class FooIml implements ProductRepositoryCustom{
    @Override
    public List<Product> findByFilterIn(String name, String sortType, String brand, String gender, int pageNo, int pageSize) {
        return null;
    }

    @Override
    public long count(String name, String brand, String gender) {
        return 0;
    }

    @Override
    public List<Product> findRandomProductsByBrand(String brand) {
        return null;
    }
}
