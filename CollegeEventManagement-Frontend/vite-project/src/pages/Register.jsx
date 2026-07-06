import { useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

function Register() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    department: "",
    gender: "",
    year: "",
    rollNumber: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await api.post(
        "/auth/register",
        formData
      );

      toast.success("Registration Successful 🎉");

      console.log(response.data);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
        department: "",
        gender: "",
        year: "",
        rollNumber: ""
      });

    } catch (error) {

      console.log(error);

      toast.error(error.response?.data ||"Registration Failed");

    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-black">

      <div className="bg-gray-900 border border-green-500 rounded-2xl p-8 w-full max-w-3xl shadow-lg">

        <h1 className="text-3xl font-bold text-green-500 text-center mb-8">
          Student Registration
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-4"
        >

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
            required
          />

          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
            required
          />

          <input
            type="text"
            name="rollNumber"
            placeholder="Roll Number"
            value={formData.rollNumber}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
            required
          />

          {/* Department Dropdown */}

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
            required
          >
            <option value="">
              Select Department
            </option>

            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="MECH">MECH</option>
            <option value="CIVIL">CIVIL</option>
            <option value="AIDS">AI & DS</option>
            <option value="CSBS">CSBS</option>
          </select>

          {/* Gender Dropdown */}

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
            required
          >
            <option value="">
              Select Gender
            </option>

            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
          </select>

          {/* Year Dropdown */}

          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
            required
          >
            <option value="">
              Select Year
            </option>

            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>

          <div></div>

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
              transition
            "
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;