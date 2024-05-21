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
    @JsonProperty("colorway")
    private String colorway;
    @JsonProperty("gender")
    private String gender;
    @JsonProperty("discountPrice")
    private double discountPrice;
    @JsonProperty("retailPrice")
    private double retailPrice;
    @JsonProperty("releaseDate")
    private String releaseDate;
    @JsonProperty("currentStock")
    private double currentStock;

    public static List<ProductDTOResponse> fromList(List<Product> products) {
        List<ProductDTOResponse> productResponses = new ArrayList<>();
        for (Product product : products) {
            ProductDTOResponse listProductResponse = new ProductDTOResponse(product.getId(),
                                                                            product.getName(),
                                                                            product.getBrand(),
                                                                            product.getImage(),
                                                                            product.getColorway(),
                                                                            product.getGender(),
                                                                            product.getDiscountPrice(),
                                                                            product.getRetailPrice(),
                                                                            product.getReleaseDate(),
                                                                            product.getCurrentStock());
            productResponses.add(listProductResponse);
        }
        return productResponses;
    }
}
