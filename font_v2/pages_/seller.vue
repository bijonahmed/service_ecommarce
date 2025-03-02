<template>
    <div>
        <title>Seller</title>

        <body class="bgc-thm1">
            <div class="wrapper ovh">
                <Header />
                <MobileMenu />
                <div class="body_content">
                    <!-- Breadcumb Sections -->
                    <section class="breadcumb-section wow fadeInUp">
                                <div
                                    class="cta-commmon-v1 cta-banner bgc-thm3 overflow-hidden d-flex align-items-center mx20-lg">
                                    <img class="left-top-img wow zoomIn" src="/images/vector-img/left-top.png" alt="">
                                    <img class="right-bottom-img wow zoomIn" src="/images/vector-img/right-bottom.png"
                                        alt="">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-xl-5">
                                                <div class="position-relative wow fadeInUp" data-wow-delay="300ms">
                                                    <h2 class="text-black">Work Your Way</h2>
                                                   
                                                    <nuxt-link to="/sign-up" class="ud-btn btn-thm">Become Seller<i
                                                            class="fal fa-arrow-right-long"></i></nuxt-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                    <!-- About Section Area -->
                    <section class="our-faq pb90 pt60">
                        <div class="container">

                          

                            <div class="row wow fadeInUp">
                                <div class="col-lg-4">
                                    <div class="vertical-tab">
                                        <div class="widget_list">
                                            <nav>
                                                <div class="nav flex-column nav-tabs text-start" id="nav-tab"
                                                    role="tablist">
                                                    <button class="nav-link active text-start"
                                                        id="nav-accountpayment-tab" data-bs-toggle="tab"
                                                        data-bs-target="#nav-accountpayment" type="button" role="tab"
                                                        aria-controls="nav-accountpayment"
                                                        aria-selected="true"><span>For Hiring</span></button>
                                                    <button class="nav-link text-start" id="nav-manageother-tab"
                                                        data-bs-toggle="tab" data-bs-target="#nav-manageother"
                                                        type="button" role="tab" aria-controls="nav-manageother"
                                                        aria-selected="false"><span>For Freelancing</span></button>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-8">
                                    <div class="tab-content" id="nav-tabContent">
                                        <div class="tab-pane fade show active" id="nav-accountpayment" role="tabpanel"
                                            aria-labelledby="nav-accountpayment-tab">
                                            <div class="for-hire">
                                                <h4>For Hiring</h4>
                                                <p class="text mb30">It is a long established fact that a reader will be
                                                    distracted by the readable content of a page when looking at its
                                                    layout. The point of using Lorem Ipsum is that it has a more-or-less
                                                    normal distribution of letters, as opposed to using 'Content here,
                                                    content here', making it look like readable English.</p>
                                                <p class="text mb40">Many desktop publishing packages and web page
                                                    editors now use Lorem Ipsum as their default model text, and a
                                                    search for 'lorem ipsum' will uncover many web sites still in their
                                                    infancy. Various versions have evolved over the years, sometimes by
                                                    accident, sometimes on purpose (injected humour and the like).</p>
                                                <nuxt-link to="/sign-up" class="ud-btn btn-thm-border mb25 me-4">Get Started<i
                                                        class="fal fa-arrow-right-long"></i></nuxt-link>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="nav-manageother" role="tabpanel"
                                            aria-labelledby="nav-manageother-tab">
                                            <div class="for-hire">
                                                <h4>For Freelancing</h4>
                                                <p class="text mb30">It is a long established fact that a reader will be
                                                    distracted by the readable content of a page when looking at its
                                                    layout. The point of using Lorem Ipsum is that it has a more-or-less
                                                    normal distribution of letters, as opposed to using 'Content here,
                                                    content here', making it look like readable English.</p>
                                                <p class="text mb40">Many desktop publishing packages and web page
                                                    editors now use Lorem Ipsum as their default model text, and a
                                                    search for 'lorem ipsum' will uncover many web sites still in their
                                                    infancy. Various versions have evolved over the years, sometimes by
                                                    accident, sometimes on purpose (injected humour and the like).</p>
                                                    <nuxt-link to="/sign-up" class="ud-btn btn-thm-border mb25 me-4">Get Started<i
                                                        class="fal fa-arrow-right-long"></i></nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Our Features -->
                    <section class="our-features pt-0 pb90">
                        <div class="container">
                            <div class="row wow fadeInUp">
                                <div class="col-lg-12">
                                    <div class="main-title">
                                        <h2>How It Works</h2>
                                        <p class="text">Most viewed and all-time top-selling services</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row wow fadeInUp" data-wow-delay="300ms">
                                <div class="col-sm-6 col-lg-3">
                                    <div class="iconbox-style1 border-less p-0">
                                        <div class="icon before-none"><span class="flaticon-cv"></span></div>
                                        <div class="details">
                                            <h4 class="title mt10 mb-3">Post a job</h4>
                                            <p class="text">It’s free and easy to post a job. Simply fill <br
                                                    class="d-none d-xxl-block"> in a title, description.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-3">
                                    <div class="iconbox-style1 border-less p-0">
                                        <div class="icon before-none"><span class="flaticon-web-design"></span></div>
                                        <div class="details">
                                            <h4 class="title mt10 mb-3">Choose freelancers</h4>
                                            <p class="text">It’s free and easy to post a job. Simply fill <br
                                                    class="d-none d-xxl-block"> in a title, description.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-3">
                                    <div class="iconbox-style1 border-less p-0">
                                        <div class="icon before-none"><span class="flaticon-secure"></span></div>
                                        <div class="details">
                                            <h4 class="title mt10 mb-3">Pay safely</h4>
                                            <p class="text">It’s free and easy to post a job. Simply fill <br
                                                    class="d-none d-xxl-block"> in a title, description.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-3">
                                    <div class="iconbox-style1 border-less p-0">
                                        <div class="icon before-none"><span class="flaticon-customer-service"></span>
                                        </div>
                                        <div class="details">
                                            <h4 class="title mt10 mb-3">We’re here to help</h4>
                                            <p class="text">It’s free and easy to post a job. Simply fill <br
                                                    class="d-none d-xxl-block"> in a title, description.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- CTA Banner -->
                    <section class="p-0">
                        <div
                            class="cta-banner3 bgc-thm4 mx-auto maxw1600 pt120 pt60-lg pb90 pb60-lg position-relative overflow-hidden">
                            <div class="container">
                                <div class="row wow fadeInUp">
                                    <div class="col-xl-5">
                                        <div class="mb30">
                                            <div class="main-title">
                                                <h2 class="title">A whole world of freelance <br
                                                        class="d-none d-md-block"> talent at your fingertips</h2>
                                            </div>
                                        </div>
                                        <div class="why-chose-list">
                                            <div class="list-one d-flex align-items-start mb30">
                                                <span class="list-icon flex-shrink-0 flaticon-badge"></span>
                                                <div class="list-content flex-grow-1 ml20">
                                                    <h4 class="mb-1">Proof of quality</h4>
                                                    <p class="text mb-0 fz15">Check any pro’s work samples, client
                                                        reviews, and identity <br class="d-none d-lg-block">
                                                        verification.</p>
                                                </div>
                                            </div>
                                            <div class="list-one d-flex align-items-start mb30">
                                                <span class="list-icon flex-shrink-0 flaticon-money"></span>
                                                <div class="list-content flex-grow-1 ml20">
                                                    <h4 class="mb-1">No cost until you hire</h4>
                                                    <p class="text mb-0 fz15">Interview potential fits for your job,
                                                        negotiate rates, and only pay <br class="d-none d-lg-block"> for
                                                        work you approve.</p>
                                                </div>
                                            </div>
                                            <div class="list-one d-flex align-items-start mb30">
                                                <span class="list-icon flex-shrink-0 flaticon-security"></span>
                                                <div class="list-content flex-grow-1 ml20">
                                                    <h4 class="mb-1">Safe and secure</h4>
                                                    <p class="text mb-0 fz15">Focus on your work knowing we help protect
                                                        your data and privacy. We’re here with 24/7 support if you need
                                                        it.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img class="cta-banner3-img wow fadeInLeft" src="/images/about/about-5.jpg" alt=""
                                data-wow-delay="300ms">
                        </div>
                    </section>

                    <!-- Funfact -->
                    <section class="pb0 pt60">
                        <div class="container maxw1600 bdrb1 pb60">
                            <div class="row">
                                <div class="col-xl-11 mx-auto">
                                    <div class="row justify-content-center" data-wow-delay="300ms">
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="funfact_one text-center">
                                                <div class="details">
                                                    <ul class="ps-0 mb-0 d-flex justify-content-center">
                                                        <li>
                                                            <div class="timer">834</div>
                                                        </li>
                                                        <li><span>M</span></li>
                                                    </ul>
                                                    <p class="text mb-0">Total Freelancer</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="funfact_one text-center">
                                                <div class="details">
                                                    <ul class="ps-0 mb-0 d-flex justify-content-center">
                                                        <li>
                                                            <div class="timer">732</div>
                                                        </li>
                                                        <li><span>M</span></li>
                                                    </ul>
                                                    <p class="text mb-0">Positive Review</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="funfact_one text-center">
                                                <div class="details">
                                                    <ul class="ps-0 mb-0 d-flex justify-content-center">
                                                        <li>
                                                            <div class="timer">90</div>
                                                        </li>
                                                        <li><span>M</span></li>
                                                    </ul>
                                                    <p class="text mb-0">Order recieved</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="funfact_one text-center">
                                                <div class="details">
                                                    <ul class="ps-0 mb-0 d-flex justify-content-center">
                                                        <li>
                                                            <div class="timer">236</div>
                                                        </li>
                                                        <li><span>M</span></li>
                                                    </ul>
                                                    <p class="text mb-0">Projects Completed</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Our Agents -->
                    

                    <!-- Our faq -->
                    <section class="our-faqs pt-0 pb50">
                        <div class="container">
                            <div class="row wow fadeInUp">
                                <div class="col-lg-6 m-auto">
                                    <div class="main-title text-center">
                                        <h2 class="title">Frequently Asked Questions</h2>
                                        <p class="paragraph mt10">Lorem ipsum dolor sit amet, consectetur.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row wow fadeInUp" data-wow-delay="300ms">
                                <div class="col-lg-8 mx-auto">
                                    <div class="ui-content">
                                        <div class="accordion-style1 faq-page mb-4 mb-lg-5">
                                            <div class="accordion" id="accordionExample">
                                                <div class="accordion-item active">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="true" aria-controls="collapseOne">What
                                                            methods of payments are supported?</button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div class="accordion-body">Cras vitae ac nunc orci. Purus amet
                                                            tortor non at phasellus ultricies hendrerit. Eget a, sit
                                                            morbi nunc sit id massa. Metus, scelerisque volutpat nec sit
                                                            vel donec. Sagittis, id volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">Can I
                                                            cancel at anytime?</button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                        <div class="accordion-body">Cras vitae ac nunc orci. Purus amet
                                                            tortor non at phasellus ultricies hendrerit. Eget a, sit
                                                            morbi nunc sit id massa. Metus, scelerisque volutpat nec sit
                                                            vel donec. Sagittis, id volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">How do I
                                                            get a receipt for my purchase?</button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree" data-parent="#accordionExample">
                                                        <div class="accordion-body">Cras vitae ac nunc orci. Purus amet
                                                            tortor non at phasellus ultricies hendrerit. Eget a, sit
                                                            morbi nunc sit id massa. Metus, scelerisque volutpat nec sit
                                                            vel donec. Sagittis, id volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFour">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseFour">Which
                                                            license do I need?</button>
                                                    </h2>
                                                    <div id="collapseFour" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFour" data-parent="#accordionExample">
                                                        <div class="accordion-body">Cras vitae ac nunc orci. Purus amet
                                                            tortor non at phasellus ultricies hendrerit. Eget a, sit
                                                            morbi nunc sit id massa. Metus, scelerisque volutpat nec sit
                                                            vel donec. Sagittis, id volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="false" aria-controls="collapseFive">How do I
                                                            get access to a theme I purchased?</button>
                                                    </h2>
                                                    <div id="collapseFive" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFive" data-parent="#accordionExample">
                                                        <div class="accordion-body">Cras vitae ac nunc orci. Purus amet
                                                            tortor non at phasellus ultricies hendrerit. Eget a, sit
                                                            morbi nunc sit id massa. Metus, scelerisque volutpat nec sit
                                                            vel donec. Sagittis, id volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Our Footer -->
                   <Footer/>
                </div>
            </div>
        </body>

    </div>
</template>

<script setup>

</script>

<style scoped>
.sign-in {
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.sign-in .sign-in__main {
    padding: 01px 10px;
}
</style>