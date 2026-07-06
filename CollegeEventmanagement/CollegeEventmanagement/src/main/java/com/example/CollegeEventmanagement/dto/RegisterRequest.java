package com.example.CollegeEventmanagement.dto;

import com.example.CollegeEventmanagement.enums.Department;
import com.example.CollegeEventmanagement.enums.Gender;
import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class RegisterRequest {

    @NotBlank(message = "First name is required")
    private String firstName;

    @NotBlank(message = "Last name is required")
    private String lastName;

    @Email(message = "Invalid email")
    @NotBlank(message = "Email is required")
    private String email;

    @NotBlank(message = "Password is required")
    private String password;

    @NotBlank(message = "Roll number is required")
    private String rollNumber;

    private Department department;

    private Integer year;

    private String phoneNumber;

    private Gender gender;
}