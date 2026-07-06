package com.example.CollegeEventmanagement.service;

import com.example.CollegeEventmanagement.dto.EventRequest;
import com.example.CollegeEventmanagement.model.Event;
import com.example.CollegeEventmanagement.repository.EventRepository;
import com.example.CollegeEventmanagement.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private RegistrationRepository registrationRepository;

    public Event addEvent(EventRequest request){

        Event event = new Event();

        event.setTitle(request.getTitle());
        event.setDescription(request.getDescription());
        event.setEventDate(request.getEventDate());
        event.setEventTime(request.getEventTime());
        event.setVenue(request.getVenue());
        event.setOrganizer(request.getOrganizer());
        event.setImageUrl(request.getImageUrl());
        event.setMaxParticipants(request.getMaxParticipants());

        return eventRepository.save(event);
    }
    public List<Event> getAllEvents(){
        return eventRepository.findAll();
    }

    public Event getEventById(Long id) {
        return eventRepository.findById(id).orElse(null);
    }

    public Event updateEvent(Long id, EventRequest request) {

        Event event = eventRepository.findById(id).orElse(null);

        if(event == null){
            return null;
        }

        event.setTitle(request.getTitle());
        event.setDescription(request.getDescription());
        event.setEventDate(request.getEventDate());
        event.setEventTime(request.getEventTime());
        event.setVenue(request.getVenue());
        event.setOrganizer(request.getOrganizer());
        event.setImageUrl(request.getImageUrl());
        event.setMaxParticipants(request.getMaxParticipants());

        return eventRepository.save(event);
    }

    public String deleteEvent(Long id) {

        Event event = eventRepository.findById(id).orElse(null);

        if(event == null) {
            return "Event not found";
        }

        if(!registrationRepository.findByEvent(event).isEmpty()) {
            return "Cannot delete event. Students have already registered.";
        }

        eventRepository.delete(event);

        return "Event deleted successfully";
    }

}