package com.example.CollegeEventmanagement.service;

import com.example.CollegeEventmanagement.dto.LoginRequest;
import com.example.CollegeEventmanagement.dto.RegisterRequest;
import com.example.CollegeEventmanagement.enums.Role;
import com.example.CollegeEventmanagement.model.User;
import com.example.CollegeEventmanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public String register(RegisterRequest request) {

        if(userRepository.findByEmail(request.getEmail())!=null){
            throw new RuntimeException("Email already exists");
        }

        if(userRepository.existsByRollNumber(request.getRollNumber())){
            throw new RuntimeException("Roll Number already exists");
        }

        User user = new User();

        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setRollNumber(request.getRollNumber());
        user.setDepartment(request.getDepartment());
        user.setYear(request.getYear());
        user.setPhoneNumber(request.getPhoneNumber());
        user.setGender(request.getGender());
        user.setRole(Role.USER);
        user.setCreatedAt(LocalDateTime.now());
         
        userRepository.save(user);

        return "Registration Successful";
    }
    public User login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail());

        if(user == null){
            return null;
        }

        if(!user.getPassword().equals(request.getPassword())){
            return null;
        }

        return user;
    }
}