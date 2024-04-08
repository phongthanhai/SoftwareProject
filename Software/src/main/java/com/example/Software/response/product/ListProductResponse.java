package com.example.Software.response.product;

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
public class ListProductResponse {
    @JsonProperty("id")
    private String id;
    @JsonProperty("name")
    private String name;
    @JsonProperty("brand")
    private String brand;
    @JsonProperty("discount_price")
    private float discountPrice;
    @JsonProperty("retail_price")
    private float retailPrice;
    @JsonProperty("release_date")
    private String releaseDate;

    public static List<ListProductResponse> fromList(List<Product> products) {
        List<ListProductResponse> productResponses = new ArrayList<>();
        for (Product product : products) {
            ListProductResponse listProductResponse = new ListProductResponse(product.getId(),
                                                                            product.getName(),
                                                                            product.getBrand(),
                                                                            product.getDiscountPrice(),
                                                                            product.getRetailPrice(),
                                                                            product.getReleaseDate());
            productResponses.add(listProductResponse);
        }
        return productResponses;
    }
}
