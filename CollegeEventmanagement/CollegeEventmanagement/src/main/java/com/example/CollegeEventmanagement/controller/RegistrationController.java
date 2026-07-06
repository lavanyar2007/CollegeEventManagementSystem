package com.example.CollegeEventmanagement.controller;

import com.example.CollegeEventmanagement.dto.RegistrationRequest;
import com.example.CollegeEventmanagement.model.Registration;
import com.example.CollegeEventmanagement.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/registrations")
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    @PostMapping
    public String registerForEvent(@RequestBody RegistrationRequest request) {
        return registrationService.registerForEvent(request);
    }

    @GetMapping("/user/{userId}")
    public List<Registration> getUserRegistrations(@PathVariable Long userId){
        return registrationService.getRegistrationsByUser(userId);
    }

    @GetMapping("/event/{eventId}")
    public List<Registration> getEventRegistrations(@PathVariable Long eventId){
        return registrationService.getRegistrationsByEvent(eventId);
    }
}