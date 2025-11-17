import api from "./api";

export const getMatkul = () => api.get("/matkul");

export const getMatkulById = (id) => api.get(`/matkul/${id}`);

export const createMatkul = (payload) => api.post("/matkul", payload);

export const updateMatkul = (id, payload) => api.put(`/matkul/${id}`, payload);

export const deleteMatkul = (id) => api.delete(`/matkul/${id}`);
