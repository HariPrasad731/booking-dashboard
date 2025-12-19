import Sidebar from "../components/layout/Sidebar";

const payments = [
  {
    id: "PAY001",
    bookingId: "BK001",
    amount: 80,
    date: "20 May 2024",
    status: "Paid",
  },
  {
    id: "PAY002",
    bookingId: "BK002",
    amount: 50,
    date: "18 May 2024",
    status: "Paid",
  },
  {
    id: "PAY003",
    bookingId: "BK003",
    amount: 120,
    date: "15 May 2024",
    status: "Refunded",
  },
];

export default function Payments() {
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
          Payments & Invoices
        </h1>

        {payments.map((payment) => (
          <div
            key={payment.id}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <p><strong>Booking ID:</strong> {payment.bookingId}</p>
            <p><strong>Amount Paid:</strong> ${payment.amount}</p>
            <p><strong>Date:</strong> {payment.date}</p>

            <span
              style={{
                display: "inline-block",
                marginTop: "8px",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "12px",
                color: "white",
                backgroundColor:
                  payment.status === "Paid" ? "#16a34a" : "#dc2626",
              }}
            >
              {payment.status}
            </span>

            <div style={{ marginTop: "12px" }}>
              <button
                style={{
                  padding: "8px 14px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "13px",
                }}
              >
                Download Invoice
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
