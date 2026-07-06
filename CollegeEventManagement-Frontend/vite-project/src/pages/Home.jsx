import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div>

      {/* Hero Section */}

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">

        <h1 className="text-6xl font-bold text-green-500 mb-6">
          College Event Management
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          Discover • Register • Participate
        </p>

        <button
          onClick={() => navigate("/events")}
          className="
            bg-green-500
            hover:bg-green-400
            text-black
            font-bold
            px-8
            py-3
            rounded-lg
            transition
          "
        >
          Explore Events
        </button>

      </section>

      {/* Stats Section */}

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 p-8">

        <div className="bg-gray-900 rounded-xl p-8 text-center border border-green-500">

          <h2 className="text-4xl text-green-500 font-bold">
            50+
          </h2>

          <p className="text-gray-300 mt-2">
            Events
          </p>

        </div>

        <div className="bg-gray-900 rounded-xl p-8 text-center border border-green-500">

          <h2 className="text-4xl text-green-500 font-bold">
            500+
          </h2>

          <p className="text-gray-300 mt-2">
            Students
          </p>

        </div>

        <div className="bg-gray-900 rounded-xl p-8 text-center border border-green-500">

          <h2 className="text-4xl text-green-500 font-bold">
            20+
          </h2>

          <p className="text-gray-300 mt-2">
            Departments
          </p>

        </div>

      </section>

      {/* Features Section */}

      <section className="max-w-6xl mx-auto py-16 px-8">

        <h2 className="text-4xl font-bold text-center text-green-500 mb-12">
          Why Choose Our Platform?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-6 rounded-xl border border-green-500 text-center">
            <h3 className="text-2xl font-semibold mb-3">
              🎉 Exciting Events
            </h3>
            <p className="text-gray-400">
              Explore technical, cultural, sports and workshop events.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-green-500 text-center">
            <h3 className="text-2xl font-semibold mb-3">
              ⚡ Easy Registration
            </h3>
            <p className="text-gray-400">
              Register instantly and receive a unique registration ID.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-green-500 text-center">
            <h3 className="text-2xl font-semibold mb-3">
              🏆 Track Participation
            </h3>
            <p className="text-gray-400">
              View all your registered events in one place.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;