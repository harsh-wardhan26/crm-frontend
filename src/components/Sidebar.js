import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed p-6">
      <h2 className="text-2xl font-bold mb-8">CRM</h2>

      <nav className="flex flex-col gap-4">
        <Link className="hover:text-gray-300" to="/dashboard">
          Dashboard
        </Link>

        <Link className="hover:text-gray-300" to="/customers">
          Customers
        </Link>
      </nav>

      <button
        onClick={handleLogout}
        className="mt-10 bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;