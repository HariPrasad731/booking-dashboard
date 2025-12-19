import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarCheck,
  CreditCard,
  User,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="h-full flex flex-col p-6">
      {/* PROFILE */}
      <div className="flex items-center gap-3 mb-8">
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200"
          alt="Hari"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">Hi, Hari!</p>
          <p className="text-sm text-blue-200">hari@gmail.com</p>
        </div>
      </div>

      {/* MENU */}
      <nav className="flex-1 space-y-1">
        <MenuItem to="/" icon={<LayoutDashboard size={18} />} label="Dashboard" />
        <MenuItem to="/bookings" icon={<CalendarCheck size={18} />} label="My Bookings" />
        <MenuItem to="/payments" icon={<CreditCard size={18} />} label="Payments" />
        <MenuItem to="/profile" icon={<User size={18} />} label="Profile" />
        <MenuItem
          to="/notifications"
          icon={<Bell size={18} />}
          label="Notifications"
          badge="3"
        />
        <MenuItem to="/settings" icon={<Settings size={18} />} label="Settings" />
      </nav>

      {/* LOGOUT */}
      <button className="flex items-center gap-3 mt-6 text-blue-200 hover:text-white">
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
}

function MenuItem({ to, icon, label, badge }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-md transition ${
          isActive
            ? "bg-blue-800 text-white"
            : "text-blue-200 hover:bg-blue-800"
        }`
      }
    >
      {icon}
      <span className="flex-1">{label}</span>
      {badge && (
        <span className="bg-red-500 text-xs px-2 rounded-full">
          {badge}
        </span>
      )}
    </NavLink>
  );
}
