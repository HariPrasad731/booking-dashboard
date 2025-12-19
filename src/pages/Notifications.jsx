import { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Your Home Cleaning service is In Progress", read: false },
    { id: 2, text: "Yoga Session completed successfully", read: true },
    { id: 3, text: "Get 20% OFF on your next booking!", read: false },
  ]);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  const clearAll = () => setNotifications([]);

  return (
    <DashboardLayout>
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold">Notifications</h1>

        {notifications.length > 0 && (
          <button
            onClick={clearAll}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Clear All
          </button>
        )}
      </div>

      {/* EMPTY STATE */}
      {notifications.length === 0 && (
        <p className="text-gray-500">
          No notifications available
        </p>
      )}

      {/* NOTIFICATIONS LIST */}
      <div className="space-y-4">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`bg-white p-4 rounded-lg shadow ${
              n.read ? "opacity-60" : ""
            }`}
          >
            <p>{n.text}</p>

            {!n.read && (
              <button
                onClick={() => markAsRead(n.id)}
                className="mt-3 text-sm bg-blue-600 text-white px-3 py-1 rounded"
              >
                Mark as Read
              </button>
            )}
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
