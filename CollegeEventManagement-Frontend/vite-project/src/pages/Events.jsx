import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Events() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {

      const response = await api.get("/events");

      setEvents(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="min-h-screen px-6 py-10">

      <h1 className="text-4xl font-bold text-green-500 text-center mb-10">
        Upcoming Events
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {events.map((event) => (

          <div
            key={event.id}
            className="
              bg-gray-900
              border
              border-green-500
              rounded-xl
              overflow-hidden
              hover:scale-105
              transition
              shadow-lg
            "
          >

            <img
              src={
                event.imageUrl ||
                "https://images.unsplash.com/photo-1511578314322-379afb476865"
              }
              alt={event.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">

              <h2 className="text-2xl text-green-500 font-bold mb-3">
                {event.title}
              </h2>

              <p className="text-gray-300 mb-2">
                📅 {event.eventDate}
              </p>

              <p className="text-gray-300 mb-4">
                📍 {event.venue}
              </p>

              <Link
                to={`/event/${event.id}`}
                className="
                  inline-block
                  bg-green-500
                  hover:bg-green-400
                  text-black
                  px-5
                  py-2
                  rounded-lg
                  font-semibold
                "
              >
                View Details
              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Events;