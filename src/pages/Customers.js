import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  getCustomers,
  addCustomer,
  deleteCustomer,
  updateCustomer,
} from "../services/customerService";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  const fetchCustomers = async () => {
    const data = await getCustomers();
    setCustomers(data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleSubmit = async () => {
    if (editId) {
      await updateCustomer(editId, { name, email });
    } else {
      await addCustomer({ name, email });
    }

    setName("");
    setEmail("");
    setEditId(null);
    fetchCustomers();
  };

  const handleDelete = async (id) => {
    await deleteCustomer(id);
    fetchCustomers();
  };

  const handleEdit = (c) => {
    setName(c.name);
    setEmail(c.email);
    setEditId(c.id);
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 p-6 w-full bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Customers</h2>

        {/* Form */}
        <div className="bg-white p-4 rounded-xl shadow mb-6 flex gap-3">
          <input
            className="border p-2 rounded w-1/3"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="border p-2 rounded w-1/3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
          >
            {editId ? "Update" : "Add"}
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow">
          <table className="w-full text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3">ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((c) => (
                <tr key={c.id} className="border-t">
                  <td className="p-3">{c.id}</td>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td className="flex gap-2 p-2">
                    <button
                      onClick={() => handleEdit(c)}
                      className="bg-yellow-400 px-2 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(c.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Customers;