import DashboardLayout from "../components/layout/DashboardLayout";

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
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">
        Payments & Invoices
      </h1>

      {/* RESPONSIVE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {payments.map((payment) => (
          <div
            key={payment.id}
            className="bg-white p-6 rounded-xl shadow"
          >
            <p>
              <span className="font-semibold">Booking ID:</span>{" "}
              {payment.bookingId}
            </p>

            <p className="mt-1">
              <span className="font-semibold">Amount Paid:</span>{" "}
              ${payment.amount}
            </p>

            <p className="mt-1">
              <span className="font-semibold">Date:</span>{" "}
              {payment.date}
            </p>

            <span
              className={`inline-block mt-3 px-4 py-1 rounded-full text-sm text-white ${
                payment.status === "Paid"
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            >
              {payment.status}
            </span>

            <div className="mt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Download Invoice
              </button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
