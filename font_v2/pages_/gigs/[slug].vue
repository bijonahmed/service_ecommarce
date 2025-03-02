<template>
  <div>
    <title>{{ responseData.name }}</title>

    <body class="bgc-thm1">
      <div class="wrapper ovh">
        <Header />
        <MobileMenu />
        <div class="body_content">
          <section class="categories_list_section overflow-hidden">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="listings_category_nav_list_menu">
                    <ul class="mb0 d-flex ps-0">
                      <li v-for="data in categoryData" :key="data.id">
                        <nuxt-link :to="`/category/${data.slug}`">
                          {{ data.name }}
                        </nuxt-link>
                      </li>
                      <!-- {{categoryData}} -->
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <!-- Breadcumb Sections -->
          <section class="breadcumb-section">
            <div class="container">
              <div class="row">
                <div class="col-sm-8 col-lg-10">
                  <div class="breadcumb-style1 mb10-xs">
                    <div class="breadcumb-list">
                      <nuxt-link to="/">Home</nuxt-link>
                      <nuxt-link to="/all-category">Services</nuxt-link>
                      <a href="#">{{ responseData.category_name }}</a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 col-lg-2">
                  <div class="d-flex align-items-center justify-content-sm-end">
                    <div class="share-save-widget d-flex align-items-center" >
                      <div class="h6 mb-0" @click="currentPageCopy"><a href="#"><i class="fas fa-share-alt"></i>&nbsp;Share GIG</a></div>  

                    </div>

                    <!-- <div class="share-save-widget d-flex align-items-center ml15">
                      <span class="icon flaticon-like dark-color fz12 mr10"></span>
                      <div class="h6 mb-0">Save</div>
                    </div> -->
                  </div>
                  <div v-if="message" class="alert alert-success mt-2">{{ message }}</div>
                </div>
              </div>
            </div>
          </section>
          <div class="loading-indicator" v-if="loading" style="text-align: center;">
            <Loader />
          </div>
          <!-- Breadcumb Sections -->

          <section class="pt0 pb90 pb30-md">
            <div class="container">
              <div class="row wrap">
                <div class="col-lg-8">
                  <h2>{{ responseData.name }}</h2>
                  <div class="column wow fadeInUp">
                    <div class="row mt30 d-none">
                      <div class="col-sm-6 col-md-4">
                        <div class="iconbox-style1 contact-style d-flex align-items-start mb30">
                          <div class="icon flex-shrink-0"><span class="flaticon-calendar"></span></div>
                          <div class="details">
                            <h5 class="title">Delivery Time</h5>
                            <p class="mb-0 text">{{ responseData.delivery_day }} Days</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4">
                        <div class="iconbox-style1 contact-style d-flex align-items-start mb30">
                          <div class="icon flex-shrink-0"><span class="flaticon-goal"></span></div>
                          <div class="details">
                            <h5 class="title">{{ responseData.language_name }} Level</h5>
                            <p class="mb-0 text">{{ responseData.language_type }} Level</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4">
                        <div class="iconbox-style1 contact-style d-flex align-items-start mb30">
                          <div class="icon flex-shrink-0"><span class="flaticon-tracking"></span></div>
                          <div class="details">
                            <h5 class="title">Location</h5>
                            <p class="mb-0 text">{{ responseData.countryname }} </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="carouselExample" class="carousel slide">
                      <div class="carousel-inner">
                        <div v-for="(item, index) in carouselItems" :key="index.id"
                          :class="['carousel-item', { active: index === 0 }]">
                          <img :src="item.image_path" class="d-block w-100 h-100" :alt="item.alt">
                        </div>
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>

                    <br />

                    <div class="service-about">
                      <p class="text mb30 text-justify" style="text-align:justify"
                        v-html="responseData.gig_description"></p>
                      <hr class="opacity-100 mb15">
                      <div class="product_single_content mb50">
                        <div class="mbp_pagination_comments">
                          <div class="row">

                            <div class="col-md-12" v-for="(review, index) in reviewlist" :key="index">
                              <div
                                class="mbp_first position-relative d-flex align-items-center justify-content-start mb30-sm">
                                <img :src="review.image || '/images/blog/comments-2.png'" class="mr-3"
                                  style="height:40px;width:40px;" :alt="review.altText || 'Reviewer Image'">
                                <div class="ml20">
                                  <h6 class="mt-0 mb-0">{{ review.name }}</h6>
                                  <div><span class="fz14">{{ review.created_at }}</span></div>
                                </div>
                              </div>

                              <div class="d-flex m-2">
                                <!-- Loop through the rating dynamically -->
                                <i v-for="star in 5" :key="star"
                                  :class="star <= review.rating ? 'fas fa-star review-color' : 'far fa-star review-color ms-2'"></i>
                              </div>

                              <p class="text mt20 mb20">{{ review.rev }}</p>
                            </div>
                            <!--For Review -->


                          </div>
                        </div>
                      </div>
                      <div class="bsp_reveiw_wrt d-none">
                        <h6 class="fz17">Add a Review</h6>
                        <p class="text">Your email address will not be published. Required fields are marked *</p>
                        <h6>Your rating of this product</h6>
                        <div class="d-flex">
                          <i class="fas fa-star review-color"></i>
                          <i class="far fa-star review-color ms-2"></i>
                          <i class="far fa-star review-color ms-2"></i>
                          <i class="far fa-star review-color ms-2"></i>
                          <i class="far fa-star review-color ms-2"></i>
                        </div>
                        <form class="comments_form mt30 mb30-md">
                          <div class="row">
                            <div class="col-md-12">
                              <div class="mb-4">
                                <label class="fw500 fz16 ff-heading dark-color mb-2">Comment</label>
                                <textarea class="pt15" rows="6"
                                  placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."></textarea>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="mb20">
                                <label class="fw500 ff-heading dark-color mb-2">Name</label>
                                <input type="text" class="form-control" placeholder="Ali Tufan">
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="mb20">
                                <label class="fw500 ff-heading dark-color mb-2">Email</label>
                                <input type="email" class="form-control" placeholder="creativelayers088">
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div
                                class="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb20">
                                <label class="custom_checkbox fz15 ff-heading">Save my name, email, and website in this
                                  browser for the next time I comment.
                                  <input type="checkbox">
                                  <span class="checkmark"></span>
                                </label>
                              </div>
                              <a href="#" class="ud-btn btn-thm">Send<i class="fal fa-arrow-right-long"></i></a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="column">
                    <div class="blog-sidebar ms-lg-auto">

                      <div class="price-widget">
                        <div class="navtab-style1" v-if="responseData.types == 2">
                          <nav>
                            <div class="nav nav-tabs mb20" id="nav-tab2p" role="tablist">
                              <button class="nav-link fw500 active" id="nav-item1p-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-item1p" type="button" role="tab" aria-controls="nav-item1p"
                                aria-selected="true">Basic</button>
                              <button class="nav-link fw500" id="nav-item2p-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-item2p" type="button" role="tab" aria-controls="nav-item2p"
                                aria-selected="false">Standart</button>
                              <button class="nav-link fw500" id="nav-item3-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-item3p" type="button" role="tab" aria-controls="nav-item3p"
                                aria-selected="false">Premium</button>
                            </div>
                          </nav>
                          <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-item1p" role="tabpanel" aria-labelledby="nav-item1p-tab">
                              <div class="price-content">
                                <div class="price">${{ responseData.basic_price }}</div>
                                <p class="text fz14 text-justify">{{ responseData.basic_description }}</p>
                                <hr class="opacity-100 mb20">
                                <ul class="p-0 mb15 d-sm-flex align-items-center">
                                  <li class="fz14 fw500 dark-color"><i
                                      class="flaticon-sandclock fz20 text-thm2 me-2 vam"></i>{{
                                        responseData.basic_delivery_days }} Days Delivery</li>
                                  <li class="fz14 fw500 dark-color ml20 ml0-xs d-none"><i
                                      class="flaticon-recycle fz20 text-thm2 me-2 vam"></i>2 Revisions</li>
                                </ul>
                                <div class="list-style1">
                                  <ul class="">
                                    <li class="mb15 d-none"><i class="far fa-check text-thm3 bgc-thm3-light"></i>2 Page
                                      /Screen</li>
                                    <li><i class="far fa-check text-thm3 bgc-thm3-light"></i>Source file : {{
                                      responseData.source_file }}</li>
                                  </ul>
                                </div>
                                <div class="d-grid">
                                  <a href="#" class="ud-btn btn-thm"
                                    @click="setPrice('Basic', responseData.basic_price, responseData.basic_delivery_days)"
                                    v-if="isLoggedIn">Continue ${{
                                      responseData.basic_price }}<i class="fal fa-arrow-right-long"></i></a>

                                  <a href="#" class="ud-btn btn-thm" v-if="!isLoggedIn" data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop">Continue ${{ responseData.basic_price }}<i
                                      class="fal fa-arrow-right-long"></i></a>

                                </div>
                              </div>
                            </div>
                            <div class="tab-pane fade" id="nav-item2p" role="tabpanel"
                              aria-labelledby="nav-item2p-tab">
                              <div class="price-content">
                                <div class="price">${{ responseData.standard_price }}</div>
                                <!-- <div class="h5 mb-2">High-converting Landing Pages</div> -->
                                <p class="text fz14">{{ responseData.stn_description }}</p>
                                <hr class="opacity-100 mb20">
                                <ul class="p-0 mb15 d-sm-flex align-items-center">
                                  <li class="fz14 fw500 dark-color"><i
                                      class="flaticon-sandclock fz20 text-thm2 me-2 vam"></i>{{
                                        responseData.stn_delivery_days }} Days Delivery</li>
                                  <li class="fz14 fw500 dark-color ml20 ml0-xs d-none"><i
                                      class="flaticon-recycle fz20 text-thm2 me-2 vam"></i>2 Revisions</li>
                                </ul>
                                <div class="list-style1">
                                  <ul class="">
                                    <li><i class="far fa-check text-thm3 bgc-thm3-light"></i>Source file: {{
                                      responseData.stn_source_file }}</li>
                                  </ul>
                                </div>
                                <div class="d-grid">
                                  <a href="#" class="ud-btn btn-thm"
                                    @click="setPrice('Standart', responseData.standard_price, responseData.stn_delivery_days)"
                                    v-if="isLoggedIn">Continue ${{
                                      responseData.standard_price }}<i class="fal fa-arrow-right-long"></i></a>

                                  <a href="#" class="ud-btn btn-thm" v-if="!isLoggedIn" data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop">Continue ${{ responseData.standard_price }}<i
                                      class="fal fa-arrow-right-long"></i></a>
                                </div>
                              </div>
                            </div>
                            <div class="tab-pane fade" id="nav-item3p" role="tabpanel" aria-labelledby="nav-item3p-tab">
                              <div class="price-content">
                                <div class="price">${{ responseData.premium_price }}</div>
                                <p class="text fz14">{{ responseData.premium_description }}</p>
                                <hr class="opacity-100 mb20">
                                <ul class="p-0 mb15 d-sm-flex align-items-center">
                                  <li class="fz14 fw500 dark-color"><i
                                      class="flaticon-sandclock fz20 text-thm2 me-2 vam"></i>{{
                                        responseData.premium_delivery_days }} Days Delivery</li>
                                  <li class="fz14 fw500 dark-color ml20 ml0-xs d-none"><i
                                      class="flaticon-recycle fz20 text-thm2 me-2 vam"></i>2 Revisions</li>
                                </ul>
                                <div class="list-style1">
                                  <ul class="">
                                    <li><i class="far fa-check text-thm3 bgc-thm3-light"></i>Source file : {{
                                      responseData.premium_source_file }}</li>
                                  </ul>
                                </div>

                                <div class="d-grid">

                                  <a href="#" class="ud-btn btn-thm"
                                    @click="setPrice('Premium', responseData.premium_price, responseData.premium_delivery_days)"
                                    v-if="isLoggedIn">Continue
                                    ${{ responseData.premium_price }}<i class="fal fa-arrow-right-long"></i></a>

                                  <a href="#" class="ud-btn btn-thm" v-if="!isLoggedIn" data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop">Continue ${{ responseData.premium_price }}<i
                                      class="fal fa-arrow-right-long"></i></a>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div v-if="responseData.types == 1">

                          <div class="">
                            <h3 class="widget-title">${{ responseData.price }} <small class="fz15 fw500"></small></h3>
                            <div class="category-list mt20">
                              <a class="d-flex align-items-center justify-content-between bdrb1 pb-2" href="#">
                                <span class="text"><i class="flaticon-place text-thm2 pe-2 vam"></i>Location</span>
                                <span class="">{{ responseData.countryname }}</span>
                              </a>
                              <a class="d-flex align-items-center justify-content-between bdrb1 pb-2" href="#">
                                <span class="text"><i class="flaticon-30-days text-thm2 pe-2 vam"></i>Member
                                  since</span> <span class="">{{ responseData.join_date }}</span>
                              </a>

                              <!-- <a class="d-flex align-items-center justify-content-between bdrb1 pb-2" href="#">
                                <span class="text"><i @click="setPrice('Basic',responseData.basic_price)"
                                    class="flaticon-translator text-thm2 pe-2 vam"></i>Languages</span> <span
                                  class="">{{ responseData.language_name }}</span>
                              </a>
                              <a class="d-flex align-items-center justify-content-between mb-3" href="#">
                                <span class="text"><i class="flaticon-sliders text-thm2 pe-2 vam"></i>{{
                                  responseData.language_name }}
                                  Level</span> <span class="">{{ responseData.language_type }}</span>
                              </a> -->
                            </div>
                            <div class="d-grid">

                              <a href="#" class="ud-btn btn-thm"
                                @click="setPrice('Single', responseData.price, responseData.delivery_day)"
                                v-if="isLoggedIn">Continue
                                ${{ responseData.price }}<i class="fal fa-arrow-right-long"></i></a>

                              <a href="#" class="ud-btn btn-thm" v-if="!isLoggedIn" data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop">Continue
                                ${{ responseData.price }}<i class="fal fa-arrow-right-long"></i></a>

                            </div>
                          </div>

                        </div>

                      </div>

                      <div class="freelancer-style1 service-single mb-0">
                        <div class="wrapper d-flex align-items-center">
                          <div class="thumb position-relative mb25">
                            <img class="rounded-circle mx-auto img-circle" :src="responseData.freelancer_images"
                              style="height:60px;width:60px;" alt="">
                            <span class="online"></span>
                          </div>
                          <div class="ml20">
                            <h5 class="title mb-1"> <nuxt-link
                                :to="{ path: '/public', query: { profile: responseData.sellerSlug } }">
                                {{ responseData.user_name }} </nuxt-link></h5>
                            <p class="mb-0"><nuxt-link
                                :to="{ path: '/public', query: { profile: responseData.sellerSlug } }">{{
                                  responseData.profession_name }}</nuxt-link></p>
                            <div class="review d-none">
                              <p><i class="fas fa-star fz10 review-color pr10"></i><span class="dark-color">4.9</span>
                                (595 reviews)</p>
                            </div>
                          </div>
                        </div>
                        <hr class="opacity-100">
                        <div class="details">
                          <div class="fl-meta d-flex align-items-center justify-content-between">
                            <a class="meta fw500 text-start">Location<br><span class="fz14 fw400">{{
                              responseData.countryname }}</span></a>

                            <a class="meta fw500 text-start">Job Success<br><span class="fz14 fw400">100%</span></a>
                          </div>
                        </div>
                        <div class="d-grid mt30">
                          <a href="javascript:void(0);" class="ud-btn btn-thm-border" @click="contactSend"
                            v-if="isLoggedIn">Contact Me<i class="fal fa-arrow-right-long"></i></a>
                          <a href="javascript:void(0);" class="ud-btn btn-thm-border" v-if="!isLoggedIn"
                            data-bs-toggle="modal" data-bs-target="#staticBackdrop">Contact Me<i
                              class="fal fa-arrow-right-long"></i></a>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        <Footer />
      </div>
      <!-- Message Modal -->
      <div class="modal fade" id="message_modal" tabindex="-1" aria-labelledby="message_modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="message_modalLabel">Send Message</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <!-- Custom message and button -->

              <p>Your message has been sent to the seller! If you want to chat more, click the button below:</p>
              <center>
                <a href="#" class="btn btn-primary text-white" @click="continueChat">Continue Chat</a>
              </center>

            </div>

          </div>
        </div>
      </div>
      <!-- Payment Modal -->
      <div class="modal fade" id="payment_modal" tabindex="-1" aria-labelledby="payment_modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="payment_modalLabel">Order Summary</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form class="form-style1" @submit.prevent="submitFrm()" id="formrest">
                <input type="hidden" value="gig_id" v-model="gig_id" />
                <!-- Billing Information -->

                <div class="container mt-4">
                  <div class="card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-4">
                          <p class="mb-1">Your order amount:</p>
                          <h5 class="text-success">${{ formatPrice(SelectedPrice) }}</h5>
                        </div>
                        <div class="col-4">
                          <p class="mb-1">Order Service Fee:</p>
                          <h5 class="text-warning">${{ formatPrice(serviceFee) }}</h5>
                        </div>
                        <div class="col-4">
                          <p class="mb-1">Tips & Others:</p>
                          <h5 class="text-warning">${{ formatPrice(tips) }}</h5>
                        </div>
                        <div class="col-4">
                          <p class="mb-1">Subtotal:</p>
                          <h5 class="font-weight-bold">${{ formatPrice(subtotal) }}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />

                <!-- Payment Submit Button -->
                <button type="submit" class="btn btn-primary w-100 text-white">Payment Confirm</button>
              </form>
            </div>

          </div>
        </div>
      </div>

      <!-- Login Modal -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">

          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Login</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="login()">
                <div class="loading-indicator" v-if="loading" style="text-align: center;">
                  <Loader />
                </div>
                <div class="row wow fadeInRight">

                  <div class="log-reg-form search-modal form-style1 bgc-white p30-sm default-box-shadow1 bdrs12">
                    <div class="mb30">
                      <h4>We're glad to see you again!</h4>
                      <p class="text">
                        Don't have an account? <nuxt-link to="/sign-up" class="text-thm">Sign Up!</nuxt-link>
                      </p>
                    </div>
                    <center><span class="text-danger">{{ errors.account }}</span></center>
                    <div class="mb20">
                      <label for="email" class="form-label fw600 dark-color">Email Address</label>
                      <input type="email" id="email" class="form-control" placeholder="example@gmail.com"
                        v-model="email">
                      <span class="text-danger">{{ errors.email }}</span>
                    </div>

                    <div class="mb15">
                      <label for="password" class="form-label fw600 dark-color">Password</label>
                      <input type="password" id="password" class="form-control" placeholder="*******"
                        v-model="password">
                      <span class="text-danger">{{ errors.password }}</span>
                    </div>

                    <div class="mb15">
                      <label for="userCapInput" class="form-label fw600 dark-color">Captcha</label>
                      <div class="CaptchaWrap">
                        <div id="CaptchaImageCode" class="CaptchaTxtField">
                          <canvas id="CapCode" class="capcode" width="500" height="50"></canvas>
                        </div>
                        <button type="button" @click="createCaptcha" class="ReloadBtn">
                          <img src="/refresh.webp" alt="Refresh Captcha" />
                        </button>
                      </div>

                      <input type="hidden" id="UserCaptchaCode" class="CaptchaTxtField form-control mt-2"
                        placeholder="Enter Captcha - Case Sensitive" v-model="captchaInput" @input="validateCaptcha"
                        required>
                      <input type="text" id="userCapInput" class="CaptchaTxtField form-control mt-2"
                        placeholder="Enter Captcha - Case Sensitive" v-model="userCapInput">

                      <span id="WrongCaptchaError" class="error">{{ captchaError }}</span>
                      <span class="text-danger">{{ errors.userCapInput }}</span>
                    </div>

                    <div class="d-grid mb20">
                      <button class="ud-btn btn-thm default-box-shadow2" type="submit">Login</button>
                    </div>
                  </div>

                </div>
              </form>

            </div>

          </div>

        </div>
      </div>

      <!-- Validation Modal -->
      <div class="modal fade" id="validation_staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="validation_staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-danger">
              <h1 class="modal-title fs-5 text-white" id="validation_staticBackdropLabel">Profile Image Upload Required
              </h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h3>Kindly upload your profile picture first.</h3>
              <center><button type="button" class="btn btn-info" @click="goToProfile">Profile</button></center>
            </div>

          </div>
        </div>
      </div>

    </body>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios';

