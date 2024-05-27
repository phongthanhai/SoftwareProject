package com.example.Software.response.user;

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
    private int quantity;
    private double unitPrice;
    private double totalPrice;
}
