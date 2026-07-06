package com.example.CollegeEventmanagement.controller;

import com.example.CollegeEventmanagement.dto.EventRequest;
import com.example.CollegeEventmanagement.model.Event;
import com.example.CollegeEventmanagement.service.EventService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/events")
public class EventController {

    @Autowired
    private EventService eventService;

    @PostMapping
    public Event addEvent(@Valid @RequestBody EventRequest request){
        return eventService.addEvent(request);
    }

    @GetMapping
    public List<Event> getAllEvents(){
        return eventService.getAllEvents();
    }

    @GetMapping("/{id}")
    public Event getEventById(@PathVariable Long id) {
        return eventService.getEventById(id);
    }

    @PutMapping("/{id}")
    public Event updateEvent(@PathVariable Long id,
                             @RequestBody EventRequest request) {

        return eventService.updateEvent(id, request);
    }

    @DeleteMapping("/{id}")
    public String deleteEvent(@PathVariable Long id){
        return eventService.deleteEvent(id);
    }

}