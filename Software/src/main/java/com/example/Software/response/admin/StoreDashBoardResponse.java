package com.example.Software.response.admin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StoreDashBoardResponse {
    private double productSold;
    private double revenue;
    private double expenses;
}
