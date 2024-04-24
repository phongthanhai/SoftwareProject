package com.example.Software.controller.product;

import com.example.Software.action.ProductContainer;
import com.example.Software.model.Product;
import com.example.Software.response.SearchResult;
import com.example.Software.response.product.ProductDTOResponse;
import com.example.Software.response.product.ProductDetailResponse;
import com.example.Software.service.product.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.util.StringUtils;
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
        if (StringUtils.hasText(name)){
            name = name.trim();
        }
        return productService.getProductByFilter(name, brand, gender, sortType, page, size);
    }

    @GetMapping("/{productId}")
    public ProductDetailResponse getProductDetail(@PathVariable String productId) {
        return productService.getProductDetailById(productId);
    }

    @GetMapping("/check")
    public List<Product> getProducts() {
        long start = System.currentTimeMillis();
        List<Product> products = ProductContainer.getProducts();
        long end = System.currentTimeMillis();
        System.out.println(end - start);
        return products;
    }

    @PostMapping("/update/{productId}")
    public void updateProduct(@PathVariable String productId) {
        Product product = productService.getProductById(productId);
        long start = System.currentTimeMillis();
        ProductContainer.updateProduct(product);
        long end = System.currentTimeMillis();
        System.out.println(end - start);
    }
}
