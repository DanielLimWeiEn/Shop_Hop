import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);

export const showShopping = () => API.get("/shopping");
export const generateShopping = (formData) => API.post("/shopping/search", formData);

export const showProfile = () => API.get("/profile");
export const showPurchaseHistory = () => API.get("/profile/history");
export const showPurchases = () => API.get("/profile/manage");
export const addPurchase = (formData) => API.post("/profile/manage", formData);
export const updatePurchase = (id, formData) => API.put(`/profile/manage/${id}`, formData);
export const deletePurchase = (id) => API.delete(`/profile/manage/${id}`);