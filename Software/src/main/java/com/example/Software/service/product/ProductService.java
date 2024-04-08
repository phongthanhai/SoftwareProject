package com.example.Software.service.product;

import com.example.Software.model.Product;
import com.example.Software.repository.product.ProductRepository;
import com.example.Software.response.SearchResult;
import com.example.Software.response.product.ListProductResponse;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;


@Service
@AllArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;
    public SearchResult<List<ListProductResponse>> getProductByFilter(String name, String brand, String gender, String sortType, int page, int size) {

        List<Product> products = productRepository.findByFilterIn(name, brand, gender, sortType, page, size);
        List<ListProductResponse> listProductResponses = ListProductResponse.fromList(products);
        long total = productRepository.count(name, brand, gender);

        return new SearchResult<>(total, listProductResponses);
    }
}
