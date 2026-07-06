package com.example.CollegeEventmanagement.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "events")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Event title is required")
    @Column(nullable = false)
    private String title;

    @NotBlank(message = "Description is required")
    @Column(nullable = false)
    private String description;

    @NotNull(message = "Event date is required")
    @Column(nullable = false)
    private LocalDate eventDate;

    @NotNull(message = "Event time is required")
    @Column(nullable = false)
    private LocalTime eventTime;

    @NotBlank(message = "Venue is required")
    @Column(nullable = false)
    private String venue;

    @NotBlank(message = "Organizer is required")
    @Column(nullable = false)
    private String organizer;

    private String imageUrl;

    @NotNull(message = "Maximum participants is required")
    @Min(value = 1, message = "Participants must be at least 1")
    @Column(nullable = false)
    private Integer maxParticipants;
}