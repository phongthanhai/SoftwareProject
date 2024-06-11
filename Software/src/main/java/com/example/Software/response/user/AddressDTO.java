package com.example.Software.response.user;

import com.example.Software.model.Address;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddressDTO {
    private String id;
    private String userEmail;
    private String name;
    private int type;
    private String province;
    private String district;
    private String ward;
    private String addressDetails;
    private String phone;

    public static AddressDTO from(Address address) {
        return AddressDTO.builder()
                .id(address.getId())
                .userEmail(address.getUserEmail())
                .name(address.getFirstName() + " " + address.getLastName())
                .type(address.getType())
                .province(address.getProvince())
                .district(address.getDistrict())
                .ward(address.getWard())
                .addressDetails(address.getAddressDetails())
                .phone(address.getPhone())
                .build();
    }

    public static List<AddressDTO> from(List<Address> addresses) {
        List<AddressDTO> addressDTOs = new ArrayList<>();
        for (Address address : addresses) {
            addressDTOs.add(AddressDTO.from(address));
        }
        return addressDTOs;
    }
}
