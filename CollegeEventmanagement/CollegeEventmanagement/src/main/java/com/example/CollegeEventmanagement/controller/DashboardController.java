package com.example.CollegeEventmanagement.controller;

import com.example.CollegeEventmanagement.dto.DashboardResponse;
import com.example.CollegeEventmanagement.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/dashboard")
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    @GetMapping
    public DashboardResponse getDashboardStats() {
        return dashboardService.getDashboardStats();
    }
}