<template>
  <div>
    <LogoAndPayment />
    <!-- navbar section start here  -->
    <NavbarSecond />
    <!-- Main section start here  -->

    <section class="main_content">
      <div class="container">
        <form @submit.prevent="placeOrder()" id="formrest" class="forms-sample" enctype="multipart/form-data">
          <div class="row">
            <div class="col-md-8">
              <div class="delivery_addreess">
                <h6>Delivery To : {{ insertdata.name }}</h6>
                <div class="address">
                  <div>
                    <p v-if="address !== null">{{ shipp_address }}</p>
                    <p v-else>Please add your address</p>
                  </div>
                  <div>
                    <select v-model="shipp_address">
                      <option v-for="(address, index) in address" :key="index" :value="address" :selected="index === 0">
                        Address {{ index + 1 }}</option>
                    </select>
                    <nuxt-link to="/user/user-profile" class="add_address" type="button"><i
                        class="fa-solid fa-plus"></i>Add New</nuxt-link>
                  </div>
                </div>
                <div class="pickUp_address d-none">
                </div>
                <p> Bill to same address : <a class="billing_address btn_edit" style="cursor: pointer;">Edit</a>

                  <!-- modal  -->
                <div class="modal_checkoutpage bill_address">
                  <div class="modal_box">
                    <div class="row">
                      <div class="col-8 text-end">
                        <h6 class="m-0">Select billing address</h6>
                      </div>
                      <div class="col-4 ms-auto text-end">
                        <a class="btn_edit modal_close"><i class="fa-solid fa-x"></i></a>
                      </div>
                    </div>
                    <form action="">
                      <select v-model="shipp_address" class="form-control mb-2">
                        <option v-for="(address, index) in address" :key="index" :value="address"
                          :selected="index === 0">Address {{ index + 1 }}</option>
                      </select>
                      <a style="cursor: pointer;" class="btn_confirm modal_close mt-2">Submit</a>
                    </form>
                  </div>
                </div>
                </p>
              </div>

              <div class="items_details">
                <h5>Items</h5>
                <div class="checkItem" v-for="item in cart" :key="item.product.id">
                  <div class="row">
                    <div class="col-md-8">
                      <div class="item">
                        <nuxt-link :to="`/product-details/${item.product.pro_slug}`"
                          class="d-flex align-items-center text-dark checkIProtem">
                          <div>
                            <img :src="item.product.thumnail_img" class="img-fluid" alt="" />
                          </div>
                          <div class="" style="width: 45%">
                            <h5>
                              <b>{{ item.product.product_name }} </b>
                            </h5>
                            <p class="mb-0">
                              <span v-if="item.product.brand_name" class="p-0 m-0">{{
                                item.product.brand_name
                                }}</span>
                              <span v-else class="p-0 m-0">No Brand</span>
                              <span v-if="item.product.color !== null &&
                                item.product.color !== '' &&
                                item.product.color !== undefined
                              " class="p-0 m-0">, Color: <b>{{ item.product.color }}</b></span>
                              <span v-if="item.product.size !== null &&
                                item.product.size !== '' &&
                                item.product.size !== undefined
                              " class="p-0 m-0">, Size:<b>{{ item.product.size }}</b>
                              </span>
                            </p>

                            <span v-if="item.product.warranty_id" class="p-0 m-0">Warranty:
                              {{ item.product.warranty_name }} ${{ item.product.warrantyamt }}</span>
                          </div>
                        </nuxt-link>
                        <div class="">
                          <span class="d-flex align-items-center" style="min-width: 80px">QTY: {{ item.quantity
                            }}</span>
                        </div>
                        <div>
                          <button type="button" @click="removeFromCart(item.product)">
                            <i class="fa-solid fa-trash-can"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="d-flex justify-content-end align-items-center">
                        <span class="badges px-1"
                          v-if="item.product.discount_status == 1 && item.product.discount !== 0">{{
                            item.product.discount }}%</span>
                        <span class="badges px-1"
                          v-if="item.product.discount_status == 2 && item.product.discount !== 0">${{
                            item.product.discount.toFixed(2) }}</span>
                        <p>
                          <del class="me-1" v-if="item.product.discount !== 0">${{ item.product.price.toFixed(2)
                            }}</del>${{ item.product.last_price.toFixed(2) }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="sub_total">
                    <div class="row">
                      <div class="col-8">
                        <div class="delivery_section">
                          <h5>
                            Standard delivery |
                            <span v-if="item.product.flat_rate_price">${{ item.product.flat_rate_price.toFixed(2)
                              }}</span>
                            <span v-else>Free Delivery</span>
                          </h5>
                          <p>
                            Receive by
                            {{ calculateShippingDate(item.product.shipping_days) }}
                          </p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="s_item_sub">
                          <p>
                            {{ item.quantity }} item(s). Subtotal: ${{ getPrice(item).toFixed(2) }}
                          </p>
                          <span class="text-success">Save: ${{ getSave(item).toFixed(2) }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="delivery_addreess paymentMethod_tabs">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="Card-tab" data-bs-toggle="tab" data-bs-target="#Card-tab-pane"
                      type="button" role="tab" aria-controls="Card-tab-pane" aria-selected="true">
                      Card
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="profile-tab" data-bs-toggle="tab"
                      data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane"
                      aria-selected="false">
                      Cash On Delivery
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade py-1" id="Card-tab-pane" role="tabpanel" aria-labelledby="Card-tab"
                    tabindex="0">
                    <div class="d-flex flex-column mb-3">
                      <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                        <div class="cardPay w-100">
                          <!-- {{ cardList }} -->
                          <div v-if="cardList !== ''" v-for="(card, index) in cardList.paymentCard" :key="index"
                            class="mb-2 w-100">
                            <input type="radio" @change="handlePaymentSelection()" class="btn-check" :value="card.id"
                              v-model="selectedPayment" name="paymentMethod" :id="'option' + index"
                              autocomplete="off" />
                            <label :for="'option' + index"
                              class="btn btn-outline-primary border-0 px-2 py-1 w-100 btn-lg" style="max-width: 350px">
                              <div class="mt-0 d-flex justify-content-between align-items-center">
                                <div class="d-flex flex-row align-items-center">
                                  <img src="/images/qHX7vY1.webp" class="rounded" width="50px" />
                                  <div class="d-flex flex-column ms-3">
                                    <span class="h5 mb-1 text-start" style="font-size: 14px">{{ card.holder_name
                                      }}</span>
                                    <span class="small text-muted" style="font-size: 12px"> **** {{ card.card_number
                                      }}</span>
                                  </div>
                                </div>
                                <div>
                                  <input type="text" class="form-control" placeholder="CVV"
                                    style="width: 70px; font-size: 12px" />
                                </div>
                              </div>
                            </label>
                          </div>

                          <a type="button" class="btn addNewCardBT p-0" style="width: fit-content; color: #900c3f">Add
                            new card</a>
                        </div>
                        <!-- add card section -->
                        <div class="addNewCard w-100">
                          <a type="button" class="btn backBT btn-edit p-0"><i class="fa-solid fa-arrow-left"></i></a>
                          <form action="" @submit.prevent="saveCard()" id="cardInput">
                            <div class="row mb-4">
                              <div class="col-md-12">
                                <input type="text" v-model="user_id" hidden class="form-control">
                                <div class="form-group mb-2">
                                  <label for="">Card holder name</label>
                                  <input type="text" v-model="cardData.holder_name" placeholder="Jhon Due"
                                    autocomplete="off" class="form-control" />
                                </div>
                              </div>
                              <div class="col-8">
                                <div class="form-group mb-2">
                                  <label for="">Card Number</label>
                                  <input type="text" v-model="cardData.card_number" placeholder="**** **** ****"
                                    autocomplete="off" class="form-control" />
                                </div>
                              </div>
                              <div class="col-4">
                                <div class="form-group mb-2">
                                  <label for="">Expire</label>
                                  <input type="text" v-model="cardData.expiry_date" placeholder="MM/YY"
                                    autocomplete="off" class="form-control" />
                                </div>
                              </div>
                              <div class="col-12">
                                <button type="submit" class="btn btn_edit"
                                  style="border: 1px solid; width: fit-content">Add
                                  Card</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade show active py-1" id="profile-tab-pane" role="tabpanel"
                    aria-labelledby="profile-tab" tabindex="0">
                    <div class="my-2 w-100">
                      <input type="radio" class="btn-check" name="paymentMethod" id="COD" value="COD" autocomplete="off"
                        v-model="selectedPayment" @change="handlePaymentSelection" />
                      <label class="btn btn-outline-primary border-0 w-100 px-2 py-1 btn-lg" style="max-width: 350px"
                        for="COD">
                        <div class="d-flex align-items-center justify-content-between w-100">
                          <div>
                            <h6 class="mb-0">Cash on delivery</h6>
                            <p>Extra charge: ${{ companyData.transaction_fee }}</p>
                          </div>
                          <div>
                            <p class="badge bg-success" style="color: #fff !important">
                              Cash
                            </p>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="cart_sidebar">
                <div class="d-flex align-items-center justify-content-between">
                  <p>Ecommerce Voucher</p>
                  <!-- <strong>{{ coupon.name }}</strong> -->
                </div>

                <form @submit.prevent="getCouponData()" id="coupon" action="">
                  <div class="d-flex align-items-center">
                    <input type="text" v-model="insertdata.id" hidden />
                    <input type="text" v-model="coupons.price" hidden />
                    <input type="text" style="
                        font-size: 12px;
                        border: none !important;
                        border-bottom: 1px solid #900c3f !important;
                      " v-model="coupons.couponCode" class="form-control me-2 rounded-0"
                      placeholder="Enter Your Promo Code " />
                    <button class="btn_confirm h-100 rounded-0" style="border: 1px solid">
                      Submit
                    </button>
                  </div>
                </form>
                <div class="price_summery">
                  <a class="btn_edit w-100 badge bg-success-light mt-2 text-start" @click="opendiscount()">
                    view available offers
                  </a>
                  <!-- modal  -->
                  <div class="modal_checkoutpage couponModal">
                    <div class="modal_box">
                      <div class="d-flex justify-content-between align-items-center">
                        <h6 class="mb-0">Coupon discounts </h6>
                        <a class="btn_edit modal_close pe-0" @click="closediscount()"><i class="fa-solid fa-x"></i></a>
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="discountList" v-for="couponItem in Dcouponlist">
                            <!-- <div class="loading-indicator" 
                              style="text-align: center;position: absolute; z-index: 2; left: 0; top: 0; background: #ffffff5c; height: 100%; width: 100%; object-fit: contain;">
                              <div class="loader-container">
                                <img src="/loader/loader.gif" alt="Loader" />
                              </div>
                            </div> -->
                            <div class="coupon">
                              <div class="cbottom">
                                <p>
                                  Min Spend <strong>${{ couponItem.min_shopping }}</strong> to get
                                  <span
                                    v-if="couponItem.d_percent !== null && couponItem.d_percent !== undefined && couponItem.d_percent !== 0">
                                    ${{ couponItem.d_percent }}.00
                                  </span>
                                  <span
                                    v-if="couponItem.d_fvalue !== null && couponItem.d_fvalue !== undefined && couponItem.d_fvalue !== 0">
                                    {{ couponItem.d_fvalue }}%
                                  </span>
                                  OFF on total orders
                                </p>
                                <div class="copyCode">
                                  <p>Code: <strong>{{ couponItem.promocode }}</strong></p>
                                  <a @click="copyCode(couponItem.promocode)" class="btn_copy text-dark"
                                    style="cursor: pointer;"><i class="fa-regular fa-copy"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <nuxt-link to="/coupons" class="btn_edit d-flex justify-content-end">See all </nuxt-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pirce_summary">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Order Summary</strong>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td><strong>Items Total</strong></td>
                        <td class="text-end">${{ sumOfLastPrices.toFixed(2) }}</td>

                      </tr>
                      <tr v-if="COD_fee !== 0 && selectedPayment == 'COD'">
                        <td><strong>Cash on delivery Fee </strong></td>
                        <td class="text-end">${{ COD_fee }}</td>
                      </tr>
                      <tr>
                        <td><strong>Delivery Fee </strong></td>
                        <td class="text-end">${{ sumOfFlatRatePrices.toFixed(2) }}</td>
                      </tr>
                      <tr id="discount">
                        <td><strong class="text-success">Coupon Discount</strong></td>
                        <td class="text-end text-success">-${{ typeof discount === 'number' ? discount.toFixed(2) : ''
                          }}</td>

                      </tr>
                      <tr>
                        <td><strong>Total Payment</strong></td>
                        <td class="text-end">${{ totalSum.toFixed(2) }}</td>
                      </tr>
                      <tr class="border-0" id="#Paymethod" v-if="this.selectedPayment == 'COD'">
                        <td class="border-0"><strong>Payment method</strong></td>
                        <td class="text-end border-0">
                          <p class="badge bg-success text-white">COD</p>
                        </td>
                      </tr>
                      <tr class="border-0" id="#Paymethod"
                        v-if="this.selectedPayment !== '' && this.selectedPayment !== 'COD'">
                        <td class="border-0"><strong>Payment method</strong></td>
                        <td class="text-end border-0">
                          <p class="badge bg-success-light">CARD</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div class="">
                    <p class="text-start badge bg-danger-light" style="width: fit-content;" id="errorDiscount">Wrong
                      coupon code </p>
                    <p class="text-start badge bg-success-light" style="width: fit-content;" id="discount_msg">Checkout
                      with Coupon Cashback</p>
                    <p class="text-end">VAT included, Where applicable </p>
                  </div>

                  <span v-if="cart.length > 0">
                    <button type="submit" class="btn_cart text-center" style="
                        visibility: unset;
                        background-color: #900c3f;
                        color: #fff;
                        margin-top: 10px;
                      ">
                      Place Order
                    </button>
                  </span>
                  <span v-else>
                    <center>Please add to cart.</center>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <input type="text" v-model="selectedPayment" hidden>
        </form>
      </div>
    </section>

    <!-- END Main Section here -->
    <!-- back to top button  -->
    <div class="back_top">
      <a href="#top"><i class="fa-solid fa-angle-up"></i></a>
    </div>
    <!-- {{ companyData.transaction_fee }} -->
    <Footer />

  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";
import Common_MobileSidebar from "~/components/Common_MobileSidebar.vue";
import Common_MiniTabNavbar from "~/components/Common_MiniTabNavbar.vue";
import Common_MobileSearchProduct from "~/components/Common_MobileSearchProduct.vue";
import RecentView from "~/components/RecentView.vue";
import NavbarSecond from "../components/NavbarSecond.vue";

export default {
  middleware: "auth",
  components: {
    NavbarSecond,
    Common_MobileSidebar,
    Common_MiniTabNavbar,
    Common_MobileSearchProduct,
    RecentView,
  },
  head: {
    title: "Checkout",
  },
  data() {
    return {
      cardList: [],
      cardData: {
        holder_name: '',
        card_number: '',
        expiry_date: '',
      },
      billAddress: "",
      shipp_address: "",
      user_id: 0,
      userdata: {
        name: "",
        email: "",
        phone_number: "",
        gender: "",
        birthdate: "",
        address: "",
        address_1: "",
        country_1: "",
        landmark_1: "",
        city_1: "",
        phone_1: "",
        address_2: "",
        country_2: "",
        landmark_2: "",
        city_2: "",
        phone_2: "",
        created_at: null,
      },
      getDatas: [],
      insertdata: {
        id: "",
        name: "",
        address: "",
        email: "",
        phone_number: "",
        country: "",
        city: "",
        //ship
        shipper_name: "",
        shipper_email: "",
        shipper_phone_number: "",
        shipper_address: "",
        shipper_country: "",
        shipper_city: "",

        address_1: "",
        country_1: "",
        city_1: "",
        landmark_1: "",

        address_2: "",
        country_2: "",
        city_2: "",
        landmark_2: "",

        addresses: [],
      },
      coupons: {
        couponCode: "",
        price: this.sumOfLastPrices,
      },
      loading: false,
      email: "",
      showDifferentAddress: false,
      differentAddressField: "", // Initialize different address field if needed
      cart: [],
      notifmsg: "",
      invidecodeError: "",
      errors: {},
      itemCount: 0,
      subtotal: 0,
      updatedQuantity: 0,
      customer_id: "",
      coupon: "",
      dataArray: [],
      sumOfLastPrices: 0,
      sumOfFlatRatePrices: 0,
      totalSum: 0,
      discount: "",
      selectedPayment: '',
      companyData: [],
      COD_fee: 0,
      Dcouponlist: '',
      couponModal: '',
      address: [],
    };
  },

  computed: {
    loggedIn() {
      if (!$auth.loggedIn) {
        this.$router.push("/checkout");
      } else {
        this.$router.push("/");
      }
      return this.$auth.loggedIn;
    },
  },
  mounted() {
    this.openPromo();
    this.cart.forEach((item) => {
      item.shippingDate = this.calculateShippingDate(item.product.shipping_days);
    });

    if (process.client) {
      this.addCard();
      this.defaultLoadingData();
      this.calculateSubtotal();
      this.loadCart();
      this.cartItemCount();
      this.subtotal = this.calculateSubtotal();

      $(document).ready(function () {
        $(".filter_btn").on("click", function () {
          $(".filter_modal").show();
        });
        $(".filter_close").on("click", function () {
          $(".filter_modal").hide();
        });
      });
      // Now you can work with myElement
    }
    this.getcompanyData();
    this.openModal();
    this.getQuponList();
    this.calculateSumOfLastPrices();
  },
  methods: {
    opendiscount() {
      $(".couponModal").fadeIn();
    },
    closediscount() {
      $(".couponModal").fadeOut();
    },
    copyCode(code) {
      const tempInput = document.createElement('input');
      tempInput.value = code;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Code Copied successfully!",
      });

    },
    handlePaymentSelection() {
      if (this.selectedPayment === 'COD') {
        this.calculateSumOfLastPrices();
      } else {
        this.calculateSumOfLastPrices();
      }
    },
    openModal() {
      $('.billing_address').click(function () {
        $(".bill_address").fadeIn();
      });
      $('.modal_close').click(function () {
        $(".bill_address").fadeOut();
      })
    },
    saveCard() {
      const formData = new FormData();
      formData.append('user_id', this.user_id);
      formData.append('holder_name', this.cardData.holder_name);
      formData.append('card_number', this.cardData.card_number);
      formData.append('expiry_date', this.cardData.expiry_date);
      // console.log(formData);
      this.$axios.post('/user/saveCard', formData)
        .then(response => {
          // console.log(response.data);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Order submitted successfully!",
          });
          $("#cardInput")[0].reset();
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
            const errorMessages = Object.values(this.errors).flat();

            // Concatenate error messages into a single string
            const errorMessage = errorMessages.join("<br>");
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              },
            });
            Toast.fire({
              icon: "error",
              title: errorMessage,
            });
          }
        });
    },
    addCard() {
      $(".addNewCardBT").click(function () {
        $(".addNewCard").fadeIn();
      });
      $(".backBT").click(function () {
        $(".addNewCard").fadeOut();
      });
    },
    calculateSumOfLastPrices() {
      let selectedPayment = this.selectedPayment ? this.selectedPayment : '0';
      let COD_fee = this.COD_fee;
      // console.log(COD_fee);
      const cartData = localStorage.getItem("cart");
      if (cartData) {
        const cart = JSON.parse(cartData);
        let sumOfLastPrices = 0;
        let sumOfFlatRatePrices = 0;
        let totalPrice = 0;

        cart.forEach((item) => {
          if (item.product.warrantyamt) {
            totalPrice += parseFloat(item.product.last_price) * item.quantity;
            sumOfFlatRatePrices += parseFloat(item.product.flat_rate_price ? item.product.flat_rate_price : '0') * item.quantity;
            sumOfLastPrices = totalPrice + item.product.warrantyamt * item.quantity;
            console.log(sumOfLastPrices);
          } else {
            sumOfLastPrices += parseFloat(item.product.last_price) * item.quantity;
            sumOfFlatRatePrices += parseFloat(item.product.flat_rate_price ? item.product.flat_rate_price : '0') * item.quantity;
          }
        });
        let allsum;
        let allsum_warranty = 0;
        let subsum = sumOfLastPrices + sumOfFlatRatePrices;

        // console.log(subsum);

        if (selectedPayment == "COD") {
          allsum = parseFloat(subsum) + parseFloat(COD_fee);
          // console.log(allsum);
        } else {
          allsum = subsum;
        }

        this.coupons.price = allsum;
        this.sumOfLastPrices = sumOfLastPrices;
        this.sumOfFlatRatePrices = sumOfFlatRatePrices;
        this.totalSum = allsum;
      }
    },

    updateSelectedData() {
      // console.log("Selected data:", this.shipp_address, "BilTo:", this.billAddress);
    },

    getPrice(item) {
      let final_price = 0;
      const price = item.quantity * item.product.last_price;
      // console.log(item.product.warrantyamt);

      if (item.product.warrantyamt) {
        final_price = price + item.quantity * item.product.warrantyamt;
      } else {
        final_price = price;
      }
      return final_price;
    },
    getSave(item) {
      const save =
        item.quantity * item.product.price - item.quantity * item.product.last_price;
      // console.log(save);
      return save;
    },
    calculateShippingDate(shippingDays) {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      const nextDay = currentHour >= 17 ? 1 : 0;

      const shippingDate = new Date();
      shippingDate.setDate(currentDate.getDate() + (shippingDays ? shippingDays : nextDay));

      const options = {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      };

      const formattedDate = shippingDate.toLocaleDateString("en-US", options);

      return formattedDate;
    },
    async getCouponData() {
      const formData = {
        couponCode: this.coupons.couponCode,
        price: this.coupons.price,
        user_id: this.insertdata.id,
      };
      // console.log(formData);
      this.$axios
        .post(`/unauthenticate/couponDiscount`, formData)
        .then((response) => {
          this.coupon = response.data.coupon_data;
          this.totalSum = response.data.coupon_data.last_discount_price;
          this.discount = this.coupon.discount;
          this.coupon_id = response.data.coupon_data.id;
          $("#discount").fadeIn();
          $("#discount_msg").fadeIn();
          $("#errorDiscount").fadeOut();
          // console.log(response.data.coupon_data.last_discount_price);
        })
        .catch((error) => {
          // console.error("Error fetching coupon data:", error);
          $("#errorDiscount").fadeIn();

          this.errors = error.response.data.errors;
          const errorMessages = Object.values(this.errors).flat();

          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "error",
            title: errorMessages,
          });
        });
    },
    openPromo() {
      $(".btn_promo").on("click", function () {
        $(".promo").fadeIn();
      });
      $(".modal_close").on("click", function () {
        $(".promo").fadeOut();
      });
    },
    copybillingAddress() {
      this.insertdata.shipper_name = this.insertdata.name;
      this.insertdata.shipper_email = this.insertdata.email;
      this.insertdata.shipper_phone_number = this.insertdata.phone_number;
      this.insertdata.shipper_address = this.insertdata.address;
      this.insertdata.shipper_country = this.insertdata.country;
      this.insertdata.shipper_city = this.insertdata.city;
    },
    defaultLoadingData() {
      this.$axios.get("/auth/showProfileData").then((response) => {
        // console.log("Data=======" + response.data.address);
        this.insertdata.id = response.data.data.id;
        // this.user_id = response.data.data.id;
        this.insertdata.name = response.data.data.name;
        this.getDatas = response.data.data;
        this.insertdata.email = response.data.data.email;
        this.insertdata.phone_number = response.data.data.phone_number;

        this.address = response.data.address;
        if (this.address.length > 0) {
          this.shipp_address = this.address[0];
          this.billAddress = this.address[0];
        }



        this.user_id = response.data.data.id;
        this.defaultLoading();
        this.getQuponList();
      });
    },
    getcompanyData() {
      this.$axios.get('/setting/getCompanyData')
        .then(response => {
          this.companyData = response.data;
          this.COD_fee = response.data.transaction_fee;
        });
    },
    defaultLoading() {
      // console.log(this.insertdata.id);
      const id = this.insertdata.id;
      this.$axios.get(`/user/cardlist/${id}`).then(response => {
        this.cardList = response.data;
        // console.log(response.data);
      }).catch(error => {
        // console.error('Error fetching card list:', error);
      });
    },
    clearCart() {
      this.loading = true;
      localStorage.removeItem("cart");
      this.cart = [];
      this.cartItemCount();
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    placeOrder() {
      const formData = new FormData();
      formData.append("cart", JSON.stringify(this.cart));
      formData.append("subTotal", this.totalSum);
      formData.append("item_total", this.sumOfLastPrices);
      formData.append("shipp_address", this.shipp_address);
      formData.append("billAddress", this.billAddress);
      formData.append("Cutomer_name", this.insertdata.name);
      formData.append("Cutomer_email", this.insertdata.email);
      formData.append("Cutomer_phone_number", this.insertdata.phone_number);
      formData.append("coupon_id", this.coupon_id ? this.coupon_id : '');
      formData.append("user_id", this.insertdata.id);
      formData.append("payment_staus", this.selectedPayment);
      // console.log(formData);
      // return false;
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      this.$axios
        .post("/order/submitOrder", formData, {
          headers,
        })
        .then((response) => {
          // const token = response.data.access_token;
          // this.$auth.setUserToken(token);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Order submitted successfully!",
          });
          this.clearCart();
          this.$router.push("/");
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
            const errorMessages = Object.values(this.errors).flat();

            // Concatenate error messages into a single string
            const errorMessage = errorMessages.join("<br>");
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              },
            });
            Toast.fire({
              icon: "error",
              title: errorMessage,
            });
          }
        });

    },
    clearCart() {
      this.loading = true;
      localStorage.removeItem("cart");
      this.cart = [];
      this.cartItemCount();
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    updateQuantity(productId, newQuantity) {
      this.loading = true;
      const index = this.cart.findIndex((item) => item.product.id === productId);
      if (index !== -1) {
        this.cart[index].quantity = newQuantity;
        this.saveCart();
        this.calculateSubtotal(); // Optionally recalculate subtotal after updating quantity
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      }
    },
    loadCart() {
      this.loading = true;
      const savedCart = localStorage.getItem('cart');

      if (savedCart) {
        this.cart = JSON.parse(savedCart);

      }

      let itemCount = 0;
      this.cart.forEach((item) => {
        if (item.product) { // Add a check to ensure item.product is defined
          itemCount += parseInt(item.quantity);
        }
      });
      this.itemCount = itemCount;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    handleCartItemCountUpdated(itemCount) {
      // This method will be called when the event is emitted from ComponentA
      // console.log('Received  DesktopViewOptions Com.:', itemCount);
      // Update the local data property with the received itemCount
      this.itemCount = itemCount;
    },
    removeFromCart(product) {
      this.loading = true;
      const index = this.cart.findIndex((item) => item.product.id === product.id);

      if (index !== -1) {
        if (this.cart[index].quantity > 1) {
          this.cart[index].quantity -= 1;
        } else {
          this.cart.splice(index, 1);
        }

        this.saveCart();
        this.calculateSubtotal();
        this.cartItemCount();
        this.calculateSumOfLastPrices();
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      }
    },
    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    addToCart(productId) {
      const productToAdd = this.prouducts.find((product) => product.id === productId);
      const existingItem = this.cart.find((item) => item.product.id === productId);

      if (existingItem) {
        // existingItem.quantity += 1;
      } else {
        this.cart.push({
          product: productToAdd,
          quantity: 1,
        });
      }

      this.saveCart();
      this.cartItemCount();
      this.calculateSubtotal();
    },
    cartItemCount() {
      //  this.loading = true;
      let itemCount = 0;
      this.cart.forEach((item) => {
        itemCount += parseInt(item.quantity);
      });
      this.itemCount = itemCount;
      // console.log("Emitting cartItemCountUpdated event with itemCount:", this.itemCount);
      this.$eventBus.$emit("cartItemCountUpdated", this.itemCount);
    },
    calculateSubtotal() {
      //  this.loading = true;
      let subtotal = 0;
      this.cart.forEach((item) => {
        const product = item.product;
        // console.log(`Quantity: ${item.quantity}, Price: ${product.price}`);
        // const priceWithoutCommas = product.price.replace(/,/g, '');
        const priceWithoutCommas = product.price;
        const priceAsNumber = parseFloat(priceWithoutCommas);
        if (!isNaN(item.quantity) && !isNaN(priceAsNumber)) {
          subtotal += item.quantity * priceAsNumber;
        } else {
          console.error("Invalid quantity or price:", item.quantity, product.price);
        }
        // console.log(`Intermediate Subtotal: ${subtotal}`);
      });

      //console.log(`Final Subtotal: ${subtotal}`);
      return (this.subtotal = subtotal);
      //return subtotal;
    },
    async getQuponList() {
      const minShop = this.totalSum;
      const user_id = this.user_id;
      console.log(user_id);
      const queryParams = {
        minShop: minShop,
        user_id: user_id
      };

      this.$axios.get('/setting/getcoupons', { params: queryParams })
        .then(response => {
          this.Dcouponlist = response.data.couponList;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },
  },
};
</script>
<style>
.btn-check:checked+.btn,
.btn.active,
.btn.show,
.btn:first-child:active,
:not(.btn-check)+.btn:active {
  background-color: #933c5e3b;
}

.checkItem {
  border-bottom: 1px solid #e1e1e1;
  padding-top: 15px;
}

.checkItem:last-child {
  border: none;
}

#discount {
  display: none;
}

.paymentMethod_tabs .btn-check:checked {
  color: #000;
}

.paymentMethod_tabs h6,
.paymentMethod_tabs h3,
.paymentMethod_tabs p,
.paymentMethod_tabs span {
  color: #000;
}

.addNewCard {
  display: none;
}

.checkIProtem {
  width: 310px;
}

#errorDiscount,
#discount_msg {
  display: none;
}
</style>