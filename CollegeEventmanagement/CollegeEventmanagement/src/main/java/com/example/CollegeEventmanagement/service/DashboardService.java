package com.example.CollegeEventmanagement.service;

import com.example.CollegeEventmanagement.dto.DashboardResponse;
import com.example.CollegeEventmanagement.repository.EventRepository;
import com.example.CollegeEventmanagement.repository.RegistrationRepository;
import com.example.CollegeEventmanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private RegistrationRepository registrationRepository;

    public DashboardResponse getDashboardStats() {

        DashboardResponse response = new DashboardResponse();

        response.setTotalUsers(userRepository.count());
        response.setTotalEvents(eventRepository.count());
        response.setTotalRegistrations(registrationRepository.count());

        return response;
    }
}