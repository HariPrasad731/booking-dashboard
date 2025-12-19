


import { useParams } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";

export default function BookingDetails() {
  const { id } = useParams();

  // Mock booking data (UI only)
  const booking = {
    id,
    service: "Home Cleaning",
    date: "20 May 2024",
    time: "10:00 AM",
    address: "Flat 203, Green Residency, Hyderabad",
    price: 80,
    addOns: ["Kitchen Cleaning", "Bathroom Cleaning"],
    status: "In Progress",
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f3f4f6" }}>
      
      {/* SIDEBAR */}
      <aside
        style={{
          width: "260px",
          backgroundColor: "#1e3a8a",
          color: "white",
          padding: "24px",
        }}
      >
        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "24px" }}>
          Booking App
        </h2>
        <Sidebar />
      </aside>

      {/* MAIN CONTENT */}
      <main style={{ flex: 1, padding: "32px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "24px" }}>
          Booking Details
        </h1>

        {/* BOOKING INFO CARD */}
        <div
          style={{
            background: "white",
            padding: "24px",
            borderRadius: "10px",
            marginBottom: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
            {booking.service}
          </h2>

          <p style={{ color: "#6b7280", margin: "8px 0" }}>
            {booking.date} | {booking.time}
          </p>

          <p style={{ marginTop: "10px" }}>
            <strong>Address:</strong> {booking.address}
          </p>

          <p style={{ marginTop: "10px" }}>
            <strong>Add-ons:</strong> {booking.addOns.join(", ")}
          </p>

          <p style={{ marginTop: "10px" }}>
            <strong>Total Price:</strong> ${booking.price}
          </p>
        </div>

        {/* STATUS TRACKER */}
        <div
          style={{
            background: "white",
            padding: "24px",
            borderRadius: "10px",
            marginBottom: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px" }}>
            Booking Status
          </h3>

          <StatusStep label="Booked" active />
          <StatusStep label="In Progress" active />
          <StatusStep label="Completed" />
        </div>

        {/* INVOICE BUTTON */}
        <button
          style={{
            padding: "12px 20px",
            borderRadius: "6px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Download Invoice
        </button>
      </main>
    </div>
  );
}

/* STATUS STEP COMPONENT */
function StatusStep({ label, active }) {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: active ? "#16a34a" : "#d1d5db",
          marginRight: "10px",
        }}
      ></div>
      <span style={{ color: active ? "#111827" : "#9ca3af" }}>{label}</span>
    </div>
  );
}
