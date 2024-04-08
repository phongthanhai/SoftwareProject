package com.example.Software.controller.product;

import com.example.Software.response.SearchResult;
import com.example.Software.response.product.ListProductResponse;
import com.example.Software.service.product.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("product")
public class ProductController {
    private final ProductService productService;

    @GetMapping
    public SearchResult<List<ListProductResponse>> searchProducts(@RequestParam(required = false) String name,
                                                              @RequestParam(required = false) String brand,
                                                              @RequestParam(required = false) String gender,
                                                              @RequestParam(required = false) String sortType,
                                                              @RequestParam int page,
                                                              @RequestParam int size) {
        return productService.getProductByFilter(name, brand, gender, sortType, page, size);
    }
}
