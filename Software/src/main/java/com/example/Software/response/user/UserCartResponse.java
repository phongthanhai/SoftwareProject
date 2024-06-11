package com.example.Software.response.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserCartResponse {
    private double total;
    private List<CartItemDTO> listItems;
}
