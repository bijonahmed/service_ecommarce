import { defineStore } from "pinia";
import axios from "~/plugins/axios";

const $axios = axios().provide.axios;
export const useUserStore = defineStore("user", {
  state: () => ({
    id: "",
    full_name: "",
    role_id: "",
    status: "",
    email: "",
    api_token: "",
    isLoggedIn: false,
  }),
  actions: {
    async login(email, password,captchaInput,userCapInput) {
      await $axios
        .post("/auth/login", {
          email: email,
          password: password,
          captchaInput: captchaInput,
          userCapInput: userCapInput,
        })
        .then((result) => {
          localStorage.setItem("token", result.data.access_token);
          localStorage.setItem("userrole", result.data.user.role_id);
          this.$state.api_token = result.data.access_token;
          this.$state.email = result.data.user.email;
          this.$state.id = result.data.user.id;
          this.$state.role_id = result.data.user.role_id;
          this.$state.status = result.data.user.status;
          this.$state.isLoggedIn = true;
        });
    },

    async register(name, email, password, confirmPassword) {
      await $axios.post("/register", {
        full_name: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
      });
    },

    async getUser() {
      let res = await $axios.post("/auth/me");
      this.$state.id = res.data.data.id;
      this.$state.full_name = res.data.data.full_name;
      this.$state.email = res.data.data.email;
      this.$state.role_id = res.data.data.role_id;
      this.$state.isLoggedIn = true;
    },

    async logout() {
      await $axios.post("/auth/logout");
      this.resetState();
    },

    resetState() {
      this.$state.id = "";
      this.$state.full_name = "";
      this.$state.email = "";
      this.$state.api_token = "";
      this.$state.isLoggedIn = false;
    },
  },
  persist: true,
});
