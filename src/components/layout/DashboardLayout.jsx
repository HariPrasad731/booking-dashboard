import { useState } from "react";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64
          bg-gradient-to-b from-blue-700 to-blue-900 text-white
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static
        `}
      >
        <Sidebar closeSidebar={() => setOpen(false)} />
      </aside>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col lg:ml-64">

        {/* TOP BAR (MOBILE ONLY) */}
        <header className="h-14 bg-white shadow flex items-center px-4 lg:hidden">
          <button onClick={() => setOpen(true)}>
            <Menu size={24} />
          </button>
          <h1 className="ml-4 font-semibold">Dashboard</h1>
        </header>

        {/* PAGE CONTENT */}
        <main className="p-4 sm:p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
