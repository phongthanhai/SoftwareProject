package com.example.Software.response.user;

import com.example.Software.model.Image;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CartItemDTO {
    private String id;
    private String productId;
    private String productName;
    private Image imageUrl;
    private int quantity;
    private double retailPrice;
    private double discountPrice;
    private double totalPrice;
}
