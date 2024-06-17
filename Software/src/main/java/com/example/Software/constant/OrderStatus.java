package com.example.Software.constant;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum OrderStatus {
    APPROVED(1),
    DELIVERY(2),
    TERMINATED(3),
    REJECT(0);

    private final int status;
}
