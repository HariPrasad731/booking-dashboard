import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";

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
    <div style={{ display: "flex", minHeight: "100vh", background: "#f3f4f6" }}>
      
      <aside
        style={{
          width: "260px",
          background: "#1e3a8a",
          color: "white",
          padding: "24px",
        }}
      >
        <h2 style={{ fontWeight: "bold", marginBottom: "24px" }}>
          Booking App
        </h2>
        <Sidebar />
      </aside>

      <main style={{ flex: 1, padding: "32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
            Notifications
          </h1>

          {notifications.length > 0 && (
            <button
              onClick={clearAll}
              style={{
                background: "#dc2626",
                color: "white",
                padding: "8px 14px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Clear All
            </button>
          )}
        </div>

        {notifications.length === 0 && (
          <p style={{ marginTop: "20px", color: "#6b7280" }}>
            No notifications available
          </p>
        )}

        {notifications.map((n) => (
          <div
            key={n.id}
            style={{
              background: "white",
              padding: "16px",
              marginTop: "16px",
              borderRadius: "8px",
              opacity: n.read ? 0.6 : 1,
            }}
          >
            <p>{n.text}</p>

            {!n.read && (
              <button
                onClick={() => markAsRead(n.id)}
                style={{
                  marginTop: "8px",
                  background: "#2563eb",
                  color: "white",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "12px",
                }}
              >
                Mark as Read
              </button>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}
