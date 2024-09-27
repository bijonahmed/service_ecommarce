<template>
    <div>
      <title>{{ categoryName }}</title>
  
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
                          <nuxt-link :to="`/category/${data.slug}`" :class="{ active: isActive(data.slug) }">
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
                  <div class="col-lg-12">
                    <div class="breadcumb-style1">
                      <div class="breadcumb-list">
                        <nuxt-link to="/">Home</nuxt-link>
                        <a href="#">Category</a>
                        <nuxt-link to="/all-category">All Categorys</nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div class="loading-indicator" v-if="loading" style="text-align: center;">
              <Loader />
            </div>
            <!-- Breadcumb Sections -->
            <section class="breadcumb-section pt-0">
              <div
                class="cta-service-v1 cta-banner mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg px30-lg px10-xs">
                <img class="left-top-img wow zoomIn" src="/images/vector-img/left-top.png" alt="">
                <img class="right-bottom-img wow zoomIn" src="/images/vector-img/right-bottom.png" alt="">
                <img class="service-v1-vector bounce-y d-none d-lg-block" src="/images/vector-img/vector-service-v1.png"
                  alt="">
                <div class="container">
                  <div class="row wow fadeInUp">
                    <div class="col-xl-7">
                      <div class="position-relative">
                        <h2>Category {{ categoryName }}</h2>
  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  
            <!-- About Section Area -->
            <!-- Listings All Lists -->
            <section class="pt30 pb90">
              <div class="container-fluid">
                <div class="row align-items-center mb20">
                  <div class="col-6 col-sm-6 col-lg-12 pe-0">
                    <div class="text-center text-sm-start">
                      <div class="dropdown-lists">
                        <ul class="p-0 mb-0 text-center text-sm-start">
                          <li class="list-inline-item position-relative d-none d-xl-inline-block">
                            <button class="open-btn mb10 dropdown-toggle" type="button" data-bs-toggle="dropdown">Delivery
                              Time <i class="fa fa-angle-down ms-2"></i></button>
                            <div class="dropdown-menu">
                              <div class="widget-wrapper pb25 mb0">
                                <div class="radio-element">
                                  <div class="form-check d-flex align-items-center mb10">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                      id="flexRadioDefault1">
                                    <label class="form-check-label" for="flexRadioDefault1">Express 24H</label>
                                  </div>
                                  <div class="form-check d-flex align-items-center mb10">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                      id="flexRadioDefault2" checked="checked">
                                    <label class="form-check-label" for="flexRadioDefault2">Up to 3 days</label>
                                  </div>
                                  <div class="form-check d-flex align-items-center mb10">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                      id="flexRadioDefault3">
                                    <label class="form-check-label" for="flexRadioDefault3">Up to 7 days</label>
                                  </div>
                                  <div class="form-check d-flex align-items-center">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                      id="flexRadioDefault4">
                                    <label class="form-check-label" for="flexRadioDefault4">Anytime</label>
                                  </div>
                                </div>
                              </div>
                              <button class="done-btn ud-btn btn-thm drop_btn">Apply<i
                                  class="fal fa-arrow-right-long"></i></button>
                            </div>
                          </li>
                          <li class="list-inline-item position-relative d-none d-xl-inline-block">
                            <button class="open-btn mb10 dropdown-toggle" type="button" data-bs-toggle="dropdown">Budget
                              <i class="fa fa-angle-down ms-2"></i></button>
                            <div class="dropdown-menu dd3">
                              <div class="widget-wrapper pb25 mb0 pr20">
                                <!-- Range Slider Desktop Version -->
                                <div class="range-slider-style1">
                                  <div class="range-wrapper">
                                    <div class="slider-range mb20"></div>
                                    <div class="text-center">
                                      <input type="text" class="amount" placeholder="$20"><span
                                        class="fa-sharp fa-solid fa-minus mx-1 dark-color"></span>
                                      <input type="text" class="amount2" placeholder="$70987">
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <button class="done-btn ud-btn btn-thm drop_btn3">Apply<i
                                  class="fal fa-arrow-right-long"></i></button>
                            </div>
                          </li>
                          <li class="list-inline-item position-relative d-none d-xl-inline-block">
                            <button class="open-btn mb10 dropdown-toggle" type="button" data-bs-toggle="dropdown">Level <i
                                class="fa fa-angle-down ms-2"></i></button>
                            <div class="dropdown-menu">
                              <div class="widget-wrapper pb25 mb0">
                                <div class="checkbox-style1">
                                  <label class="custom_checkbox">Top Rated Seller
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                  </label>
                                  <label class="custom_checkbox">Level Two
                                    <input type="checkbox" checked="checked">
                                    <span class="checkmark"></span>
                                  </label>
                                  <label class="custom_checkbox">Level One
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                  </label>
                                  <label class="custom_checkbox">New Seller
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <button class="done-btn ud-btn btn-thm dropdown-toggle">Apply<i
                                  class="fal fa-arrow-right-long"></i></button>
                            </div>
                          </li>
                          <li class="list-inline-item position-relative d-none d-xl-inline-block">
                            <button class="open-btn mb10 dropdown-toggle" type="button" data-bs-toggle="dropdown">Location
                              <i class="fa fa-angle-down ms-2"></i></button>
                            <div class="dropdown-menu dd4 pb20">
                              <div class="widget-wrapper pr20">
                                <div class="checkbox-style1">
                                  <label class="custom_checkbox">United States
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                  </label>
                                  <label class="custom_checkbox">United Kingdom
                                    <input type="checkbox" checked="checked">
                                    <span class="checkmark"></span>
                                  </label>
                                  <label class="custom_checkbox">Canada
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                  </label>
                                  <label class="custom_checkbox">Germany
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                  </label>
                                  <label class="custom_checkbox">Turkey
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <button class="done-btn ud-btn btn-thm drop_btn4">Apply<i
                                  class="fal fa-arrow-right-long"></i></button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
  
                </div>
                <div class="row">
                  <div class="col-sm-6 col-xl-3">
                    <div class="listing-style1">
                      <div class="list-thumb">
                        <img class="w-100" src="/images/listings/g-1.jpg" alt="">
                        <a href="#" class="listing-fav fz12"><span class="far fa-heart"></span></a>
                      </div>
                      <div class="list-content">
                        <p class="list-text body-color fz14 mb-1">Web & App Design</p>
                        <h5 class="list-title"><nuxt-link to="/gigs/programming-task">I will design modern websites in figma
                            or adobe xd</nuxt-link></h5>
                        <div class="review-meta d-flex align-items-center">
                          <i class="fas fa-star fz10 review-color me-2"></i>
                          <p class="mb-0 body-color fz14"><span class="dark-color me-2">4.82</span>94 reviews</p>
                        </div>
                        <hr class="my-2">
                        <div class="list-meta d-flex justify-content-between align-items-center mt15">
                          <a href="#">
                            <span class="position-relative mr10">
                              <img class="rounded-circle" src="/images/team/fl-s-1.png" alt="Freelancer Photo">
                              <span class="online-badge"></span>
                            </span>
                            <span class="fz14">Bijon Ahmed</span>
                          </a>
                          <div class="budget">
                            <p class="mb-0 body-color">Starting at<span class="fz17 fw500 dark-color ms-1">$983</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div class="col-sm-6 col-xl-3">
                    <div class="listing-style1">
                      <div class="list-thumb">
                        <img class="w-100" src="/images/listings/g-3.jpg" alt="">
                        <a href="#" class="listing-fav fz12"><span class="far fa-heart"></span></a>
                      </div>
                      <div class="list-content">
                        <p class="list-text body-color fz14 mb-1">Design & Creative</p>
                        <h5 class="list-title line-clamp2"><a href="page-services-single.html">I will build a fully
                            responsive design in HTML,CSS, bootstrap, and javascript</a></h5>
                        <div class="review-meta d-flex align-items-center">
                          <i class="fas fa-star fz10 review-color me-2"></i>
                          <p class="mb-0 body-color fz14"><span class="dark-color me-2">4.82</span>94 reviews</p>
                        </div>
                        <hr class="my-2">
                        <div class="list-meta d-flex justify-content-between align-items-center mt15">
                          <a href="#">
                            <span class="position-relative mr10">
                              <img class="rounded-circle" src="/images/team/fl-s-3.png" alt="Freelancer Photo">
                              <span class="online-badge"></span>
                            </span>
                            <span class="fz14">Wanda Runo</span>
                          </a>
                          <div class="budget">
                            <p class="mb-0 body-color">Starting at<span class="fz17 fw500 dark-color ms-1">$983</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-3">
                    <div class="listing-style1">
                      <div class="list-thumb">
                        <img class="w-100" src="/images/listings/g-4.jpg" alt="">
                        <a href="#" class="listing-fav fz12"><span class="far fa-heart"></span></a>
                      </div>
                      <div class="list-content">
                        <p class="list-text body-color fz14 mb-1">Web & App Design</p>
                        <h5 class="list-title"><a href="page-services-single.html">I will do mobile app development for
                            ios and android</a></h5>
                        <div class="review-meta d-flex align-items-center">
                          <i class="fas fa-star fz10 review-color me-2"></i>
                          <p class="mb-0 body-color fz14"><span class="dark-color me-2">4.82</span>94 reviews</p>
                        </div>
                        <hr class="my-2">
                        <div class="list-meta d-flex justify-content-between align-items-center mt15">
                          <a href="#">
                            <span class="position-relative mr10">
                              <img class="rounded-circle" src="/images/team/fl-s-4.png" alt="Freelancer Photo">
                              <span class="online-badge"></span>
                            </span>
                            <span class="fz14">Wanda Runo</span>
                          </a>
                          <div class="budget">
                            <p class="mb-0 body-color">Starting at<span class="fz17 fw500 dark-color ms-1">$983</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-3">
                    <div class="listing-style1">
                      <div class="list-thumb">
                        <img class="w-100" src="/images/listings/g-5.jpg" alt="">
                        <a href="#" class="listing-fav fz12"><span class="far fa-heart"></span></a>
                      </div>
                      <div class="list-content">
                        <p class="list-text body-color fz14 mb-1">Web & App Design</p>
                        <h5 class="list-title"><a href="page-services-single.html">I will design modern websites in figma
                            or adobe xd</a></h5>
                        <div class="review-meta d-flex align-items-center">
                          <i class="fas fa-star fz10 review-color me-2"></i>
                          <p class="mb-0 body-color fz14"><span class="dark-color me-2">4.82</span>94 reviews</p>
                        </div>
                        <hr class="my-2">
                        <div class="list-meta d-flex justify-content-between align-items-center mt15">
                          <a href="#">
                            <span class="position-relative mr10">
                              <img class="rounded-circle" src="/images/team/fl-s-1.png" alt="Freelancer Photo">
                              <span class="online-badge"></span>
                            </span>
                            <span class="fz14">Wanda Runo</span>
                          </a>
                          <div class="budget">
                            <p class="mb-0 body-color">Starting at<span class="fz17 fw500 dark-color ms-1">$983</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-3">
                    <div class="listing-style1">
                      <div class="list-thumb">
                        <img class="w-100" src="/images/listings/g-6.jpg" alt="">
                        <a href="#" class="listing-fav fz12"><span class="far fa-heart"></span></a>
                      </div>
                      <div class="list-content">
                        <p class="list-text body-color fz14 mb-1">Web & App Design</p>
                        <h5 class="list-title"><a href="page-services-single.html">I will design modern websites in figma
                            or adobe xd</a></h5>
                        <div class="review-meta d-flex align-items-center">
                          <i class="fas fa-star fz10 review-color me-2"></i>
                          <p class="mb-0 body-color fz14"><span class="dark-color me-2">4.82</span>94 reviews</p>
                        </div>
                        <hr class="my-2">
                        <div class="list-meta d-flex justify-content-between align-items-center mt15">
                          <a href="#">
                            <span class="position-relative mr10">
                              <img class="rounded-circle" src="/images/team/fl-s-2.png" alt="Freelancer Photo">
                              <span class="online-badge"></span>
                            </span>
                            <span class="fz14">Wanda Runo</span>
                          </a>
                          <div class="budget">
                            <p class="mb-0 body-color">Starting at<span class="fz17 fw500 dark-color ms-1">$983</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-3">
                    <div class="listing-style1">
                      <div class="list-thumb">
                        <img class="w-100" src="/images/listings/g-7.jpg" alt="">
                        <a href="#" class="listing-fav fz12"><span class="far fa-heart"></span></a>
                      </div>
                      <div class="list-content">
                        <p class="list-text body-color fz14 mb-1">Design & Creative</p>
                        <h5 class="list-title line-clamp2"><a href="page-services-single.html">I will build a fully
                            responsive design in HTML,CSS, bootstrap, and javascript</a></h5>
                        <div class="review-meta d-flex align-items-center">
                          <i class="fas fa-star fz10 review-color me-2"></i>
                          <p class="mb-0 body-color fz14"><span class="dark-color me-2">4.82</span>94 reviews</p>
                        </div>
                        <hr class="my-2">
                        <div class="list-meta d-flex justify-content-between align-items-center mt15">
                          <a href="#">
                            <span class="position-relative mr10">
                              <img class="rounded-circle" src="/images/team/fl-s-3.png" alt="Freelancer Photo">
                              <span class="online-badge"></span>
                            </span>
                            <span class="fz14">Wanda Runo</span>
                          </a>
                          <div class="budget">
                            <p class="mb-0 body-color">Starting at<span class="fz17 fw500 dark-color ms-1">$983</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-3">
                    <div class="listing-style1">
                      <div class="list-thumb">
                        <img class="w-100" src="/images/listings/g-8.jpg" alt="">
                        <a href="#" class="listing-fav fz12"><span class="far fa-heart"></span></a>
                      </div>
                      <div class="list-content">
                        <p class="list-text body-color fz14 mb-1">Web & App Design</p>
                        <h5 class="list-title"><a href="page-services-single.html">I will do mobile app development for
                            ios and android</a></h5>
                        <div class="review-meta d-flex align-items-center">
                          <i class="fas fa-star fz10 review-color me-2"></i>
                          <p class="mb-0 body-color fz14"><span class="dark-color me-2">4.82</span>94 reviews</p>
                        </div>
                        <hr class="my-2">
                        <div class="list-meta d-flex justify-content-between align-items-center mt15">
                          <a href="#">
                            <span class="position-relative mr10">
                              <img class="rounded-circle" src="/images/team/fl-s-4.png" alt="Freelancer Photo">
                              <span class="online-badge"></span>
                            </span>
                            <span class="fz14">Wanda Runo</span>
                          </a>
                          <div class="budget">
                            <p class="mb-0 body-color">Starting at<span class="fz17 fw500 dark-color ms-1">$983</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-3">
                    <div class="listing-style1">
                      <div class="list-thumb">
                        <img class="w-100" src="/images/listings/g-9.jpg" alt="">
                        <a href="#" class="listing-fav fz12"><span class="far fa-heart"></span></a>
                      </div>
                      <div class="list-content">
                        <p class="list-text body-color fz14 mb-1">Web & App Design</p>
                        <h5 class="list-title"><a href="page-services-single.html">I will design modern websites in figma
                            or adobe xd</a></h5>
                        <div class="review-meta d-flex align-items-center">
                          <i class="fas fa-star fz10 review-color me-2"></i>
                          <p class="mb-0 body-color fz14"><span class="dark-color me-2">4.82</span>94 reviews</p>
                        </div>
                        <hr class="my-2">
                        <div class="list-meta d-flex justify-content-between align-items-center mt15">
                          <a href="#">
                            <span class="position-relative mr10">
                              <img class="rounded-circle" src="/images/team/fl-s-1.png" alt="Freelancer Photo">
                              <span class="online-badge"></span>
                            </span>
                            <span class="fz14">Wanda Runo</span>
                          </a>
                          <div class="budget">
                            <p class="mb-0 body-color">Starting at<span class="fz17 fw500 dark-color ms-1">$983</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-3">
                    <div class="listing-style1">
                      <div class="list-thumb">
                        <img class="w-100" src="/images/listings/g-10.jpg" alt="">
                        <a href="#" class="listing-fav fz12"><span class="far fa-heart"></span></a>
                      </div>
                      <div class="list-content">
                        <p class="list-text body-color fz14 mb-1">Web & App Design</p>
                        <h5 class="list-title"><a href="page-services-single.html">I will design modern websites in figma
                            or adobe xd</a></h5>
                        <div class="review-meta d-flex align-items-center">
                          <i class="fas fa-star fz10 review-color me-2"></i>
                          <p class="mb-0 body-color fz14"><span class="dark-color me-2">4.82</span>94 reviews</p>
                        </div>
                        <hr class="my-2">
                        <div class="list-meta d-flex justify-content-between align-items-center mt15">
                          <a href="#">
                            <span class="position-relative mr10">
                              <img class="rounded-circle" src="/images/team/fl-s-2.png" alt="Freelancer Photo">
                              <span class="online-badge"></span>
                            </span>
                            <span class="fz14">Wanda Runo</span>
                          </a>
                          <div class="budget">
                            <p class="mb-0 body-color">Starting at<span class="fz17 fw500 dark-color ms-1">$983</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-3">
                    <div class="listing-style1">
                      <div class="list-thumb">
                        <img class="w-100" src="/images/listings/g-11.jpg" alt="">
                        <a href="#" class="listing-fav fz12"><span class="far fa-heart"></span></a>
                      </div>
                      <div class="list-content">
                        <p class="list-text body-color fz14 mb-1">Design & Creative</p>
                        <h5 class="list-title line-clamp2"><a href="page-services-single.html">I will build a fully
                            responsive design in HTML,CSS, bootstrap, and javascript</a></h5>
                        <div class="review-meta d-flex align-items-center">
                          <i class="fas fa-star fz10 review-color me-2"></i>
                          <p class="mb-0 body-color fz14"><span class="dark-color me-2">4.82</span>94 reviews</p>
                        </div>
                        <hr class="my-2">
                        <div class="list-meta d-flex justify-content-between align-items-center mt15">
                          <a href="#">
                            <span class="position-relative mr10">
                              <img class="rounded-circle" src="/images/team/fl-s-3.png" alt="Freelancer Photo">
                              <span class="online-badge"></span>
                            </span>
                            <span class="fz14">Wanda Runo</span>
                          </a>
                          <div class="budget">
                            <p class="mb-0 body-color">Starting at<span class="fz17 fw500 dark-color ms-1">$983</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-3">
                    <div class="listing-style1">
                      <div class="list-thumb">
                        <img class="w-100" src="/images/listings/g-12.jpg" alt="">
                        <a href="#" class="listing-fav fz12"><span class="far fa-heart"></span></a>
                      </div>
                      <div class="list-content">
                        <p class="list-text body-color fz14 mb-1">Web & App Design</p>
                        <h5 class="list-title"><a href="page-services-single.html">I will do mobile app development for
                            ios and android</a></h5>
                        <div class="review-meta d-flex align-items-center">
                          <i class="fas fa-star fz10 review-color me-2"></i>
                          <p class="mb-0 body-color fz14"><span class="dark-color me-2">4.82</span>94 reviews</p>
                        </div>
                        <hr class="my-2">
                        <div class="list-meta d-flex justify-content-between align-items-center mt15">
                          <a href="#">
                            <span class="position-relative mr10">
                              <img class="rounded-circle" src="/images/team/fl-s-4.png" alt="Freelancer Photo">
                              <span class="online-badge"></span>
                            </span>
                            <span class="fz14">Wanda Runo</span>
                          </a>
                          <div class="budget">
                            <p class="mb-0 body-color">Starting at<span class="fz17 fw500 dark-color ms-1">$983</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="mbp_pagination mt30 text-center">
                    <ul class="page_navigation">
                      <li class="page-item">
                        <a class="page-link" href="#"> <span class="fas fa-angle-left"></span></a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item active" aria-current="page">
                        <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item"><a class="page-link" href="#">4</a></li>
                      <li class="page-item d-inline-block d-sm-none"><a class="page-link" href="#">...</a></li>
                      <li class="page-item"><a class="page-link" href="#">5</a></li>
                      <li class="page-item d-none d-sm-inline-block"><a class="page-link" href="#">...</a></li>
                      <li class="page-item d-none d-sm-inline-block"><a class="page-link" href="#">20</a></li>
                      <li class="page-item">
                        <a class="page-link" href="#"><span class="fas fa-angle-right"></span></a>
                      </li>
                    </ul>
                    <p class="mt10 mb-0 pagination_page_count text-center">1 – 20 of 300+ property available</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
  
          <Footer />
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
  
  const loading = ref(false);
  const route = useRoute();
  const slug = route.params.slug; // Capture the slug parameter from the URL
  const categoryName = ref('');
  const categoryData = ref([]);
  
  // Assuming categoryData is provided as a prop or fetched from a store
  const props = defineProps({
    categoryData: {
      type: Array,
      required: true
    }
  });
  
  // Create a computed property or method to check for the active slug
  const isActive = (slug) => {
    return slug === route.params.slug; // Compare slug with the current route's slug
  };
  
  const checkrow = async () => {
    try {
      loading.value = true;
      const response = await axios.get(`/unauthenticate/findCategorys`, {
        params: {
          slug: slug,
        },
      });
  
      categoryName.value = response.data.category_name;
      categoryData.value = response.data.categoryData;
  
    } catch (error) {
      // Handle error
    } finally {
      loading.value = false;
    }
  };
  
  onMounted(() => {
    checkrow();
  });
  
  
  
  </script>
  
  <style scoped>
  .category-list {
    list-style: none;
    padding: 0;
  }
  
  .category-item {
    margin-bottom: 30px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 15px;
  }
  
  .dropdown {
    text-decoration: none;
    font-size: 18px;
    color: #333;
    font-weight: bold;
    transition: color 0.3s;
  }
  
  .dropdown:hover {
    color: #007bff;
  }
  
  .subcategory-container {
    margin-top: 10px;
  }
  
  .subcategory-item {
    background: #f8f9fa;
    border-radius: 5px;
    padding: 15px;
    margin: 5px 0;
  }
  
  .cat-title {
    font-size: 16px;
    color: #333;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  .sub-subcategory-list {
    list-style: none;
    padding: 0;
    margin: 10px 0 0;
  }
  
  .sub-subcategory-item {
    margin: 5px 0;
  }
  
  .sub-subcategory-item a {
    color: #555;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .sub-subcategory-item a:hover {
    color: #007bff;
  }
  
  /* Media query for mobile devices */
  @media (max-width: 768px) {
    .body_content {
      padding-bottom: 150px;
    }
  }
  
  @media (max-width: 575.98px) {
    .body_content {
      padding-top: 20px;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  
  /* Small Devices (tablets, 576px and up) */
  @media (min-width: 576px) and (max-width: 767.98px) {
    .body_content {
      padding-top: 20px;
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  
  /* Medium Devices (desktops, 768px and up) */
  @media (min-width: 768px) and (max-width: 991.98px) {
    .body_content {
      padding-top: 20px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  
  /* Large Devices (large desktops, 992px and up) */
  @media (min-width: 992px) {
    .body_content {
      padding: 100px;
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
  </style>