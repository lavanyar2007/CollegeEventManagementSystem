import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function EditEvent() {

  const { id } = useParams();
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

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {

    try {

      const response =
        await api.get(`/events/${id}`);

      setEvent(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  const handleChange = (e) => {

    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.put(
        `/events/${id}`,
        event
      );

      alert("Event Updated Successfully");

      navigate("/admin/events");

    } catch (error) {

      console.log(error);

      alert("Failed To Update Event");

    }
  };

  return (
    <div className="min-h-screen bg-gray-950 p-10">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-green-500 mb-8">
          Edit Event
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
            value={event.title}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800"
          />

          <input
            type="text"
            name="organizer"
            value={event.organizer}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800"
          />

          <input
            type="date"
            name="eventDate"
            value={event.eventDate}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800"
          />

          <input
            type="time"
            name="eventTime"
            value={event.eventTime}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800"
          />

          <input
            type="text"
            name="venue"
            value={event.venue}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800"
          />

          <input
            type="number"
            name="maxParticipants"
            value={event.maxParticipants}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800"
          />

          <input
            type="text"
            name="imageUrl"
            value={event.imageUrl}
            onChange={handleChange}
            className="md:col-span-2 p-3 rounded bg-gray-800"
          />

          <textarea
            name="description"
            rows="5"
            value={event.description}
            onChange={handleChange}
            className="md:col-span-2 p-3 rounded bg-gray-800"
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
            Update Event
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditEvent;