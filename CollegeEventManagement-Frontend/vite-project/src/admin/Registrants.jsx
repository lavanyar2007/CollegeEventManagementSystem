import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function Registrants() {

  const { id } = useParams();

  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetchRegistrants();
  }, []);

  const fetchRegistrants = async () => {

    try {

      const response =
        await api.get(
          `/registrations/event/${id}`
        );

      setRegistrations(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="min-h-screen bg-gray-950 p-10">

      <h1 className="text-4xl font-bold text-green-500 mb-8">
        Event Registrants
      </h1>

      <div className="overflow-x-auto">

        <table
          className="
            w-full
            bg-gray-900
            border
            border-green-500
          "
        >

          <thead>

            <tr className="bg-black">

              <th className="p-4">
                Registration ID
              </th>

              <th className="p-4">
                Student Name
              </th>

              <th className="p-4">
                Email
              </th>

              <th className="p-4">
                Department
              </th>

            </tr>

          </thead>

          <tbody>

            {registrations.map((reg) => (

              <tr
                key={reg.id}
                className="border-t border-green-500"
              >

                <td className="p-4">
                  {reg.registrationCode}
                </td>

                <td className="p-4">
                  {reg.user.firstName} {reg.user.lastName}
                </td>

                <td className="p-4">
                  {reg.user.email}
                </td>

                <td className="p-4">
                  {reg.user.department}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Registrants;