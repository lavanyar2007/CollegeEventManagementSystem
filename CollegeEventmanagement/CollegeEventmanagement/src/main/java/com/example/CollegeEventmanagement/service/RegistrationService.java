package com.example.CollegeEventmanagement.service;

import com.example.CollegeEventmanagement.dto.RegistrationRequest;
import com.example.CollegeEventmanagement.model.Event;
import com.example.CollegeEventmanagement.model.Registration;
import com.example.CollegeEventmanagement.model.User;
import com.example.CollegeEventmanagement.repository.EventRepository;
import com.example.CollegeEventmanagement.repository.RegistrationRepository;
import com.example.CollegeEventmanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository registrationRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EventRepository eventRepository;

    public String registerForEvent(RegistrationRequest request) {

        User user = userRepository.findById(request.getUserId()).orElse(null);

        Event event = eventRepository.findById(request.getEventId()).orElse(null);

        if (user == null) {
            return "User not found";
        }

        if (event == null) {
            return "Event not found";
        }

        if (registrationRepository.existsByUserAndEvent(user, event)) {
            return "You have already registered for this event";
        }

        Registration registration = new Registration();

        registration.setUser(user);
        registration.setEvent(event);
        registration.setRegistrationDate(LocalDateTime.now());
        String registrationCode = "REG-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();

        registration.setRegistrationCode(registrationCode);

        registrationRepository.save(registration);

        return "Registration Successful. Your Registration ID is: " + registrationCode;
    }

    public List<Registration> getRegistrationsByUser(Long userId){

        User user = userRepository.findById(userId).orElse(null);

        if(user == null){
            return null;
        }

        return registrationRepository.findByUser(user);
    }

    public List<Registration> getRegistrationsByEvent(Long eventId){

        Event event = eventRepository.findById(eventId).orElse(null);

        if(event == null){
            return null;
        }

        return registrationRepository.findByEvent(event);
    }
}