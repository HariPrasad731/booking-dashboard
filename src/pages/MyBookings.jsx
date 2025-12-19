import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";

const initialBookings = [
  {
    id: "BK001",
    service: "Home Cleaning",
    date: "20 May 2024 | 10:00 AM",
    price: 80,
    status: "In Progress",
  },
  {
    id: "BK002",
    service: "Yoga Session",
    date: "18 May 2024 | 08:00 AM",
    price: 50,
    status: "Completed",
  },
  {
    id: "BK003",
    service: "Plumbing Repair",
    date: "15 May 2024 | 04:00 PM",
    price: 120,
    status: "Cancelled",
  },
];

export default function MyBookings() {
  const [bookings, setBookings] = useState(initialBookings);
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const filteredBookings =
    filter === "All"
      ? bookings
      : bookings.filter((b) => b.status === filter);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f3f4f6" }}>
      <aside style={{ width: 260, background: "#1e3a8a", color: "white", padding: 24 }}>
        <h2 style={{ marginBottom: 24 }}>Booking App</h2>
        <Sidebar />
      </aside>

      <main style={{ flex: 1, padding: 32 }}>
        <h1 style={{ fontSize: 28, marginBottom: 20 }}>My Bookings</h1>

        {/* FILTER */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ marginBottom: 20 }}
        >
          <option>All</option>
          <option>In Progress</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>

        {filteredBookings.map((b) => (
          <div
            key={b.id}
            style={{
              background: "white",
              padding: 20,
              marginBottom: 16,
              borderRadius: 8,
            }}
          >
            <Link to={`/bookings/${b.id}`}>
              <h3>{b.service}</h3>
            </Link>
            <p>{b.date}</p>
            <p>Price: ${b.price}</p>
            <strong>{b.status}</strong>

            {/* ACTIONS */}
            <div style={{ marginTop: 10 }}>
              <button
                onClick={() =>
                  setBookings(
                    bookings.map((x) =>
                      x.id === b.id ? { ...x, status: "Cancelled" } : x
                    )
                  )
                }
                style={{ marginRight: 10, color: "red" }}
              >
                Cancel
              </button>

              <button onClick={() => setShowModal(true)}>
                Reschedule
              </button>
            </div>
          </div>
        ))}

        {/* RESCHEDULE MODAL */}
        {showModal && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ background: "white", padding: 20 }}>
              <h3>Reschedule Booking</h3>
              <input type="date" />
              <br /><br />
              <button onClick={() => setShowModal(false)}>Save</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
