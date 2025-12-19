import Sidebar from "../components/layout/Sidebar";
import { Calendar, Clock, CheckCircle, XCircle } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <aside className="w-full md:w-64 bg-gradient-to-b from-blue-700 to-blue-900 text-white">
        <Sidebar />
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        {/* WELCOME */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome, Hari!
          </h1>
          <p className="text-gray-500">
            Manage your bookings and account details.
          </p>
        </div>

        {/* SUMMARY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Bookings" value="12" icon={<Calendar />} />
          <StatCard title="Upcoming Services" value="3" icon={<Clock />} />
          <StatCard title="Completed Services" value="7" icon={<CheckCircle />} />
          <StatCard title="Cancelled Bookings" value="2" icon={<XCircle />} />
        </div>

        {/* RECENT BOOKINGS */}
        <h2 className="text-lg font-semibold mb-4">Recent Bookings</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <BookingCard
            title="Home Cleaning"
            date="May 20, 2024 | 2:00 PM"
            price="$80"
            status="In Progress"
            color="bg-green-500"
            image="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800"
          />

          <BookingCard
            title="Yoga Session"
            date="May 18, 2024 | 10:00 AM"
            price="$50"
            status="Completed"
            color="bg-blue-500"
            image="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800"
          />

          {/* FIXED PLUMBING IMAGE */}
          <BookingCard
            title="Plumbing Repair"
            date="May 15, 2024 | 4:00 PM"
            price="$120"
            status="Cancelled"
            color="bg-red-500"
            image="https://images.unsplash.com/photo-1601999109332-5429b5c58fda?w=800"
          />
        </div>

        {/* ACTION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ActionCard
            title="My Bookings"
            text="View and manage all your bookings."
            button="Manage Bookings"
          />
          <ActionCard
            title="Payments & Invoices"
            text="Track your payments and download invoices."
            button="View Payments"
          />
          <ActionCard
            title="Profile Settings"
            text="Edit your profile and address."
            button="Edit Profile"
          />
          <ActionCard
            title="Notifications"
            text="Latest updates & offers."
            button="View Notifications"
            badge="3"
          />
        </div>
      </main>
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="flex items-center gap-2 text-blue-600 mb-2">
        {icon}
        <p className="text-sm text-gray-500">{title}</p>
      </div>
      <h3 className="text-2xl font-bold">{value}</h3>
    </div>
  );
}

function BookingCard({ title, date, price, status, color, image }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <img
        src={image}
        alt={title}
        className="h-40 w-full object-cover"
        onError={(e) => {
          e.target.src =
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800";
        }}
      />

      <div className="p-5">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="font-semibold mt-2">{price}</p>

        <span
          className={`inline-block mt-3 px-4 py-1 text-sm text-white rounded-full ${color}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

function ActionCard({ title, text, button, badge }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{text}</p>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded relative">
        {button}
        {badge && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 rounded-full">
            {badge}
          </span>
        )}
      </button>
    </div>
  );
}
