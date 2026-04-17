import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getTasks, addTask } from "../services/taskService";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAdd = async () => {
    await addTask({ title });
    setTitle("");
    fetchTasks();
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 p-6 w-full bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Tasks</h2>

        <div className="bg-white p-4 rounded shadow mb-4">
          <input
            className="border p-2 mr-2"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button
            onClick={handleAdd}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add Task
          </button>
        </div>

        <div className="bg-white p-4 rounded shadow">
          {tasks.map((t) => (
            <div key={t.id} className="border-b p-2">
              {t.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tasks;