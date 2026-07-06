package com.example.CollegeEventmanagement.repository;

import com.example.CollegeEventmanagement.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
}