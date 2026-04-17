import API from "../api/api";

export const getLeads = async () => {
  const res = await API.get("/leads");
  return res.data;
};

export const addLead = async (data) => {
  const res = await API.post("/leads", data);
  return res.data;
};

export const deleteLead = async (id) => {
  await API.delete(`/leads/${id}`);
};