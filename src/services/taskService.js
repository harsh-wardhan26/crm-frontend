import API from "../api/api";

export const getTasks = async () => {
  const res = await API.get("/tasks");
  return res.data;
};

export const addTask = async (data) => {
  const res = await API.post("/tasks", data);
  return res.data;
};