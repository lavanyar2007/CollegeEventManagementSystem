import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

function EventDetails() {

  const { id } = useParams();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {

    try {

      const response = await api.get(`/events/${id}`);

      setEvent(response.data);

    } catch (error) {

      console.log(error);

      toast.error("Failed to load event");

    }
  };

  const registerEvent = async () => {

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) {

      toast.warning("Please Login First");

      return;
    }

    try {

      const response = await api.post(
        "/registrations",
        {
          userId: user.id,
          eventId: event.id
        }
      );

      toast.success(response.data);

    } catch (error) {

      console.log(error);

      if (error.response?.data) {
        toast.error(error.response.data);
      } else {
        toast.error("Registration Failed");
      }

    }
  };

  if (!event) {
    return (
      <h1 className="text-white text-center mt-20">
        Loading...
      </h1>
    );
  }

  return (
    <div className="min-h-screen px-6 py-10">

      <div className="max-w-4xl mx-auto bg-gray-900 border border-green-500 rounded-xl overflow-hidden shadow-lg">

        <img
          src={
            event.imageUrl ||
            "https://images.unsplash.com/photo-1511578314322-379afb476865"
          }
          alt={event.title}
          className="w-full h-80 object-cover"
        />

        <div className="p-8">

          <h1 className="text-4xl text-green-500 font-bold mb-5">
            {event.title}
          </h1>

          <p className="text-gray-300 mb-4">
            {event.description}
          </p>

          <p className="mb-2">
            📅 Date: {event.eventDate}
          </p>

          <p className="mb-2">
            ⏰ Time: {event.eventTime}
          </p>

          <p className="mb-2">
            📍 Venue: {event.venue}
          </p>

          <p className="mb-5">
            👨‍🏫 Organizer: {event.organizer}
          </p>

          <button
            onClick={registerEvent}
            className="
              bg-green-500
              hover:bg-green-400
              text-black
              px-8
              py-3
              rounded-lg
              font-bold
              transition
            "
          >
            Register Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default EventDetails;