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
                    <div class="share-save-widget d-flex align-items-center">
                      <span class="icon flaticon-share dark-color fz12 mr10"></span>
                      <div class="h6 mb-0">Share</div>
                    </div>
                    <div class="share-save-widget d-flex align-items-center ml15">
                      <span class="icon flaticon-like dark-color fz12 mr10"></span>
                      <div class="h6 mb-0">Save</div>
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
         
          <section class="pt0 pb90 pb30-md">
            <div class="container">
              <div class="row wrap">
                <div class="col-lg-8">
                  <h2>{{ responseData.name }}</h2>
                  <div class="column wow fadeInUp">
                    <div class="row mt30">
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
                          <img :src="item.image_path" class="d-block w-100" :alt="item.alt">
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
                      <p class="text mb30 text-justify" style="text-align:justify" v-html="responseData.gig_description"></p>
                      <hr class="opacity-100 mb15">
                      <div class="product_single_content mb50">
                        <div class="mbp_pagination_comments">
                          <div class="row">

                            <div class="col-md-12">
                              <div
                                class="mbp_first position-relative d-flex align-items-center justify-content-start mb30-sm">
                                <img src="/images/blog/comments-2.png" class="mr-3" alt="comments-2.png">
                                <div class="ml20">
                                  <h6 class="mt-0 mb-0">Bessie Cooper</h6>
                                  <div><span class="fz14">12 March 2024</span></div>
                                </div>
                              </div>
                              <p class="text mt20 mb20">There are many variations of passages of Lorem Ipsum available,
                              </p>

                            </div>

                            <div class="col-md-12">
                              <div class="position-relative bdrb1 pb50">
                                <a href="#" class="ud-btn btn-light-thm">See More<i
                                    class="fal fa-arrow-right-long"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="bsp_reveiw_wrt">
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
                              <button class="nav-link fw500" id="nav-item1p-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-item1p" type="button" role="tab" aria-controls="nav-item1p"
                                aria-selected="true">Basic</button>
                              <button class="nav-link active fw500" id="nav-item2p-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-item2p" type="button" role="tab" aria-controls="nav-item2p"
                                aria-selected="false">Standart</button>
                              <button class="nav-link fw500" id="nav-item3-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-item3p" type="button" role="tab" aria-controls="nav-item3p"
                                aria-selected="false">Premium</button>
                            </div>
                          </nav>
                          <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade" id="nav-item1p" role="tabpanel" aria-labelledby="nav-item1p-tab">
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
                                  <a href="#" class="ud-btn btn-thm">Continue ${{ responseData.basic_price }}<i
                                      class="fal fa-arrow-right-long"></i></a>
                                </div>
                              </div>
                            </div>
                            <div class="tab-pane fade show active" id="nav-item2p" role="tabpanel"
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
                                  <a href="#" class="ud-btn btn-thm">Continue ${{ responseData.standard_price }}<i
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
                                  <a href="#" class="ud-btn btn-thm">Continue ${{ responseData.premium_price }}<i
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


                              <a class="d-flex align-items-center justify-content-between bdrb1 pb-2" href="#">
                                <span class="text"><i
                                    class="flaticon-translator text-thm2 pe-2 vam"></i>Languages</span> <span
                                  class="">{{ responseData.language_name }}</span>
                              </a>
                              <a class="d-flex align-items-center justify-content-between mb-3" href="#">
                                <span class="text"><i class="flaticon-sliders text-thm2 pe-2 vam"></i>{{
                                  responseData.language_name }}
                                  Level</span> <span class="">{{ responseData.language_type }}</span>
                              </a>
                            </div>
                            <div class="d-grid">
                              <a href="#" class="ud-btn btn-thm">Contact Me<i class="fal fa-arrow-right-long"></i></a>
                            </div>
                          </div>

                        </div>





                      </div>



                      <div class="freelancer-style1 service-single mb-0">
                        <div class="wrapper d-flex align-items-center">
                          <div class="thumb position-relative mb25">
                            <img class="rounded-circle mx-auto" :src="responseData.freelancer_images"
                              style="height:70px;width:70px;" alt="">
                            <span class="online"></span>
                          </div>
                          <div class="ml20">
                            <h5 class="title mb-1">{{ responseData.user_name }}</h5>
                            <p class="mb-0">{{ responseData.profession_name }}</p>
                            <div class="review d-none">
                              <p><i class="fas fa-star fz10 review-color pr10"></i><span class="dark-color">4.9</span>
                                (595 reviews)</p>
                            </div>
                          </div>
                        </div>
                        <hr class="opacity-100">
                        <div class="details">
                          <div class="fl-meta d-flex align-items-center justify-content-between">
                            <a class="meta fw500 text-start">Location<br><span class="fz14 fw400">London</span></a>
                            <a class="meta fw500 text-start">Rate<br><span class="fz14 fw400">${{ responseData.price
                                }}</span></a>
                            <a class="meta fw500 text-start">Job Success<br><span class="fz14 fw400">100%</span></a>
                          </div>
                        </div>
                        <div class="d-grid mt30">
                          <a href="#" class="ud-btn btn-thm-border">Contact Me<i
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

const checkrow = async () => {
  try {
    loading.value = true;
    const response = await axios.get(`/unauthenticate/findgig`, {
      params: {
        slug: slug,
      },
    });

    responseData.value = response.data.data;
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


const isActive = (slug) => {
  return slug === route.params.slug; // Compare slug with the current route's slug
};
onMounted(() => {
  $('.owl-carousel').owlCarousel({
    items: 1, // Number of items to show
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    autoWidth: true,
    nav: true,
    dots: true,
  });
  checkrow();
  getCatList();
});



</script>

<style scoped>
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
</style>