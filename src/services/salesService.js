import API from "../api/api";

export const getSales = async () => {
  const res = await API.get("/sales");
  return res.data;
};

export const addSale = async (data) => {
  const res = await API.post("/sales", data);
  return res.data;
};