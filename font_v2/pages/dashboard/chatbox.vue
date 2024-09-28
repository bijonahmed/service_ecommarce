<template>
    <title>Welcome to Dashboard</title>

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

                <div class="loading-indicator" v-if="loading" style="text-align: center;">
                    <Loader />
                </div>
                <section class="breadcumb-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-lg-10">
                                <div class="breadcumb-style1 mb10-xs">
                                    <div class="breadcumb-list">
                                        <nuxt-link to="/dashboard">Dashboard</nuxt-link>
                                        <a href="#">Messages</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-lg-2">
                                <div class="d-flex align-items-center justify-content-sm-end">
                                    <div class="share-save-widget d-flex align-items-center">
                                        <span class="icon flaticon-share dark-color fz12 mr10"></span>
                                        <div class="h6 mb-0"><nuxt-link to="/dashboard/welcome">Back</nuxt-link></div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- <DashboardMainConentTabs /> -->
  <!-- Start Chatbox -->
  <div class="dashboard__content hover-bgc-color">

<div class="row mb40">
  <div class="col-lg-6 col-xl-5 col-xxl-4">
    <div class="message_container">
      <div class="inbox_user_list">
        <div class="iu_heading pr35">
          <div class="chat_user_search">
            <form class="d-flex align-items-center">
              <button class="btn" type="submit"><span class="far fa-magnifying-glass"></span></button>
              <input class="form-control" type="search" placeholder="Serach" aria-label="Search">
            </form>
          </div>
        </div>
        <div class="chat-member-list pr20">
          <div class="list-item pt5">
            <a href="#">
              <div class="d-flex align-items-center position-relative">
                <img class="img-fluid float-start rounded-circle mr10" src="/images/inbox/ms1.png"
                  alt="ms1.png">
                <div class="d-sm-flex">
                  <div class="d-inline-block">
                    <div class="fz15 fw500 dark-color ff-heading mb-0">
                      Darlene Robertson</div>
                    <p class="preview">Head of Development
                    </p>
                  </div>
                  <div class="iul_notific">
                    <small>35 mins</small>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="list-item">
            <a href="#">
              <div class="d-flex align-items-center position-relative">
                <img class="img-fluid float-start rounded-circle mr10" src="/images/inbox/ms2.png"
                  alt="ms2.png">
                <div class="d-sm-flex">
                  <div class="d-inline-block">
                    <div class="fz15 fw500 dark-color ff-heading mb-0">
                      Jane Cooper</div>
                    <p class="preview">Head of Development
                    </p>
                  </div>
                  <div class="iul_notific">
                    <small>35 mins</small>
                    <div class="m_notif">2</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="list-item">
            <a href="#">
              <div class="d-flex align-items-center position-relative">
                <img class="img-fluid float-start rounded-circle mr10" src="/images/inbox/ms3.png"
                  alt="ms3.png">
                <div class="d-sm-flex">
                  <div class="d-inline-block">
                    <div class="fz15 fw500 dark-color ff-heading mb-0">
                      Arlene McCoy</div>
                    <p class="preview">Head of Development
                    </p>
                  </div>
                  <div class="iul_notific">
                    <small>35 mins</small>
                    <div class="m_notif online">2</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="list-item">
            <a href="#">
              <div class="d-flex align-items-center position-relative">
                <img class="img-fluid float-start rounded-circle mr10" src="/images/inbox/ms4.png"
                  alt="ms4.png">
                <div class="d-sm-flex">
                  <div class="d-inline-block">
                    <div class="fz15 fw500 dark-color ff-heading mb-0">
                      Albert Flores</div>
                    <p class="preview">Head of Development
                    </p>
                  </div>
                  <div class="iul_notific">
                    <small>35 mins</small>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="list-item">
            <a href="#">
              <div class="d-flex align-items-center position-relative">
                <img class="img-fluid float-start rounded-circle mr10" src="/images/inbox/ms5.png"
                  alt="ms5.png">
                <div class="d-sm-flex">
                  <div class="d-inline-block">
                    <div class="fz15 fw500 dark-color ff-heading mb-0">
                      Cameron Williamson</div>
                    <p class="preview">Head of Development
                    </p>
                  </div>
                  <div class="iul_notific">
                    <small>35 mins</small>
                    <div class="m_notif away">2</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="list-item">
            <a href="#">
              <div class="d-flex align-items-center position-relative">
                <img class="img-fluid float-start rounded-circle mr10" src="/images/inbox/ms6.png"
                  alt="ms6.png">
                <div class="d-sm-flex">
                  <div class="d-inline-block">
                    <div class="fz15 fw500 dark-color ff-heading mb-0">
                      Kristin Watson</div>
                    <p class="preview">Head of Development
                    </p>
                  </div>
                  <div class="iul_notific">
                    <small>35 mins</small>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="list-item">
            <a href="#">
              <div class="d-flex align-items-center position-relative">
                <img class="img-fluid float-start rounded-circle mr10" src="/images/inbox/ms7.png"
                  alt="ms7.png">
                <div class="d-sm-flex">
                  <div class="d-inline-block">
                    <div class="fz15 fw500 dark-color ff-heading mb-0">
                      Annette Black</div>
                    <p class="preview">Head of Development
                    </p>
                  </div>
                  <div class="iul_notific">
                    <small>35 mins</small>
                    <div class="m_notif busy">2</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="list-item">
            <a href="#">
              <div class="d-flex align-items-center position-relative">
                <img class="img-fluid float-start rounded-circle mr10" src="/images/inbox/ms8.png"
                  alt="ms8.png">
                <div class="d-sm-flex">
                  <div class="d-inline-block">
                    <div class="fz15 fw500 dark-color ff-heading mb-0">
                      Jacob Jones</div>
                    <p class="preview">Head of Development
                    </p>
                  </div>
                  <div class="iul_notific">
                    <small>35 mins</small>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="list-item">
            <a href="#">
              <div class="d-flex align-items-center position-relative">
                <img class="img-fluid float-start rounded-circle mr10" src="/images/inbox/ms1.png"
                  alt="ms1.png">
                <div class="d-sm-flex">
                  <div class="d-inline-block">
                    <div class="fz15 fw500 dark-color ff-heading mb-0">
                      Vincent Porter</div>
                    <p class="preview">Head of Development
                    </p>
                  </div>
                  <div class="iul_notific">
                    <small>35 mins</small>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="list-item">
            <a href="#">
              <div class="d-flex align-items-center position-relative">
                <img class="img-fluid float-start rounded-circle mr10" src="/images/inbox/ms2.png"
                  alt="ms2.png">
                <div class="d-sm-flex">
                  <div class="d-inline-block">
                    <div class="fz15 fw500 dark-color ff-heading mb-0">
                      Jacob Brown</div>
                    <p class="preview">Head of Development
                    </p>
                  </div>
                  <div class="iul_notific">
                    <small>35 mins</small>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-6 col-xl-7 col-xxl-8">
    <div class="message_container mt30-md">
      <div class="user_heading px-0 mx30">
        <div class="wrap">
          <img class="img-fluid mr10" src="/images/inbox/ms3.png" alt="ms3.png">
          <div class="meta d-sm-flex justify-content-sm-between align-items-center">
            <div class="authors">
              <h6 class="name mb-0">Arlene McCoy</h6>
              <p class="preview">Active</p>
            </div>
            <div>
              <a class="text-decoration-underline fz14 fw500 text-red ff-heading" href="#">Delete
                Conversation</a>
            </div>
          </div>
        </div>
      </div>
      <div class="inbox_chatting_box" style="">
        <ul class="chatting_content">
          <li class="sent float-start">
            <div class="d-flex align-items-center mb15">
              <img class="img-fluid rounded-circle align-self-start mr10" src="/images/inbox/ms4.png"
                alt="ms4.png">
              <div class="title fz15">Albert Flores <small class="ml10">35 mins</small></div>
            </div>
            <p>How likely are you to recommend our company to your
              friends and family?</p>
          </li>
          <li class="reply float-end">
            <div class="d-flex align-items-center justify-content-end mb15">
              <div class="title fz15"><small class="mr10">35
                  mins</small> You</div>
              <img class="img-fluid rounded-circle align-self-end ml10" src="/images/inbox/ms5.png"
                alt="ms5.png">
            </div>
            <p>Hey there, we’re just writing to let you know that
              you’ve been subscribed to a repository on GitHub.
            </p>
          </li>
          <li class="sent float-start">
            <div class="d-flex align-items-center mb15">
              <img class="img-fluid rounded-circle align-self-start mr10" src="/images/inbox/ms5.png"
                alt="ms5.png">
              <div class="title fz15">Albert Flores <small class="ml10">35 mins</small></div>
            </div>
            <p>Ok, Understood!</p>
          </li>
          <li class="reply float-end">
            <div class="d-flex align-items-center justify-content-end mb15">
              <div class="title fz15"><small class="mr10">35
                  mins</small> You</div>
              <img class="img-fluid rounded-circle align-self-end ml10" src="/images/inbox/ms5.png"
                alt="ms5.png">
            </div>
            <p>The project finally complete! Let's go to!.</p>
          </li>
          <li class="sent float-start">
            <div class="d-flex align-items-center mb15">
              <img class="img-fluid rounded-circle align-self-start mr10" src="/images/inbox/ms2.png"
                alt="ms2.png">
              <div class="title fz15">Albert Flores <small class="ml10">35 mins</small></div>
            </div>
            <p>Let's go!</p>
          </li>
          <li class="sent float-start">
            <div class="d-flex align-items-center mb15">
              <img class="img-fluid rounded-circle align-self-start mr10" src="/images/inbox/ms2.png"
                alt="ms2.png">
              <div class="title fz15">Albert Flores <small class="ml10">35 mins</small></div>
            </div>
            <p>simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's</p>
          </li>
          <li class="sent float-start">
            <div class="d-flex align-items-center mb15">
              <img class="img-fluid rounded-circle align-self-start mr10" src="/images/inbox/ms2.png"
                alt="ms2.png">
              <div class="title fz15">Albert Flores <small class="ml10">35 mins</small></div>
            </div>
            <p>Hello, John!</p>
          </li>
          <li class="reply float-end">
            <div class="d-flex align-items-center justify-content-end mb15">
              <div class="title fz15"><small class="mr10">35
                  mins</small> You</div>
              <img class="img-fluid rounded-circle align-self-end ml10" src="/images/inbox/ms3.png"
                alt="ms3.png">
            </div>
            <p>simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's</p>
          </li>
          <li class="reply float-end">
            <div class="d-flex align-items-center justify-content-end mb15">
              <div class="title fz15"><small class="mr10">35
                  mins</small> You</div>
              <img class="img-fluid rounded-circle align-self-end ml10" src="/images/inbox/ms3.png"
                alt="ms3.png">
            </div>
            <p>Are we meeting today?</p>
          </li>
          <li class="reply float-end">
            <div class="d-flex align-items-center justify-content-end mb15">
              <div class="title fz15"><small class="mr10">35
                  mins</small> You</div>
              <img class="img-fluid rounded-circle align-self-end ml10" src="/images/inbox/ms3.png"
                alt="ms3.png">
            </div>
            <p>The project finally complete! Let's go to!</p>
          </li>
          <li class="sent float-start">
            <div class="d-flex align-items-center mb15">
              <img class="img-fluid rounded-circle align-self-start mr10" src="/images/inbox/ms2.png"
                alt="ms2.png">
              <div class="title fz15">Albert Flores <small class="ml10">35 mins</small></div>
            </div>
            <p>Let's go!</p>
          </li>
          <li class="sent float-start">
            <div class="d-flex align-items-center mb15">
              <img class="img-fluid rounded-circle align-self-start mr10" src="/images/inbox/ms2.png"
                alt="ms2.png">
              <div class="title fz15">Albert Flores <small class="ml10">35 mins</small></div>
            </div>
            <p>simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's</p>
          </li>
          <li class="reply float-end">
            <div class="d-flex align-items-center justify-content-end mb15">
              <div class="title fz15"><small class="mr10">35
                  mins</small> You</div>
              <img class="img-fluid rounded-circle align-self-end ml10" src="/images/inbox/ms3.png"
                alt="ms3.png">
            </div>
            <p>Are we meeting today?</p>
          </li>
          <li class="reply float-end">
            <div class="d-flex align-items-center justify-content-end mb15">
              <div class="title fz15"><small class="mr10">35
                  mins</small> You</div>
              <img class="img-fluid rounded-circle align-self-end ml10" src="/images/inbox/ms3.png"
                alt="ms3.png">
            </div>
            <p>The project finally complete! Let's go to!</p>
          </li>
          <li class="sent float-start">
            <div class="d-flex align-items-center mb15">
              <img class="img-fluid rounded-circle align-self-start mr10" src="/images/inbox/ms2.png"
                alt="ms2.png">
              <div class="title fz15">Albert Flores <small class="ml10">35 mins</small></div>
            </div>
            <p>Let's go!</p>
          </li>
          <li class="sent float-start">
            <div class="d-flex align-items-center mb15">
              <img class="img-fluid rounded-circle align-self-start mr10" src="/images/inbox/ms2.png"
                alt="ms2.png">
              <div class="title fz15">Albert Flores <small class="ml10">35 mins</small></div>
            </div>
            <p>simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's</p>
          </li>
        </ul>
      </div>
      <div class="mi_text">
        <div class="message_input">
          <form class="d-flex align-items-center">
            <input class="form-control" type="search" placeholder="Type a Message" aria-label="Search">
            <button class="btn ud-btn btn-thm">Send Message<i
                class="fal fa-arrow-right-long"></i></button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<!-- END ChatBox -->
                <div />
            </div>
        </div>

        <!-- Modal Template -->




        <Footer />
    </body>
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

definePageMeta({
    middleware: "is-logged-out",
});

const profileModal = ref(null);

const errors = ref({});
const profilePicture = ref(null);
const imagePreview = ref(null);
const name = ref('');
const email = ref('');
const selectedProfession = ref('');
const phone = ref('');
const skillInput = ref('');
const country_1 = ref('');
const skills = ref([]);
const professinListData = ref([]);
const skillsError = ref('');
let countryData = ref('');

const myprofile = () => {
    console.log("working....");
    router.push('/dashboard/myprofile')
}

const getCatList = async () => {
    try {
        loading.value = true;
        const response = await axios.get(`/unauthenticate/getFindCategorys`);
        categoryData.value = response.data;
    } catch (error) {
        // Handle error
    } finally {
        loading.value = false;
    }
};



onMounted(() => {
    getCatList();

});

</script>

<style scoped>
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