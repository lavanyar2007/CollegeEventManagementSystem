package com.example.CollegeEventmanagement.repository;

import com.example.CollegeEventmanagement.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

    User findByRollNumber(String rollNumber);

    boolean existsByRollNumber(String rollNumber);
}