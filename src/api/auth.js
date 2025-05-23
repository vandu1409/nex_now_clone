import api from "../utils/axios";

export const register = async (data) => {
  try {
    const res = await api.post("/register", data);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const login = async (data) => {
  const res = await api.post("/login", data);
  return res
};

export const refreshToken = async () => {
  const res = await api.post("/refresh");
  return res.data;
};

export const getLoggedUser = async () => {
  const res = await api.get("/user");
  return res.data;
};
