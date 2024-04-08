package com.example.Software.service.product;

import com.example.Software.model.Product;
import com.example.Software.repository.product.ProductRepository;
import com.example.Software.response.SearchResult;
import com.example.Software.response.product.ProductDTOResponse;
import com.example.Software.response.product.ProductDetailResponse;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@AllArgsConstructor
public class ProductService {
    public static final int LIMIT_RELATED_PRODUCTS = 10;
    private final ProductRepository productRepository;
    public SearchResult<List<ProductDTOResponse>> getProductByFilter(String name, String brand, String gender, String sortType, int page, int size) {

        List<Product> products = productRepository.findByFilterIn(name, brand, gender, sortType, page, size);
        List<ProductDTOResponse> listProductResponses = ProductDTOResponse.fromList(products);
        long total = productRepository.count(name, brand, gender);

        return new SearchResult<>(total, listProductResponses);
    }

    public Product getProductById(String id) {
        return productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
    }

    public ProductDetailResponse getProductDetailById(String id) {
        Product product = getProductById(id);
        String brand = product.getBrand();
        Pageable pageAble = PageRequest.of(0, LIMIT_RELATED_PRODUCTS);
        List<Product> products = productRepository.findByBrandWithLatestRelease(brand, pageAble);
        List<ProductDTOResponse> productDTOResponseList = ProductDTOResponse.fromList(products);

        return new ProductDetailResponse(product, productDTOResponseList);
    }
}
