import { Menu } from "lucide-react";

export default function Topbar({ onMenuClick }) {
  return (
    <header className="h-14 bg-white shadow-sm flex items-center px-4 lg:hidden">
      <button onClick={onMenuClick}>
        <Menu size={24} />
      </button>
      <h1 className="ml-4 font-semibold">Dashboard</h1>
    </header>
  );
}