import { useRouter } from 'vue-router';
import Swal from "sweetalert2";
const router = useRouter();
const categoryData = ref([]);
const loading = ref(false);
const route = useRoute();
const slug = route.params.slug; // Capture the slug parameter from the URL
const responseData = ref([]);
const carouselItems = ref([]);
import { useUserStore } from '~~/stores/user'
import { storeToRefs } from 'pinia';
const userStore = useUserStore();
const { isLoggedIn } = storeToRefs(userStore)


const serviceFee = ref('');
const tips = ref(0);

const gig_id = ref("");
const captchaInput = ref("");
const userCapInput = ref("");
const email = ref("");
const password = ref("");
const errors = ref({ email: "", password: "" }); // Initialize error messages
const captchaError = ref("");
const captchaValid = ref(false);
const SelectedPackages = ref('');
const SelectedPrice = ref('');
//for insert
const user_id = ref('');
const deliveryday = ref('');
const sellerSlug = ref('');
const message = ref('');
const reviewlist = ref('');
const formatPrice = (price) => {
  if (isNaN(price)) return '0.00'; // Handle non-numeric input
  return Number(price).toFixed(2); // Convert to number and format to 2 decimal places
};


const subtotal = computed(() => {
  return SelectedPrice.value + serviceFee.value; // Sum of SelectedPrice and serviceFee
});


