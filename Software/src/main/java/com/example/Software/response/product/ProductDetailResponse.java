package com.example.Software.response.product;

import com.example.Software.model.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDetailResponse {
    private Product product;
    private List<ProductDTOResponse> relatedProducts;
}
