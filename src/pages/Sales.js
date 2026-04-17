import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getSales, addSale } from "../services/salesService";

function Sales() {
  const [sales, setSales] = useState([]);
  const [amount, setAmount] = useState("");

  const fetchSales = async () => {
    const data = await getSales();
    setSales(data);
  };

  useEffect(() => {
    fetchSales();
  }, []);

  const handleAdd = async () => {
    await addSale({ amount });
    setAmount("");
    fetchSales();
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 p-6 w-full bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Sales</h2>

        <div className="bg-white p-4 rounded shadow mb-4">
          <input
            className="border p-2 mr-2"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button
            onClick={handleAdd}
            className="bg-purple-500 text-white px-4 py-2 rounded"
          >
            Add Sale
          </button>
        </div>

        <div className="bg-white p-4 rounded shadow">
          {sales.map((s) => (
            <div key={s.id} className="border-b p-2">
              ₹{s.amount}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sales;