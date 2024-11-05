import { defineStore } from "pinia";
import axios from "~/plugins/axios";

const $axios = axios().provide.axios;
export const useUserStore = defineStore("user", {
  state: () => ({
    verification_status:"",
    verificationCode: "",
    id: "",
    full_name: "",
    role_id: "",
    status: "",
    email: "",
    api_token: "",
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
    async login(email, password, captchaInput, userCapInput) {

      const deviceTime = await this.formatDateTime(new Date());
      await $axios
        .post("/auth/login", {
          email: email,
          password: password,
          captchaInput: captchaInput,
          userCapInput: userCapInput,
          deviceTime: deviceTime,
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

    async adminLogin(email, password) {
      const deviceTime = await this.formatDateTime(new Date());
      await $axios.post("/auth/adminLogin", {
        email: email,
        password: password,
        deviceTime: deviceTime,
      })
        .then((result) => {

          console.log("State check Verification : " + result.data.user.verification_status);
          localStorage.setItem("token", result.data.access_token || "");
          localStorage.setItem("userrole", result.data.user.role_id || "");
          localStorage.setItem("requires_verification", 0);
          this.$state.api_token = result.data.access_token || "";
          this.$state.email = result.data.user.email || "";
          this.$state.id = result.data.user.id || "";
          this.$state.role_id = result.data.user.role_id || "";
          this.$state.status = result.data.user.status || "";
          this.$state.verification_status = result.data.user.verification_status;
          this.$state.isLoggedIn = true;
          // Assuming the response structure includes token and user info

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
      let res = await $axios.post("/auth/adminMe");
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
