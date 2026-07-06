import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await api.post(
        "/auth/login",
        {
          email,
          password
        }
      );
      console.log(response.data);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      );

      toast.success("Login Successful 🚀");

      // Redirect based on role

      if (response.data.role === "ADMIN") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }

    } catch (error) {

      console.log(error);

      toast.error("Invalid Email or Password");

    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4">

      <div
        className="
          bg-gray-900
          border
          border-green-500
          rounded-2xl
          p-8
          w-full
          max-w-md
          shadow-lg
        "
      >

        <h1 className="text-3xl font-bold text-green-500 text-center mb-8">
          Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="block mb-2 text-gray-300">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="
                w-full
                p-3
                rounded-lg
                bg-gray-800
                border
                border-gray-700
                focus:outline-none
                focus:border-green-500
              "
              required
            />

          </div>

          <div>

            <label className="block mb-2 text-gray-300">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="
                w-full
                p-3
                rounded-lg
                bg-gray-800
                border
                border-gray-700
                focus:outline-none
                focus:border-green-500
              "
              required
            />

          </div>

          <button
            type="submit"
            className="
              w-full
              bg-green-500
              hover:bg-green-400
              text-black
              font-bold
              py-3
              rounded-lg
              transition
            "
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;