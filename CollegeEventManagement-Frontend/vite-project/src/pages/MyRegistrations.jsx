import { useEffect, useState } from "react";
import api from "../services/api";

function MyRegistrations() {

  const [registrations, setRegistrations] =
    useState([]);

  useEffect(() => {

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (user) {
      fetchRegistrations(user.id);
    }

  }, []);

  const fetchRegistrations = async (
    userId
  ) => {

    try {

      const response =
        await api.get(
          `/registrations/user/${userId}`
        );

      setRegistrations(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="min-h-screen p-10">

      <h1 className="text-4xl font-bold text-green-500 mb-8">
        My Registrations
      </h1>

      <div className="grid gap-6">

        {registrations.map((reg) => (

          <div
            key={reg.id}
            className="
              bg-gray-900
              border
              border-green-500
              rounded-xl
              p-6
            "
          >

            <h2 className="text-2xl text-green-500">
              {reg.event.title}
            </h2>

            <p>
              Registration ID:
              {" "}
              {reg.registrationCode}
            </p>

            <p>
              Date:
              {" "}
              {reg.registrationDate}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default MyRegistrations;