import api from "./api";

export const getTugas = () => api.get("/tugas");

export const getTugasById = (id) => api.get(`/tugas/${id}`);

export const createTugas = (payload) => api.post("/tugas", payload);

export const updateTugas = (id, payload) => api.put(`/tugas/${id}`, payload);

export const deleteTugas = (id) => api.delete(`/tugas/${id}`);
