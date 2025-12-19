import { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [emailAlerts, setEmailAlerts] = useState(true);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div
        className={`p-6 rounded-xl shadow max-w-md ${
          darkMode ? "bg-gray-900 text-white" : "bg-white"
        }`}
      >
        <label className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          Dark Mode
        </label>

        <label className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={emailAlerts}
            onChange={() => setEmailAlerts(!emailAlerts)}
          />
          Email Notifications
        </label>

        <button className="mt-4 bg-red-600 text-white px-5 py-2 rounded">
          Logout
        </button>
      </div>
    </DashboardLayout>
  );
}
