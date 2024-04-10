package com.example.Software.response.product;

import com.example.Software.model.Image;
import com.example.Software.model.Product;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ProductDTOResponse {
    @JsonProperty("id")
    private String id;
    @JsonProperty("name")
    private String name;
    @JsonProperty("brand")
    private String brand;
    @JsonProperty("image")
    private Image image;
    @JsonProperty("discountPrice")
    private float discountPrice;
    @JsonProperty("retailPrice")
    private float retailPrice;
    @JsonProperty("releaseDate")
    private String releaseDate;

    public static List<ProductDTOResponse> fromList(List<Product> products) {
        List<ProductDTOResponse> productResponses = new ArrayList<>();
        for (Product product : products) {
            ProductDTOResponse listProductResponse = new ProductDTOResponse(product.getId(),
                                                                            product.getName(),
                                                                            product.getBrand(),
                                                                            product.getImage(),
                                                                            product.getDiscountPrice(),
                                                                            product.getRetailPrice(),
                                                                            product.getReleaseDate());
            productResponses.add(listProductResponse);
        }
        return productResponses;
    }
}
