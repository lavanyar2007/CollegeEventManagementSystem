package com.example.CollegeEventmanagement.repository;

import com.example.CollegeEventmanagement.model.Registration;
import com.example.CollegeEventmanagement.model.Event;
import com.example.CollegeEventmanagement.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RegistrationRepository extends JpaRepository<Registration, Long> {

    List<Registration> findByUser(User user);

    List<Registration> findByEvent(Event event);

    long countByEvent(Event event);

    boolean existsByUserAndEvent(User user, Event event);

}