const goToProfile = () => {
  router.push('/dashboard/buyer/myprofile').then(() => {
    if (process.client) { // Ensure it's run on the client side only
      window.location.reload() // Forces a reload after navigating
    }
  })
}


const currentPageCopy = async () => {
  try {
    // Get the current page URL
    const currentUrl = window.location.href;

    await navigator.clipboard.writeText(currentUrl);

    // Show SweetAlert notification
    Swal.fire({
      icon: 'success',
      title: 'Copied!',
      text: 'URL copied to clipboard!',
      showConfirmButton: false,
      timer: 2000
    });

  } catch (err) {
    console.error('Failed to copy: ', err);
    Swal.fire({
      icon: 'error',
      title: 'Failed to Copy',
      text: 'Could not copy the URL.',
      showConfirmButton: true,
    });
  }
};
const contactSend = async () => {
  try {
    // $('#payment_modal').modal('hide');
    const sellerSlug = responseData.value.sellerSlug;
    const gigSlug    = route.params.slug; 
    console.log("Fetching data for sellerSlug:", sellerSlug);
    const response = await axios.get(`/chat/sendChatRequest`, {
      params: {
        sellerSlug: sellerSlug,
        SelectedPackages: SelectedPackages.value,
        SelectedPrice: SelectedPrice.value,
        gigSlug: gigSlug,

      },
    });
    $('#message_modal').modal('show');

  } catch (error) {
    console.error("Error fetching gig data:", error);
  }
}

