package com.example.CollegeEventmanagement.controller;

import com.example.CollegeEventmanagement.dto.LoginRequest;
import com.example.CollegeEventmanagement.dto.RegisterRequest;
import com.example.CollegeEventmanagement.model.User;
import com.example.CollegeEventmanagement.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public String register(@Valid @RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    @PostMapping("/login")
    public ResponseEntity login(
            @RequestBody LoginRequest request
    ) {

        User user = authService.login(request);

        if(user == null){
            return ResponseEntity.badRequest()
                    .body("Invalid Email or Password");
        }

        return ResponseEntity.ok(user);
    }
}