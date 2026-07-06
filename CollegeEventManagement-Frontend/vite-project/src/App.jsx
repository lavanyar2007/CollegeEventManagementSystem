import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import MyRegistrations from "./pages/MyRegistrations";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Dashboard from "./admin/Dashboard";
import ManageEvents from "./admin/ManageEvents";
import AddEvent from "./admin/AddEvent";
import EditEvent from "./admin/EditEvent";
import Registrants from "./admin/Registrants";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/my-registrations" element={<MyRegistrations />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/events" element={<ManageEvents />} />
        <Route path="/admin/add-event" element={<AddEvent />} />
        <Route path="/admin/edit-event/:id" element={<EditEvent />} />
        <Route path="/admin/registrants/:id" element={<Registrants />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;