const submitFrm = () => {

  const formData = new FormData();
  const subtotal = serviceFee.value + SelectedPrice.value;
  formData.append("gig_id", gig_id.value);
  formData.append("service_fee", serviceFee.value);
  formData.append("sub_total", subtotal);
  formData.append("tips", tips);
  formData.append("SelectedPackages", SelectedPackages.value);
  formData.append("SelectedPrice", SelectedPrice.value);
  formData.append("delivery_day", deliveryday.value);
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  axios.post("/order/confirmOrder", formData, { headers })
    .then((res) => {
      document.getElementById("formrest").reset();

      Swal.fire({
        icon: 'success',
        title: 'Order Confirm',
        text: 'Your Order Successfuly Confirm.',
      });
      $('#payment_modal').modal('hide');

      //router.push("/dashboard/welcome");
    })
    .catch((error) => {
      if (error.response && error.response.status === 422) {
        errors.value = error.response.data.errors;
      } else {
        // Handle other types of errors here
        console.error("An error occurred:", error);
      }
    });
};

const setPrice = async (packages, price, delivery_day) => {
  console.log('Pack:' + packages + "--Selected Price:---" + price);
  SelectedPackages.value = packages;
  SelectedPrice.value = price;
  deliveryday.value = delivery_day;

  const setprice = price;
  try {
    const response = await axios.get(`/user/checkBalance`);
    console.log("Deposit Amount is: " + response.data.depositAmount);
    const depositAmount = response.data.depositAmount;
    serviceFee.value = response.data.service_fee;

    if (depositAmount >= setprice) {
      $('#payment_modal').modal('show');
    } else {
      // If depositAmount is smaller than price
      const depositLink = '/dashboard/buyer/deposit'; // Dynamic link

      Swal.fire({
        icon: 'info',
        title: 'To place order',
        html: `
        <p>Please Recharge your account</p>
        <a href="${depositLink}" target="_blank" style="color: #007bff; text-decoration: underline;">
            Click here to deposit
        </a>
    `,
        // showCloseButton: true, // Optional: Show a close button
        // showCancelButton: true, // Optional: Show a cancel button
        confirmButtonText: 'Okay', // Optional: Custom text for the confirm button
      });
    }
  } catch (error) {
    // Handle error
  }

}



