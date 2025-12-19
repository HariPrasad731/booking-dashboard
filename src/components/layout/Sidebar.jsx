import { NavLink } from "react-router-dom";

const linkStyle = {
  display: "block",
  marginBottom: "16px",
  color: "white",
  textDecoration: "none",
  fontSize: "15px",
};

export default function Sidebar() {
  return (
    <>
      <NavLink to="/" style={linkStyle}>Dashboard</NavLink>
      <NavLink to="/bookings" style={linkStyle}>My Bookings</NavLink>
      <NavLink to="/profile" style={linkStyle}>Profile</NavLink>
      <NavLink to="/payments" style={linkStyle}>Payments</NavLink>
      <NavLink to="/notifications" style={linkStyle}>Notifications</NavLink>
      <NavLink to="/settings" style={linkStyle}>Settings</NavLink>
    </>
  );
}
