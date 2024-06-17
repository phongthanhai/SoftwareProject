package com.example.Software.constant;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum AddressType {
    DEFAULT(1),
    MEMBERS(2);

    private final int type;
}
