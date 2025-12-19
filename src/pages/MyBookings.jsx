import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";

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
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>

      {/* FILTER */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-6 p-2 border rounded"
      >
        <option>All</option>
        <option>In Progress</option>
        <option>Completed</option>
        <option>Cancelled</option>
      </select>

      {/* BOOKINGS LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredBookings.map((b) => (
          <div
            key={b.id}
            className="bg-white p-6 rounded-xl shadow"
          >
            <Link to={`/bookings/${b.id}`}>
              <h3 className="font-semibold text-lg">
                {b.service}
              </h3>
            </Link>

            <p className="text-gray-500 text-sm mt-1">
              {b.date}
            </p>

            <p className="mt-2 font-semibold">
              Price: ${b.price}
            </p>

            <span
              className={`inline-block mt-3 px-4 py-1 rounded-full text-white text-sm
                ${
                  b.status === "In Progress"
                    ? "bg-green-500"
                    : b.status === "Completed"
                    ? "bg-blue-500"
                    : "bg-red-500"
                }`}
            >
              {b.status}
            </span>

            {/* ACTIONS */}
            <div className="mt-4 flex gap-3">
              <button
                onClick={() =>
                  setBookings(
                    bookings.map((x) =>
                      x.id === b.id
                        ? { ...x, status: "Cancelled" }
                        : x
                    )
                  )
                }
                className="text-red-600"
              >
                Cancel
              </button>

              <button
                onClick={() => setShowModal(true)}
                className="text-blue-600"
              >
                Reschedule
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-semibold mb-4">
              Reschedule Booking
            </h3>
            <input type="date" className="border p-2" />
            <div className="mt-4 text-right">
              <button
                onClick={() => setShowModal(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
