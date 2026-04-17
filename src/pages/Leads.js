import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getLeads, addLead, deleteLead } from "../services/leadService";

function Leads() {
  const [leads, setLeads] = useState([]);
  const [name, setName] = useState("");

  const fetchLeads = async () => {
    const data = await getLeads();
    setLeads(data);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleAdd = async () => {
    await addLead({ name });
    setName("");
    fetchLeads();
  };

  const handleDelete = async (id) => {
    await deleteLead(id);
    fetchLeads();
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 p-6 w-full bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Leads</h2>

        <div className="bg-white p-4 rounded shadow mb-4">
          <input
            className="border p-2 mr-2"
            placeholder="Lead Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Lead
          </button>
        </div>

        <div className="bg-white p-4 rounded shadow">
          {leads.map((l) => (
            <div key={l.id} className="flex justify-between border-b p-2">
              {l.name}
              <button
                onClick={() => handleDelete(l.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Leads;