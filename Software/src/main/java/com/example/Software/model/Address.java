package com.example.Software.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "order")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Address {
    @Id
    private String id;

    @Field("name")
    private String name;

    @Field("type")
    private int type;

    @Field("addressDetails")
    private String addressDetails;

    @Field("province")
    private String province;

    @Field("district")
    private String district;

    @Field("ward")
    private String ward;

    @Field("phone")
    private String phone;
}
