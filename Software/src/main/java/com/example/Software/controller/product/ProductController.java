package com.example.Software.controller.product;

import com.example.Software.response.SearchResult;
import com.example.Software.response.product.ProductDTOResponse;
import com.example.Software.response.product.ProductDetailResponse;
import com.example.Software.service.product.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("product")
public class ProductController {
    private final ProductService productService;

    @GetMapping
    public SearchResult<List<ProductDTOResponse>> searchProducts(@RequestParam(required = false) String name,
                                                                 @RequestParam(required = false) String brand,
                                                                 @RequestParam(required = false) String gender,
                                                                 @RequestParam(required = false) String sortType,
                                                                 @RequestParam int page,
                                                                 @RequestParam int size) {
        name = name.trim();
        return productService.getProductByFilter(name, brand, gender, sortType, page, size);
    }

    @GetMapping("/{productId}")
    public ProductDetailResponse getProductDetail(@PathVariable String productId) {
        return productService.getProductDetailById(productId);
    }
}
