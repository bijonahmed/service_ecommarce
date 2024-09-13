<template>
  <div>
    <LogoAndPayment />
    <!-- navbar section start here  -->
    <NavbarSecond />
    <!-- Main section start here  -->

    <!-- Main section start here  -->
    <section class="main_content">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <SellerLeftsidebar />
          </div>
          <div class="col-md-8">
            <div class="dashCount">
              <div class="dashCbox">
                <img src="/images/dashboardicons/products-100.png" class="img-fluid" loading="lazy" alt="products" />
                <h2 class="fw-bold">1000</h2>
                <p>Total Products</p>
              </div>
              <div class="dashCbox">
                <img src="/images/dashboard/icons/shopping-bag-100.png" class="img-fluid" loading="lazy"
                  alt="products" />
                <h2 class="fw-bold">1000</h2>
                <p>Total Selling</p>
              </div>
              <div class="dashCbox">
                <img src="/images/dashboard/icons/cart-100.png" class="img-fluid" loading="lazy" alt="products" />
                <h2 class="fw-bold">1000</h2>
                <p>Total Orders</p>
              </div>
              <div class="dashCbox">
                <img src="/images/dashboardicons/defective-product-100.png" class="img-fluid" loading="lazy"
                  alt="products" />
                <h2 class="fw-bold">1000</h2>
                <p>Total Returns</p>
              </div>
              <div class="dashCbox">
                <img src="/images/dashboardicons/money-100.png" class="img-fluid" loading="lazy" alt="products" />
                <h2 class="fw-bold">1000</h2>
                <p>Total Commission</p>
              </div>
              <div class="dashCbox dbLink">
                <img src="/images/dashboardicons/money-bag-100.png" class="img-fluid" loading="lazy" alt="products" />
                <p><nuxt-link to="/seller/seller-wallet">Wallet</nuxt-link></p>
              </div>
              <div class="dashCbox dbLink">
                <img src="/images/dashboardicons/list-100.png" class="img-fluid" loading="lazy" alt="products" />
                <p>
                  <nuxt-link to="/seller/seller-comission-history">Comission History</nuxt-link>
                </p>
              </div>
              <div class="dashCbox dbLink">
                <img src="/images/dashboardicons/list-100.png" class="img-fluid" loading="lazy" alt="products" />
                <p>
                  <nuxt-link to="/seller/seller-payment-history">Payment History</nuxt-link>
                </p>
              </div>

              <div class="dashCbox dbLink" @click="setChatBox()">
                <img src="/images/dashboardicons/list-100.png" class="img-fluid" loading="lazy" alt="products" />
                <p>
                  <nuxt-link to="#">ChatBox</nuxt-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- END Main Section here -->
    <!-- back to top button  -->
    <div class="back_top">
      <a href="#top"><i class="fa-solid fa-angle-up"></i></a>
    </div>
    <Footer />
  </div>
</template>

<script>
import $ from "jquery";
import Common_MobileSidebar from "~/components/Common_MobileSidebar.vue";
import Common_MiniTabNavbar from "~/components/Common_MiniTabNavbar.vue";
import Common_MobileSearchProduct from "~/components/Common_MobileSearchProduct.vue";
import SellerLeftsidebar from "~/pages/seller/seller-leftsidebar.vue";
import NavbarSecond from "~/components/NavbarSecond.vue";

export default {
  middleware: "IsSeller",
  components: {
    NavbarSecond,
    Common_MobileSidebar,
    Common_MiniTabNavbar,
    Common_MobileSearchProduct,
    SellerLeftsidebar,
  },
  head: {
    title: "Seller Dashboard",
  },

  data() {
    return {
      loading: false,
      userdata: {
        id: "",
        email: "",
        phone_number: "",
      },
      passdata: {
        password: "",
        password_confirmation: "",
      },
      notifmsg: "",
      orders: [],
      errors: {},
    };
  },
  mounted() { },
  methods: {
    async setChatBox() {
      await this.$axios.post(`/auth/me`).then((response) => {
        // Seller Account Info
        let userId = response.data.id;
        let name = response.data.name;
        let email = response.data.email;
        return this.$router.push({
          path: '/seller/chatbox/messages',
          query: {
            slug: name,
            username: email,
            seller_id: userId,
            name: email
          }
        });
      });
    },
    changePassword() {
      const formData = new FormData();
      formData.append("password", this.passdata.password);
      formData.append(
        "password_confirmation",
        this.passdata.password_confirmation
      );
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      this.$axios
        .post("/auth/updatePassword", formData, {
          headers,
        })
        .then((res) => {
          $("#formrest")[0].reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Password has been successfully updated",
            showConfirmButton: false,
            timer: 1000,
          });
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
    },
  },
};
</script>

<style scoped>
.loading-indicator {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* For Loader */
.loader-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
}

.loader-text {
  margin: 0;
  /* Remove default margin */
}

.loader-top {
  top: 0;
}

.loader-bottom {
  bottom: 0;
}
</style>
