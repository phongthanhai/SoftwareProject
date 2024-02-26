package com.example.Software.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.validator.constraints.CodePointLength;

import java.util.Date;

@Entity
@Table(name = "user")
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "middle_name")
    private String middleName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "mobile")
    private String mobile;

    @Column(name = "password_hash")
    private String passwordHash;

    @Column(name = "registered_at")
    private Date registeredAt;

    @Column(name = "last_login")
    private Date lastLogin;

    @Column(name = "intro")
    private String intro;

    @Column(name = "profile")
    private String profile;
}
