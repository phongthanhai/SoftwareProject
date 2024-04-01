package com.example.Software.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Document(collection = "user")
@Data
public class User {
    @Id
    private String userId;

    @Field("first_name")
    private String firstName;

    @Field("middle_name")
    private String middleName;

    @Field("last_name")
    private String lastName;

    @Field("mobile")
    private String mobile;

    @Field("email")
    private String email;

    @Field("password")
    private String password;

    @Field("vendor")
    private int vendor;

    @Field("intro")
    private String intro;

    @Field("register_at")
    private Date registerAt;

    @Field("last_login")
    private Date lastLogin;
}
