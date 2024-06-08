package com.example.Software.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Address {
    @Id
    private String id;
    @Field("user_email")
    private String userEmail;
    @Field("name")
    private String name;
    @Field("type")
    private int type;
    @Field("province")
    private String province;
    @Field("district")
    private String district;
    @Field("ward")
    private String ward;
    @Field("address_details")
    private String addressDetails;
    @Field("phone")
    private String phone;
}
