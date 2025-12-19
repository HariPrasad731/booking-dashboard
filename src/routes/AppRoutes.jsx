import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import MyBookings from "../pages/MyBookings";
import Profile from "../pages/Profile";
import Payments from "../pages/Payments";
import Notifications from "../pages/Notifications";
import Settings from "../pages/Settings";
import BookingDetails from "../pages/BookingDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/bookings" element={<MyBookings />} />
      <Route path="/bookings/:id" element={<BookingDetails />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
