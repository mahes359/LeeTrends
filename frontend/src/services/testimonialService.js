import API from "./api";

export const getTestimonials = () => API.get("/testimonials").then(r => r.data);
export const getAllTestimonials = () => API.get("/testimonials/all").then(r => r.data);
export const createTestimonial = (data) => API.post("/testimonials", data).then(r => r.data);
export const updateTestimonial = (id, data) => API.put(`/testimonials/${id}`, data).then(r => r.data);
export const deleteTestimonial = (id) => API.delete(`/testimonials/${id}`);
