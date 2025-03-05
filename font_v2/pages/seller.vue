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
                                                <p class="text mb30">"Find the Right Talent for Your Business on Isumax!"
                                                    Need expert freelancers to get your job done? Isumax connects you with skilled professionals ready to deliver quality work. Post your project, review proposals, and hire the best talent with secure payments and efficient collaboration.</p>
                                                <nuxt-link to="/sign-up" class="ud-btn btn-thm-border mb25 me-4">Get Started<i
                                                        class="fal fa-arrow-right-long"></i></nuxt-link>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="nav-manageother" role="tabpanel"
                                            aria-labelledby="nav-manageother-tab">
                                            <div class="for-hire">
                                                <h4>For Freelancing</h4>
                                                <p class="text mb30">"Turn Your Skills into Earnings on Isumax!"
                                                    Join Isumax as a freelancer and get access to job opportunities worldwide. Whether you're a designer, developer, writer, or any skilled professional, connect with clients who need your expertise.</p>
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
                                        <h2>How It Works – Start Selling on Isumax</h2>
                                        <p class="text">Turn your skills into earnings by offering services to clients worldwide!</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row wow fadeInUp" data-wow-delay="300ms">
                                <div class="col-sm-6 col-lg-3">
                                    <div class="iconbox-style1 border-less p-0">
                                        <div class="icon before-none"><span class="flaticon-cv"></span></div>
                                        <div class="details">
                                            <h4 class="title mt10 mb-3">Create a Service Listing</h4>
                                            <p class="text">Set up your profile, showcase your skills, and list your services with clear descriptions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-3">
                                    <div class="iconbox-style1 border-less p-0">
                                        <div class="icon before-none"><span class="flaticon-web-design"></span></div>
                                        <div class="details">
                                            <h4 class="title mt10 mb-3"> Get Hired by Clients</h4>
                                            <p class="text">Receive job offers from businesses and individuals looking for experts like you.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-3">
                                    <div class="iconbox-style1 border-less p-0">
                                        <div class="icon before-none"><span class="flaticon-secure"></span></div>
                                        <div class="details">
                                            <h4 class="title mt10 mb-3">Secure Payments</h4>
                                            <p class="text">Get paid safely through Isumax with guaranteed payments after project completion.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-3">
                                    <div class="iconbox-style1 border-less p-0">
                                        <div class="icon before-none"><span class="flaticon-customer-service"></span>
                                        </div>
                                        <div class="details">
                                            <h4 class="title mt10 mb-3">Work Flexibly</h4>
                                            <p class="text">Choose your projects, set your rates, and work on your terms from anywhere.</p>
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
                                                <h2 class="title">Why Sell on Isumax?</h2>
                                            </div>
                                        </div>
                                        <div class="why-chose-list">
                                            <div class="list-one d-flex align-items-start mb30">
                                                <!-- <span class="list-icon flex-shrink-0 flaticon-badge"></span> -->
                                                <div class="list-content flex-grow-1 ml20">
                                                    <h4 class="mb-1">Proof of Quality </h4>
                                                    <p class="text mb-0 fz15">– Build trust with verified profiles, ratings, and client reviews.</p>
                                                </div>
                                            </div>
                                            <div class="list-one d-flex align-items-start mb30">
                                                <!-- <span class="list-icon flex-shrink-0 flaticon-money"></span> -->
                                                <div class="list-content flex-grow-1 ml20">
                                                    <h4 class="mb-1">No Cost to Start</h4>
                                                    <p class="text mb-0 fz15"> – Create your freelancer profile and list services for free.</p>
                                                </div>
                                            </div>
                                            <div class="list-one d-flex align-items-start mb30">
                                                <!-- <span class="list-icon flex-shrink-0 flaticon-security"></span> -->
                                                <div class="list-content flex-grow-1 ml20">
                                                    <h4 class="mb-1">Guaranteed Payments</h4>
                                                    <p class="text mb-0 fz15"> – Secure transactions ensure you get paid for your work.</p>
                                                </div>
                                            </div>
                                            <div class="list-one d-flex align-items-start mb30">
                                                <!-- <span class="list-icon flex-shrink-0 flaticon-security"></span> -->
                                                <div class="list-content flex-grow-1 ml20">
                                                    <h4 class="mb-1">24/7 Support</h4>
                                                    <p class="text mb-0 fz15"> – We’re here to help whenever you need assistance.</p>
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
                                                            <div class="timer">1</div>
                                                        </li>
                                                        <li><span>B</span></li>
                                                    </ul>
                                                    <p class="text mb-0">Freelancers on Isumax</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="funfact_one text-center">
                                                <div class="details">
                                                    <ul class="ps-0 mb-0 d-flex justify-content-center">
                                                        <li>
                                                            <div class="timer">1</div>
                                                        </li>
                                                        <li><span>B</span></li>
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
                                                            <div class="timer">1</div>
                                                        </li>
                                                        <li><span>B</span></li>
                                                    </ul>
                                                    <p class="text mb-0"> plus Orders Received
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="funfact_one text-center">
                                                <div class="details">
                                                    <ul class="ps-0 mb-0 d-flex justify-content-center">
                                                        <li>
                                                            <div class="timer">1</div>
                                                        </li>
                                                        <li><span>B</span></li>
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
                                        <!-- <p class="paragraph mt10">Lorem ipsum dolor sit amet, consectetur.</p> -->
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
                                                            aria-expanded="true" aria-controls="collapseOne">What is Isumax?</button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div class="accordion-body">Isumax is a freelancing platform that connects skilled professionals with clients looking for quality digital services.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">How do I become a freelancer on Isumax?</button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                        <div class="accordion-body">Simply sign up, create a profile, list your services, and start receiving orders from clients worldwide.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">Is there a registration fee for freelancers?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree" data-parent="#accordionExample">
                                                        <div class="accordion-body">No, joining Isumax is completely free! You can create an account and start offering services without any upfront fees.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFour">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseFour">How do I get paid?</button>
                                                    </h2>
                                                    <div id="collapseFour" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFour" data-parent="#accordionExample">
                                                        <div class="accordion-body">Payments are securely processed through our system, and you can withdraw earnings using available payment methods.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="false" aria-controls="collapseFive">Can I set my own prices?</button>
                                                    </h2>
                                                    <div id="collapseFive" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFive" data-parent="#accordionExample">
                                                        <div class="accordion-body">Yes, freelancers have full control over pricing their services based on experience and market demand.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapsesix"
                                                            aria-expanded="false" aria-controls="collapseFive">Does Isumax promote my services?</button>
                                                    </h2>
                                                    <div id="collapsesix" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFive" data-parent="#accordionExample">
                                                        <div class="accordion-body">Yes! Our social media team actively promotes freelancer gigs across multiple platforms to help you gain visibility and attract clients.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseseven"
                                                            aria-expanded="false" aria-controls="collapseFive">How does the rating system work?</button>
                                                    </h2>
                                                    <div id="collapseseven" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFive" data-parent="#accordionExample">
                                                        <div class="accordion-body">Clients can leave reviews and ratings based on their experience, helping you build credibility and attract more buyers.</div>
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