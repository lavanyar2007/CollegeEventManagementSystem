import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddEvent() {

  const navigate = useNavigate();

  const [event, setEvent] = useState({
    title: "",
    description: "",
    eventDate: "",
    eventTime: "",
    venue: "",
    organizer: "",
    imageUrl: "",
    maxParticipants: ""
  });

  const handleChange = (e) => {

    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.post("/events", event);

      alert("Event Created Successfully");

      navigate("/admin/events");

    } catch (error) {

      console.log(error);

      alert("Failed To Create Event");

    }
  };

  return (
    <div className="min-h-screen bg-gray-950 p-10">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-green-500 mb-8">
          Add Event
        </h1>

        <form
          onSubmit={handleSubmit}
          className="
            bg-gray-900
            border
            border-green-500
            rounded-xl
            p-8
            grid
            md:grid-cols-2
            gap-5
          "
        >

          <input
            type="text"
            name="title"
            placeholder="Event Title"
            onChange={handleChange}
            className="p-3 rounded bg-gray-800"
            required
          />

          <input
            type="text"
            name="organizer"
            placeholder="Organizer"
            onChange={handleChange}
            className="p-3 rounded bg-gray-800"
            required
          />

          <input
            type="date"
            name="eventDate"
            onChange={handleChange}
            className="p-3 rounded bg-gray-800"
            required
          />

          <input
            type="time"
            name="eventTime"
            onChange={handleChange}
            className="p-3 rounded bg-gray-800"
            required
          />

          <input
            type="text"
            name="venue"
            placeholder="Venue"
            onChange={handleChange}
            className="p-3 rounded bg-gray-800"
            required
          />

          <input
            type="number"
            name="maxParticipants"
            placeholder="Max Participants"
            onChange={handleChange}
            className="p-3 rounded bg-gray-800"
            required
          />

          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            onChange={handleChange}
            className="
              md:col-span-2
              p-3
              rounded
              bg-gray-800
            "
          />

          <textarea
            name="description"
            placeholder="Event Description"
            rows="5"
            onChange={handleChange}
            className="
              md:col-span-2
              p-3
              rounded
              bg-gray-800
            "
            required
          />

          <button
            type="submit"
            className="
              md:col-span-2
              bg-green-500
              hover:bg-green-400
              text-black
              font-bold
              py-3
              rounded-lg
            "
          >
            Create Event
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddEvent;