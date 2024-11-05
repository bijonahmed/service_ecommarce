import { defineStore } from "pinia";
import axios from "~/plugins/axios";

const $axios = axios().provide.axios;
export const useUserStore = defineStore("user", {
  state: () => ({
    id: "",
    full_name: "",
    email: "",
    api_token: "",
    role_id: "",
    isLoggedIn: false,
  }),
  actions: {
    async formatDateTime(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`; // Format: YYYY-MM-DD HH:MM:SS
  },
    async login(email, password,captchaInput,userCapInput) {
      const deviceTime = await this.formatDateTime(new Date());
      await $axios
        .post("/auth/login", {
          email: email,
          password: password,
          captchaInput:captchaInput,
          userCapInput:userCapInput,
          deviceTime: deviceTime,
        })
        .then((result) => {
          //console.log("response:" +  result.data.user.id);
          //console.log("response:" +  result.data.access_token);
          //return false;
          localStorage.setItem("token", result.data.access_token);
          localStorage.setItem("userrole", result.data.user.role_id);
          this.$state.api_token = result.data.access_token;
          this.$state.role_id = result.data.user.role_id;
          this.$state.email = result.data.user.email;
          this.$state.id = result.data.user.id;
          this.$state.isLoggedIn = true;
        });
    },

    async register(name,email,country_1,inviteCode,userType,password,confirmPassword) {
      await $axios.post("/auth/register", {
        name: name,
        email: email,
        country_1: country_1,
        inviteCode: inviteCode,
        userType: userType,
        password: password,
        password_confirmation: confirmPassword,
      });
    },

    async getUser() {
      let res = await $axios.post("/auth/me");
      this.$state.id = res.data.data.id;
      this.$state.full_name = res.data.data.full_name;
      this.$state.email = res.data.data.email;
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
      this.$state.role_id = "";
      this.$state.isLoggedIn = false;
    },
  },
  persist: true,
});
