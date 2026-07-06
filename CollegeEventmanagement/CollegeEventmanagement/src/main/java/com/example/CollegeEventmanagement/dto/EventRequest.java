package com.example.CollegeEventmanagement.dto;

import jakarta.validation.constraints.*;
import lombok.Data;


import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class EventRequest {

    @NotBlank(message = "Title is required")
    private String title;

    @NotBlank(message = "Description is required")
    private String description;

    @NotNull(message = "Event date is required")
    private LocalDate eventDate;

    @NotNull(message = "Event time is required")
    private LocalTime eventTime;

    @NotBlank(message = "Venue is required")
    private String venue;

    @NotBlank(message = "Organizer is required")
    private String organizer;

    private String imageUrl;

    @NotNull(message = "Maximum participants is required")
    private Integer maxParticipants;
}