function createCaptcha() {
  const canvas = document.getElementById("CapCode");
  const context = canvas.getContext("2d");
  const captchaCode = generateCaptchaCode(6); // Change the length as needed

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = "18px Arial";
  context.fillText(captchaCode, 10, 50);

  captchaInput.value = captchaCode;
}

function generateCaptchaCode(length) {
  const characters = "0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function validateCaptcha() {
  if (
    captchaInput.value.toUpperCase() !==
    document.getElementById("UserCaptchaCode").value.toUpperCase()
  ) {
    captchaError.value = "Incorrect CAPTCHA code";
    captchaValid.value = false;
  } else {
    captchaError.value = "";
    captchaValid.value = true;
  }
}


async function login() {

  try {

    loading.value = true;
    //loading.value = true;
    await userStore.login(
      email.value,
      password.value,
      captchaInput.value,
      userCapInput.value
    );

    const token = window.localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + userStore.api_token;
    }
    const role_id = userStore.role_id; // Assuming userStore contains role_id after login
    if (role_id === 3) {
      $('#staticBackdrop').modal('hide'); // This should hide the modal
      loading.value = false;
      const redirectslug = route.params.slug;
      console.log("Redirect : " + redirectslug);
      router.push("/gigs/" + redirectslug);
    } else if (role_id === 1 || role_id === 2) {
      roleMsg();
      return;
    }
  } catch (error) {
    loading.value = false;
    // If the request fails, display the error messages
    if (error.response && error.response.data.errors) {
      const responseErrors = error.response.data.errors;
      errors.value = {
        email: responseErrors.email ? responseErrors.email[0] : "",
        password: responseErrors.password ? responseErrors.password[0] : "",
        userCapInput: responseErrors.userCapInput
          ? responseErrors.userCapInput[0]
          : "",
        account: responseErrors.account ? responseErrors.account[0] : "",
      };
    } else {
      console.error("An error occurred while logging in:", error);
    }
  } finally {
    loading.value = false;
  }
}

