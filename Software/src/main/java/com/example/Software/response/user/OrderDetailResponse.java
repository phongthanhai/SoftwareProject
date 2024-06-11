package com.example.Software.response.user;

import com.example.Software.model.Address;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetailResponse {
    private AddressDTO address;
    private double total;
    private List<CartItemDTO> items;
}
