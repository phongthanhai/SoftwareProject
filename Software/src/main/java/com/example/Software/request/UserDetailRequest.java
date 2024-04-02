package com.example.Software.request;

import com.example.Software.constant.DateTimeFormats;
import com.example.Software.model.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
public class UserDetailRequest {
    @JsonProperty("user_id")
    private String userId;

    @JsonProperty("first_name")
    private String firstName;

    @JsonProperty("middle_name")
    private String middleName;

    @JsonProperty("last_name")
    private String lastName;

    @JsonProperty("mobile")
    private String mobile;

    @JsonProperty("email")
    private String email;

    @JsonProperty("password")
    private String password;

    @JsonProperty("role")
    private String role;

    @JsonProperty("gender")
    private String gender;

    @JsonProperty("intro")
    private String intro;

    @JsonProperty("register_at")
    private String registerAt;

    @JsonProperty("last_login")
    private String lastLogin;

    public static UserDetailRequest from(User user){
        String registerAt = DateTimeFormats.format(user.getRegisterAt(), DateTimeFormats.YYYY_MM_DD_HH_MM_SS_STANDARD);
        String lastLogin = DateTimeFormats.format(user.getLastLogin(), DateTimeFormats.YYYY_MM_DD_HH_MM_SS_STANDARD);

        return UserDetailRequest.builder()
                .userId(user.getUserId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .middleName(user.getMiddleName())
                .mobile(user.getMobile())
                .email(user.getEmail())
                .password(user.getPassword())
                .role(user.getRole())
                .gender(user.getGender())
                .intro(user.getIntro())
                .registerAt(registerAt)
                .lastLogin(lastLogin)
                .build();
    }

    public static User convertToUser(UserDetailRequest userDetailRequest){
        Date registerAt = DateTimeFormats.parse(userDetailRequest.getRegisterAt(), DateTimeFormats.YYYY_MM_DD_HH_MM_SS_STANDARD);
        Date lastLogin = DateTimeFormats.parse(userDetailRequest.getRegisterAt(), DateTimeFormats.YYYY_MM_DD_HH_MM_SS_STANDARD);

        return User.builder()
                .firstName(userDetailRequest.getFirstName())
                .lastName(userDetailRequest.getLastName())
                .middleName(userDetailRequest.getMiddleName())
                .mobile(userDetailRequest.getMobile())
                .email(userDetailRequest.getEmail())
                .password(userDetailRequest.getPassword())
                .role(userDetailRequest.getRole())
                .gender(userDetailRequest.getGender())
                .intro(userDetailRequest.getIntro())
                .registerAt(registerAt)
                .lastLogin(lastLogin)
                .build();
    }
}
