import API from "./api";

export async function getAllDresses() {
  const response = await API.get("/dresses");
  return response.data;
}

export async function getDress(id) {
  const response = await API.get(`/dresses/${id}`);
  return response.data;
}

export async function createDress(data) {
  const response = await API.post("/dresses", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}

export async function updateDress(id, data) {
  const response = await API.put(`/dresses/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}

export async function deleteDress(id) {
  return API.delete(`/dresses/${id}`);
}
export async function getFeaturedDresses() {
    const response = await API.get("/dresses/featured");
    return response.data;
};