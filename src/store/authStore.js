import { defineStore } from "pinia";
import { login, refreshToken } from "../api/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: "",
    user: null,
    error: null,
  }),

  getters: {
    isLoggedIn: (state) => !!state.token,
  },

  actions: {
    async login(data) {
      try {
        const response = await login(data);
        console.log(response);

        this.token = response.data.data.access_token;
        // this.user = response.data.user ?? null;
        this.error = null;

        console.log(response)
        this.error = response?.response?.data?.errors || "";

        return response;
      } catch (err) {
        console.log(err);
        this.error = err.response?.data?.errors || "Đăng nhập thất bại";
      }
    },

    async refreshToken() {
      try {
        const response = await refreshToken();
        this.token = response.data;
      } catch (err) {
        tthis.error = err.response?.data?.message || "Vui lòng đăng nhập lại";
      }
    },
    setToken(token) {
      this.token = token;
    },
    logout() {
      this.token = "";
      this.user = null;
    },
  },

  persist: true,
});
