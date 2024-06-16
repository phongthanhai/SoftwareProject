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
    @Field("first_name")
    private String firstName;
    @Field("last_name")
    private String lastName;
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
