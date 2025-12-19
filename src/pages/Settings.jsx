import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [emailAlerts, setEmailAlerts] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: darkMode ? "#111827" : "#f3f4f6",
        color: darkMode ? "white" : "black",
      }}
    >
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
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
          Settings
        </h1>

        <div
          style={{
            background: "white",
            color: "black",
            padding: "24px",
            borderRadius: "10px",
            marginTop: "20px",
            maxWidth: "400px",
          }}
        >
          <label style={{ display: "block", marginBottom: "16px" }}>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />{" "}
            Dark Mode
          </label>

          <label style={{ display: "block", marginBottom: "16px" }}>
            <input
              type="checkbox"
              checked={emailAlerts}
              onChange={() => setEmailAlerts(!emailAlerts)}
            />{" "}
            Email Notifications
          </label>

          <button
            style={{
              background: "#dc2626",
              color: "white",
              padding: "10px 16px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </main>
    </div>
  );
}
