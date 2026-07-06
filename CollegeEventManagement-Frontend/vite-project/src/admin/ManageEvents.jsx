import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

function ManageEvents() {

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

      toast.error("Failed to load events");

    }
  };

  const deleteEvent = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmDelete) {
      return;
    }

    try {

      const response = await api.delete(
        `/events/${id}`
      );

      toast.success(response.data);

      fetchEvents();

    } catch (error) {

      console.log(error);

      toast.error("Cannot delete event");

    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-4xl font-bold text-green-500">
          Manage Events
        </h1>

        <Link
          to="/admin/add-event"
          className="
            bg-green-500
            hover:bg-green-400
            text-black
            font-bold
            px-6
            py-3
            rounded-lg
            transition
          "
        >
          + Add Event
        </Link>

      </div>

      {events.length === 0 ? (

        <div className="text-center mt-20">

          <h2 className="text-2xl text-gray-400">
            No Events Available
          </h2>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {events.map((event) => (

            <div
              key={event.id}
              className="
                bg-gray-900
                border
                border-green-500
                rounded-xl
                overflow-hidden
                shadow-lg
                hover:shadow-green-500/30
                transition
              "
            >

              <img
                src={
                  event.imageUrl ||
                  "https://images.unsplash.com/photo-1511578314322-379afb476865"
                }
                alt={event.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">

                <h2 className="text-2xl font-bold text-green-500 mb-3">
                  {event.title}
                </h2>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {event.description}
                </p>

                <div className="space-y-2 text-sm">

                  <p>
                    📅 <span className="font-semibold">Date:</span>{" "}
                    {event.eventDate}
                  </p>

                  <p>
                    ⏰ <span className="font-semibold">Time:</span>{" "}
                    {event.eventTime}
                  </p>

                  <p>
                    📍 <span className="font-semibold">Venue:</span>{" "}
                    {event.venue}
                  </p>

                  <p>
                    👨‍🏫 <span className="font-semibold">Organizer:</span>{" "}
                    {event.organizer}
                  </p>

                  {event.category && (
                    <p>
                      🎫 <span className="font-semibold">Category:</span>{" "}
                      {event.category}
                    </p>
                  )}

                </div>

                <div className="flex flex-wrap gap-2 mt-5">

                  <Link
                    to={`/admin/edit-event/${event.id}`}
                    className="
                      bg-blue-500
                      hover:bg-blue-400
                      px-4
                      py-2
                      rounded-lg
                      font-semibold
                    "
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      deleteEvent(event.id)
                    }
                    className="
                      bg-red-500
                      hover:bg-red-400
                      px-4
                      py-2
                      rounded-lg
                      font-semibold
                    "
                  >
                    Delete
                  </button>

                  <Link
                    to={`/admin/registrants/${event.id}`}
                    className="
                      bg-green-500
                      hover:bg-green-400
                      text-black
                      px-4
                      py-2
                      rounded-lg
                      font-semibold
                    "
                  >
                    Registrants
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default ManageEvents;