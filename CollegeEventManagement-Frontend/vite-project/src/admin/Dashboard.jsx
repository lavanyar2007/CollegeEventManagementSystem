import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalEvents: 0,
    totalRegistrations: 0
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {

    try {

      const response =
        await api.get("/dashboard");

      setStats(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="min-h-screen bg-gray-950 p-10">

      <h1 className="text-4xl font-bold text-green-500 mb-10">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Total Users */}

        <div className="
          bg-gray-900
          border
          border-green-500
          rounded-xl
          p-8
          text-center
          shadow-lg
        ">

          <h2 className="text-xl text-gray-300">
            Total Users
          </h2>

          <p className="text-5xl font-bold text-green-500 mt-4">
            {stats.totalUsers}
          </p>

        </div>

        {/* Total Events */}

        <div className="
          bg-gray-900
          border
          border-green-500
          rounded-xl
          p-8
          text-center
          shadow-lg
        ">

          <h2 className="text-xl text-gray-300">
            Total Events
          </h2>

          <p className="text-5xl font-bold text-green-500 mt-4">
            {stats.totalEvents}
          </p>

        </div>

        {/* Total Registrations */}

        <div className="
          bg-gray-900
          border
          border-green-500
          rounded-xl
          p-8
          text-center
          shadow-lg
        ">

          <h2 className="text-xl text-gray-300">
            Total Registrations
          </h2>

          <p className="text-5xl font-bold text-green-500 mt-4">
            {stats.totalRegistrations}
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;