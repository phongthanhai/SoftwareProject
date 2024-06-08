package com.example.Software.request.user;

import com.example.Software.constant.DateTimeFormats;
import com.example.Software.model.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
public class UserDetailRequest {
    private String userId;
    private String firstName;
    private String lastName;
    private String mobile;
    private String email;
    private String password;
    private String role;
    private String gender;
    private String intro;
    private String registerAt;
    private String lastLogin;
    public static UserDetailRequest from(User user){
        String registerAt = DateTimeFormats.format(user.getRegisterAt(), DateTimeFormats.YYYY_MM_DD_HH_MM_SS_STANDARD);
        String lastLogin = DateTimeFormats.format(user.getLastLogin(), DateTimeFormats.YYYY_MM_DD_HH_MM_SS_STANDARD);

        return UserDetailRequest.builder()
                .userId(user.getUserId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
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
