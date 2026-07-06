package com.example.CollegeEventmanagement.model;

import com.example.CollegeEventmanagement.enums.Department;
import com.example.CollegeEventmanagement.enums.Gender;
import com.example.CollegeEventmanagement.enums.Role;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "First name is required")
    @Size(min = 3, max = 50)
    @Column(nullable = false)
    private String firstName;

    @NotBlank(message = "Last name is required")
    @Size(min = 1, max = 50)
    @Column(nullable = false)
    private String lastName;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    @Column(nullable = false, unique = true)
    private String email;

    @NotBlank(message = "Password is required")
    @Size(min = 6, message = "Password must contain at least 6 characters")
    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    @NotBlank(message = "Roll number is required")
    @Column(nullable = false, unique = true)
    private String rollNumber;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Department department;

    @NotNull(message = "Year is required")
    private Integer year;

    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "^[0-9]{10}$",message = "Phone number must contain exactly 10 digits")
    private String phoneNumber;

    @Enumerated(EnumType.STRING)
    private Gender gender;


    private String profileImage;

    private LocalDateTime createdAt;

}