const roleMsg = () => {
  Swal.fire({
    position: "center", // Changed to center
    position: "top-end",
    icon: "error",
    title: "Login not allowed for this role.",
    showConfirmButton: false,
    timer: 3000
  });
}

const continueChat = () => {
  const userId = user_id.value; // Get user_id from reactive data
  const currentUrl = window.location.origin; // Get current origin (e.g., http://example.com)
  const fullUrl = `${currentUrl}/dashboard/buyer/chatbox/${userId}`; // Construct the full URL
  window.location.href = fullUrl;
  // router.push(`/dashboard/buyer/chatbox/${sellerId}`);

}

const checkrow = async () => {
  try {
    loading.value = true;
    const response = await axios.get(`/unauthenticate/findgig`, {
      params: {
        slug: slug,
      },
    });

    responseData.value = response.data.data;
    sellerSlug.value = response.data.data.sellerSlug;
    user_id.value = response.data.data.user_id;
    gig_id.value = response.data.gig_id;
    carouselItems.value = response.data.galleryImgs;

  } catch (error) {
    // Handle error
  } finally {
    loading.value = false;
  }
  const groupedSubCategories = (subCategories) => {
    const grouped = [];
    for (let i = 0; i < subCategories.length; i += 2) {
      grouped.push(subCategories.slice(i, i + 2));
    }
    return grouped;
  };
};

