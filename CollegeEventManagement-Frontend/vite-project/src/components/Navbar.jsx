import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {

    localStorage.removeItem("user");

    toast.success("Logged Out Successfully");

    navigate("/login");

    window.location.reload();
  };

  return (
    <nav className="bg-black shadow-lg border-b border-green-500">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-3xl font-bold text-green-500"
        >
          EventHub
        </Link>

        <div className="flex gap-6 text-white font-medium items-center">

          {/* ADMIN NAVBAR */}

          {user?.role === "ADMIN" ? (
            <>
              <Link
                to="/admin/dashboard"
                className="hover:text-green-400 transition"
              >
                Dashboard
              </Link>

              <Link
                to="/admin/events"
                className="hover:text-green-400 transition"
              >
                Manage Events
              </Link>

              <button
                onClick={handleLogout}
                className="
                  bg-red-500
                  px-4
                  py-2
                  rounded-lg
                  text-white
                  font-semibold
                  hover:bg-red-400
                  transition
                "
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* USER / GUEST NAVBAR */}

              <Link
                to="/"
                className="hover:text-green-400 transition"
              >
                Home
              </Link>

              <Link
                to="/events"
                className="hover:text-green-400 transition"
              >
                Events
              </Link>

              {user && (
                <Link
                  to="/my-registrations"
                  className="hover:text-green-400 transition"
                >
                  My Registrations
                </Link>
              )}

              <Link
                to="/about"
                className="hover:text-green-400 transition"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="hover:text-green-400 transition"
              >
                Contact
              </Link>

              {!user ? (
                <>
                  <Link
                    to="/login"
                    className="hover:text-green-400 transition"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    className="
                      bg-green-500
                      px-4
                      py-2
                      rounded-lg
                      text-black
                      font-semibold
                      hover:bg-green-400
                      transition
                    "
                  >
                    Register
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="
                    bg-red-500
                    px-4
                    py-2
                    rounded-lg
                    text-white
                    font-semibold
                    hover:bg-red-400
                    transition
                  "
                >
                  Logout
                </button>
              )}
            </>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;