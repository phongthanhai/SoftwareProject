package com.example.Software.request.user;

import com.example.Software.model.Address;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateAddressRequest {
    private String email;
    private int type;
    private String firstName;
    private String lastName;
    private String province;
    private String district;
    private String ward;
    private String addressDetails;
    private String phone;

    public static Address toAddress(CreateAddressRequest request) {
        return Address.builder()
                .userEmail(request.getEmail())
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .type(request.getType())
                .province(request.getProvince())
                .district(request.getDistrict())
                .ward(request.getWard())
                .addressDetails(request.getAddressDetails())
                .phone(request.getPhone())
                .build();
    }
}