const getCatList = async () => {
  try {
    const response = await axios.get(`/unauthenticate/getFindCategorys`);
    categoryData.value = response.data;

  } catch (error) {
    // Handle error
  }
};

const getReviewList = async () => {
  try {
    const response = await axios.get('/unauthenticate/checkGetList', {
      params: {
        gig_slug: route.params.slug,
      }
    });
    reviewlist.value = response.data;

  } catch (error) {
    console.log(error);
  }
};

const isActive = (slug) => {
  return slug === route.params.slug; // Compare slug with the current route's slug
};

const defaultParticularData = async () => {
  try {
    const response = await axios.post("/auth/me");
    //profileLogo.value = response.data.profileLogo;

    if (response.data.profileLogo == '' && response.data.role_id == '2') {
      $('#validation_staticBackdrop').modal('show');
    }
    console.log("Profile Images: " + response.data.profileLogo);

  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  getReviewList();
  defaultParticularData();
  createCaptcha();
  checkrow();
  getCatList();
});

</script>

<style scoped>
.CaptchaWrap {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.CaptchaTxtField {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.carousel-item img {
  height: 400px;
  object-fit: cover;
}

.body_content {
  padding: 100px;
}

@media (max-width: 991.98px) {
  .body_content {
    padding: 20px 20px 150px;
  }
}

@media (max-width: 575.98px) {
  .body_content {
    padding: 20px 10px;
  }
}

.categories_list_section {
  border-bottom: 1px solid #E9E9E9;
  padding: 7px 0 3px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ReloadBtn {
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;
}

.ReloadBtn img {
  width: 30px;
  margin-left: -50px;
}
</style>