import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import SalesChart from "../components/SalesChart";
import { getCustomers } from "../services/customerService";

function Dashboard() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const data = await getCustomers();
    setCount(data.length);
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 p-6 w-full bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-gray-500">Customers</h3>
            <p className="text-3xl font-bold">{count}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-gray-500">Leads</h3>
            <p className="text-3xl font-bold">45</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-gray-500">Revenue</h3>
            <p className="text-3xl font-bold">₹75,000</p>
          </div>
        </div>

        {/* Chart */}
        <SalesChart />
      </div>
    </div>
  );
}

export default Dashboard;