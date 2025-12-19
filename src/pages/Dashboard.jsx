import Sidebar from "../components/layout/Sidebar";
import { useState, useEffect } from "react";

export default function Dashboard() {
  // Track screen width for responsiveness
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
      }}
    >
      {/* SIDEBAR */}
      <aside
        style={{
          width: isMobile ? "100%" : "260px",
          backgroundColor: "#1e3a8a",
          color: "white",
          padding: "24px",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "24px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          Booking App
        </h2>

        <Sidebar />
      </aside>

      {/* MAIN CONTENT */}
      <main
        style={{
          flex: 1,
          padding: isMobile ? "20px" : "32px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "8px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          Welcome 👋
        </h1>

        <p
          style={{
            color: "#4b5563",
            marginBottom: "32px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          This is your dashboard overview
        </p>

        {/* SUMMARY GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(2, 1fr)",
            gap: "24px",
            maxWidth: "800px",
            margin: isMobile ? "0 auto" : "0",
          }}
        >
          <SummaryCard title="Total Bookings" value="12" />
          <SummaryCard title="Upcoming Services" value="3" />
          <SummaryCard title="Completed Services" value="7" />
          <SummaryCard title="Cancelled Bookings" value="2" />
        </div>
      </main>
    </div>
  );
}

/* SUMMARY CARD */
function SummaryCard({ title, value }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "28px",
        borderRadius: "10px",
        boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
        textAlign: "center",
      }}
    >
      <p
        style={{
          color: "#6b7280",
          fontSize: "14px",
          marginBottom: "14px",
        }}
      >
        {title}
      </p>

      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          color: "#111827",
        }}
      >
        {value}
      </h2>
    </div>
  );
}
