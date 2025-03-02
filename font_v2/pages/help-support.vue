<template>
    <div>
        <title>Seller</title>

        <body class="bgc-thm1">
            <div class="wrapper ovh">
                <Header />
                <MobileMenu />
                <div class="body_content">
                    <!-- search section start here  -->
                    <section class="search_sec">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="search_box">
                                        <h2>How can we help you?</h2>
                                        <div class="search_input">
                                            <input type="text" class="form-control">
                                            <button class="btn_search"><i class="fa-solid fa-search"></i></button>
                                        </div>
                                        <div class="search_sortcut">
                                            <h4>Popular searches</h4>
                                            <button class="btn_tag">orders</button>
                                            <button class="btn_tag">freelancer</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 text-center">
                                    <img src="/pison.png" alt="" class="img-fluid">
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- search section end here  -->

                    <!-- choose a category fir help and support section start here  -->

                    <section class="category_sec" v-if="faq == 0">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 m-auto">
                                    <div class="section_title ">
                                        <h4 class="title_css">Choose a category for help and Support.</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4"><button class="btn_help" @click="content(1)"><img
                                            src="/buttons/profile.png" alt="" class="img-fluid"></button></div>
                                <div class="col-md-4"><button class="btn_help" @click="content(2)"><img
                                            src="/buttons/security.png" alt="" class="img-fluid"></button></div>
                                <div class="col-md-4"><button class="btn_help" @click="content(3)"><img
                                            src="/buttons/purchasing.png" alt="" class="img-fluid"></button></div>
                                <div class="col-md-4"><button class="btn_help" @click="content(4)"><img
                                            src="/buttons/payWithdraw.png" alt="" class="img-fluid"></button></div>
                                <div class="col-md-4"><button class="btn_help" @click="content(5)"><img
                                            src="/buttons/orderManagement.png" alt="" class="img-fluid"></button></div>
                                <div class="col-md-4"><button class="btn_help" @click="content(6)"><img
                                            src="/buttons/selling.png" alt="" class="img-fluid"></button></div>
                                <div class="col-md-4"><button class="btn_help" @click="content(7)"><img
                                            src="/buttons/gigs.png" alt="" class="img-fluid"></button></div>
                                <div class="col-md-4"><button class="btn_help" @click="content(8)"><img
                                            src="/buttons/rules.png" alt="" class="img-fluid"></button></div>
                                <div class="col-md-4"><button class="btn_help" @click="content(9)"><img
                                            src="/buttons/other.png" alt="" class="img-fluid"></button></div>
                            </div>
                        </div>
                    </section>
                    <section class="category_sec" id="profile" v-else-if="faq == 1">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 m-auto">
                                    <div class="section_title ">
                                        <h4 class="title_css">Your Isumax profile.</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="row my-3">
                                <div class="col-md-8 m-auto">
                                    <button class="btn btn-default" type="button" @click="back()"><i
                                            class="fa-solid fa-arrow-left"></i> Back</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8 m-auto">
                                    <!-- ========= Profile start ==========  -->
                                    <div class="ui-content">
                                        <div class="accordion-style1 faq-page mb90">
                                            <div class="accordion" id="accordionExample">
                                                <div class="accordion-item active">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="true" aria-controls="collapseOne">
                                                            How do I create a profile on Isumax?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div class="accordion-body">To create a profile, sign up for
                                                            free on Isumax, verify your email, and fill in your details
                                                            such as name, skills (for sellers), or hiring preferences
                                                            (for buyers). A complete profile increases your chances of
                                                            getting noticed.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">
                                                            How can I make my profile stand out?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                        <div class="accordion-body">Use a professional profile picture,
                                                            write a clear and engaging bio, showcase your skills and
                                                            expertise, and add a portfolio if applicable. Regularly
                                                            update your profile for better visibility.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">
                                                            Can I edit my profile information after signing up?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree" data-parent="#accordionExample">
                                                        <div class="accordion-body">Yes! You can update your profile
                                                            details, skills, bio, and even your portfolio anytime from
                                                            your account settings.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFour">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseFour">
                                                            Why is my profile not visible to others?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFour" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFour" data-parent="#accordionExample">
                                                        <div class="accordion-body">Your profile may be pending approval
                                                            or missing essential details. Ensure all required fields are
                                                            completed and follow Isumax's profile guidelines.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="false" aria-controls="collapseFive">
                                                            How do I verify my profile?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFive" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFive" data-parent="#accordionExample">
                                                        <div class="accordion-body">Profile verification helps build
                                                            trust. You may need to verify your email, phone number, and
                                                            provide additional identity verification if required.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingSix">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                                            aria-expanded="false" aria-controls="collapseSix">
                                                            Can I have both a seller and buyer profile?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseSix" class="accordion-collapse collapse"
                                                        aria-labelledby="headingSix" data-parent="#accordionExample">
                                                        <div class="accordion-body">Yes, Isumax allows you to sign up
                                                            for both seller & buyer accounts - sell your own gigs from
                                                            the seller account. Use your buyer account, hire freelancers
                                                            or work as part of the Isumax Starx Program.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingSeven">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseSeven"
                                                            aria-expanded="false" aria-controls="collapseSeven">
                                                            How do I set my profile preferences?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseSeven" class="accordion-collapse collapse"
                                                        aria-labelledby="headingSeven" data-parent="#accordionExample">
                                                        <div class="accordion-body">Go to your profile settings and
                                                            customize notifications, privacy settings, and preferred
                                                            payment methods.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingEight">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseEight"
                                                            aria-expanded="false" aria-controls="collapseEight">
                                                            What should I do if I forget my login details?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseEight" class="accordion-collapse collapse"
                                                        aria-labelledby="headingEight" data-parent="#accordionExample">
                                                        <div class="accordion-body">Click on ‘Forgot Password’ on the
                                                            login page, enter your registered email, and follow the
                                                            instructions to reset your password.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingNine">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseNine"
                                                            aria-expanded="false" aria-controls="collapseNine">
                                                            How can I deactivate or delete my profile?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseNine" class="accordion-collapse collapse"
                                                        aria-labelledby="headingNine" data-parent="#accordionExample">
                                                        <div class="accordion-body">If you wish to deactivate or
                                                            permanently delete your Isumax profile, contact our support
                                                            team or visit the account settings section.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTen">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTen"
                                                            aria-expanded="false" aria-controls="collapseTen">
                                                            Who can I contact if I need help with my profile?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTen" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTen" data-parent="#accordionExample">
                                                        <div class="accordion-body">For any issues related to your
                                                            profile, visit our Help & Support section or reach out to
                                                            our customer support team.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- profile Endd  -->
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="category_sec" id="profile" v-else-if="faq == 2">

                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 m-auto">
                                    <div class="section_title ">
                                        <h4 class="title_css">Safety and security.</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="row my-3">
                                <div class="col-md-8 m-auto">
                                    <button class="btn btn-default" type="button" @click="back()"><i
                                            class="fa-solid fa-arrow-left"></i> Back</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8 m-auto">
                                    <!-- ======== safety and sequrity ===========  -->
                                    <div class="ui-content">
                                        <div class="accordion-style1 faq-page mb90">
                                            <div class="accordion" id="accordionExample">
                                                <div class="accordion-item active">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="true" aria-controls="collapseOne">
                                                            How does Isumax ensure user security?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div class="accordion-body">Isumax uses advanced secure payment
                                                            gateways, and fraud detection systems to protect users. We
                                                            also verify users through email and additional identity
                                                            checks to prevent scams.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">
                                                            How can I keep my Isumax account secure?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <ul>
                                                                <li>Use a strong, unique password.</li>
                                                                <li>Never share your login credentials with anyone.</li>
                                                                <li>Be cautious of suspicious messages or phishing
                                                                    attempts.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">
                                                            Are payments secure on Isumax?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree" data-parent="#accordionExample">
                                                        <div class="accordion-body">Yes! Isumax ensures safe
                                                            transactions through trusted payment gateways. Payments are
                                                            released to sellers only after the buyer confirms project
                                                            completion.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFour">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseFour">
                                                            How does Isumax prevent fraud?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFour" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFour" data-parent="#accordionExample">
                                                        <div class="accordion-body">We actively monitor transactions and
                                                            user activities to detect suspicious behavior. Any
                                                            fraudulent accounts or transactions are immediately flagged
                                                            and investigated.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="false" aria-controls="collapseFive">
                                                            How do I report suspicious activity or scams?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFive" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFive" data-parent="#accordionExample">
                                                        <div class="accordion-body">If you notice any fraudulent
                                                            activity, report it immediately through the Help & Support
                                                            section or contact customer support at help@isumax.com.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- safty and sequrity end here  -->
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="category_sec" id="profile" v-else-if="faq == 3">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 m-auto">
                                    <div class="section_title ">
                                        <h4 class="title_css">Purchasing on Isumax</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="row my-3">
                                <div class="col-md-8 m-auto">
                                    <button class="btn btn-default" type="button" @click="back()"><i
                                            class="fa-solid fa-arrow-left"></i> Back</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8 m-auto">
                                    <!-- =========== Purchasing on Isumax ===========  -->
                                    <div class="ui-content">
                                        <div class="accordion-style1 faq-page mb90">
                                            <div class="accordion" id="accordionExample">

                                                <!-- Service & Order Section -->
                                                <div class="accordion-item active">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="true" aria-controls="collapseOne">
                                                            How do I purchase a service on Isumax?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            To buy a service:
                                                            <ul>
                                                                <li>Sign up or log in to your Isumax account.</li>
                                                                <li>Browse services and select the one that fits your
                                                                    needs.</li>
                                                                <li>Place an order and make a secure payment.</li>
                                                                <li>Communicate with the seller and provide project
                                                                    details.</li>
                                                                <li>Receive your work and approve the delivery.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">
                                                            What payment methods are accepted on Isumax?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Isumax supports multiple payment options, including:
                                                            <ul>
                                                                <li>Credit/Debit Cards</li>
                                                                <li>PayPal</li>
                                                                <li>Cryptocurrency (if available)</li>
                                                                <li>Other local payment gateways (varies by region)</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">
                                                            Is my payment secure on Isumax?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree" data-parent="#accordionExample">
                                                        <div class="accordion-body">Yes! All payments are processed
                                                            through secure and encrypted payment gateways to ensure
                                                            buyer protection. Funds are only released to the seller once
                                                            you approve the service delivery.</div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFour">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseFour">
                                                            Can I get a refund if I am not satisfied with a service?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFour" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFour" data-parent="#accordionExample">
                                                        <div class="accordion-body">Yes. If the service is not delivered
                                                            as described, you can request a revision from the seller or
                                                            open a dispute resolution case through Isumax support.</div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="false" aria-controls="collapseFive">
                                                            Can I hire freelancers for long-term projects?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFive" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFive" data-parent="#accordionExample">
                                                        <div class="accordion-body">Absolutely! Isumax allows buyers to
                                                            hire freelancers on a per-project, hourly, or monthly salary
                                                            basis, giving you flexibility for long-term collaborations.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingSix">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                                            aria-expanded="false" aria-controls="collapseSix">
                                                            Can I negotiate prices with sellers?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseSix" class="accordion-collapse collapse"
                                                        aria-labelledby="headingSix" data-parent="#accordionExample">
                                                        <div class="accordion-body">Yes. Many sellers offer custom
                                                            pricing based on project complexity. You can send a message
                                                            to discuss your project before placing an order.</div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingSeven">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseSeven"
                                                            aria-expanded="false" aria-controls="collapseSeven">
                                                            What happens if the seller doesn’t deliver on time?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseSeven" class="accordion-collapse collapse"
                                                        aria-labelledby="headingSeven" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            If the seller misses the deadline, you can:
                                                            <ul>
                                                                <li>Request an update from the seller.</li>
                                                                <li>Extend the delivery time if agreed upon.</li>
                                                                <li>Cancel the order and request a refund if no progress
                                                                    is made.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingEight">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseEight"
                                                            aria-expanded="false" aria-controls="collapseEight">
                                                            How can I track my order progress?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseEight" class="accordion-collapse collapse"
                                                        aria-labelledby="headingEight" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            You can monitor project updates through:
                                                            <ul>
                                                                <li>Order dashboard (inside your account).</li>
                                                                <li>Messages & files exchanged with the seller.</li>
                                                                <li>Order milestones (for larger projects).</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingNine">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseNine"
                                                            aria-expanded="false" aria-controls="collapseNine">
                                                            What is the Starx Program, and how does it benefit buyers?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseNine" class="accordion-collapse collapse"
                                                        aria-labelledby="headingNine" data-parent="#accordionExample">
                                                        <div class="accordion-body">The Starx Program allows buyers to
                                                            earn rewards by referring others, hiring frequently, or
                                                            promoting the platform. You can earn discounts, commissions,
                                                            and even a basic salary package based on engagement.</div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTen">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTen"
                                                            aria-expanded="false" aria-controls="collapseTen">
                                                            How do I report an issue with my order?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTen" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTen" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            If you face any issues, you can:
                                                            <ul>
                                                                <li>Contact the seller to resolve it directly.</li>
                                                                <li>Report the issue through the Isumax dispute
                                                                    resolution system.</li>
                                                                <li>Reach out to customer support for assistance.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingEleven">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseEleven"
                                                            aria-expanded="false" aria-controls="collapseEleven">
                                                            Can I cancel an order after purchasing a service?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseEleven" class="accordion-collapse collapse"
                                                        aria-labelledby="headingEleven" data-parent="#accordionExample">
                                                        <div class="accordion-body">Yes, but it depends on the seller’s
                                                            cancellation policy. If the seller has already started
                                                            working, you may need to discuss terms for a partial refund.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwelve">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwelve"
                                                            aria-expanded="false" aria-controls="collapseTwelve">
                                                            How do I contact Isumax support for purchasing-related
                                                            questions?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwelve" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwelve" data-parent="#accordionExample">
                                                        <div class="accordion-body">You can visit the Help & Support
                                                            section or reach out to customer service through email at
                                                            help@isumax.com.</div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Purchasing on Isumax -->
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="category_sec" id="profile" v-else-if="faq == 4">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 m-auto">
                                    <div class="section_title ">
                                        <h4 class="title_css">Pay and withdraw</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="row my-3">
                                <div class="col-md-8 m-auto">
                                    <button class="btn btn-default" type="button" @click="back()"><i
                                            class="fa-solid fa-arrow-left"></i> Back</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8 m-auto">
                                    <!-- ================ Pay and withdraw=================  -->
                                    <div class="ui-content">
                                        <div class="accordion-style1 faq-page mb90">
                                            <div class="accordion" id="accordionExample">
                                                <div class="accordion-item active">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="true" aria-controls="collapseOne">
                                                            How do I add funds to my Isumax account?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            You can add funds by using:
                                                            <ul>
                                                                <li>Credit/Debit Cards (Visa, MasterCard, etc.)</li>
                                                                <li>PayPal</li>
                                                                <li>Cryptocurrency (if available)</li>
                                                                <li>Other local payment methods (varies by region)</li>
                                                            </ul>
                                                            Simply go to your Wallet section and select the preferred
                                                            payment method to deposit funds.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">
                                                            How can I withdraw my earnings from Isumax?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            You can withdraw your funds using:
                                                            <ul>
                                                                <li>Bank Transfer (available in selected countries)</li>
                                                                <li>PayPal</li>
                                                                <li>Cryptocurrency (USDT, BTC, or other available
                                                                    options)</li>
                                                            </ul>
                                                            To withdraw, go to your Wallet > Withdraw Funds, select your
                                                            preferred method, and enter the amount you wish to withdraw.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">
                                                            What is the minimum withdrawal amount on Isumax?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            The minimum withdrawal amount depends on the selected
                                                            withdrawal method. Typical minimums are:
                                                            <ul>
                                                                <li>PayPal: $50</li>
                                                                <li>Bank Transfer: $50</li>
                                                                <li>Crypto Wallet: $20</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFour">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseFour">
                                                            How long does it take to receive my withdrawal?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFour" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFour" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <ul>
                                                                <li>PayPal & Crypto: Within 24-48 hours</li>
                                                                <li>Bank Transfer: 3-7 business days, depending on your
                                                                    bank</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="false" aria-controls="collapseFive">
                                                            Are there any fees for withdrawals?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFive" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFive" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Yes, Isumax may charge small processing fees depending on
                                                            your withdrawal method:
                                                            <ul>
                                                                <li>PayPal: Standard PayPal transaction fees apply.</li>
                                                                <li>Bank Transfer: May have bank processing fees.</li>
                                                                <li>Crypto Wallet: Network gas fees apply (varies based
                                                                    on blockchain).</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Pay and withdraw -->
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="category_sec" id="profile" v-else-if="faq == 5">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 m-auto">
                                    <div class="section_title ">
                                        <h4 class="title_css">Order management.</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="row my-3">
                                <div class="col-md-8 m-auto">
                                    <button class="btn btn-default" type="button" @click="back()"><i
                                            class="fa-solid fa-arrow-left"></i> Back</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8 m-auto">
                                    <!-- ========= Order management ============ -->
                                    <div class="ui-content">
                                        <div class="accordion-style1 faq-page mb90">
                                            <div class="accordion" id="accordionExample">

                                                <!-- Order Placement Section -->
                                                <div class="accordion-item active">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="true" aria-controls="collapseOne">
                                                            How do I place an order on Isumax?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            To place an order:
                                                            <ul>
                                                                <li>Browse services and select a gig.</li>
                                                                <li>Select a freelancer and review their gig details.
                                                                </li>
                                                                <li>Click "Contact" or negotiate custom terms.</li>
                                                                <li>Make payment securely through Isumax.</li>
                                                                <li>Track progress and communicate with the freelancer.
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">
                                                            Can I cancel an order after placing it?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Yes, you can request a cancellation if:
                                                            <ul>
                                                                <li>The freelancer has not yet started working.</li>
                                                                <li>Both parties agree to cancel.</li>
                                                                <li>There’s a violation of Isumax policies.</li>
                                                            </ul>
                                                            Cancellations may result in a refund or order revision,
                                                            depending on the case.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">
                                                            How do I track my order’s progress?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Go to "My Orders" in your dashboard.
                                                            <ul>
                                                                <li>Check order status (Pending, In Progress, Delivered,
                                                                    Completed).</li>
                                                                <li>Communicate with the freelancer via the order chat.
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFour">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseFour">
                                                            What happens if a seller does not deliver on time?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFour" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFour" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            If the deadline passes and the seller hasn’t delivered:
                                                            <ul>
                                                                <li>Contact them for an update.</li>
                                                                <li>Request an extension if needed.</li>
                                                                <li>Open a dispute for a refund if necessary.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="false" aria-controls="collapseFive">
                                                            Can I request modifications to an order?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFive" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFive" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Yes, if the order is delivered but not as expected, you can:
                                                            <ul>
                                                                <li>Click "Request Revision" before marking it as
                                                                    completed.</li>
                                                                <li>Provide specific feedback to the freelancer for
                                                                    improvements.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingSix">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                                            aria-expanded="false" aria-controls="collapseSix">
                                                            What if I’m not satisfied with the final delivery?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseSix" class="accordion-collapse collapse"
                                                        aria-labelledby="headingSix" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            If you're unhappy:
                                                            <ul>
                                                                <li>Request modifications.</li>
                                                                <li>Contact Isumax support if there’s a serious issue.
                                                                </li>
                                                                <li>If unresolved, request a refund under Isumax’s
                                                                    dispute resolution.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingSeven">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseSeven"
                                                            aria-expanded="false" aria-controls="collapseSeven">
                                                            How do refunds work for canceled orders?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseSeven" class="accordion-collapse collapse"
                                                        aria-labelledby="headingSeven" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            If an order is canceled, refunds will be processed as:
                                                            <ul>
                                                                <li>Wallet Credits: Refund goes to your Isumax balance.
                                                                </li>
                                                                <li>Original Payment Method: If eligible, the amount may
                                                                    be returned via PayPal, bank transfer, or crypto.
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingEight">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseEight"
                                                            aria-expanded="false" aria-controls="collapseEight">
                                                            Can sellers cancel an order?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseEight" class="accordion-collapse collapse"
                                                        aria-labelledby="headingEight" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Sellers may cancel if:
                                                            <ul>
                                                                <li>The buyer violates Isumax policies.</li>
                                                                <li>The work requested is outside their expertise.</li>
                                                                <li>There’s a delay in buyer response.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingNine">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseNine"
                                                            aria-expanded="false" aria-controls="collapseNine">
                                                            How do I dispute an order issue?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseNine" class="accordion-collapse collapse"
                                                        aria-labelledby="headingNine" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            If there’s a problem with an order, you can:
                                                            <ul>
                                                                <li>First, try resolving the issue with the freelancer.
                                                                </li>
                                                                <li>If unresolved, go to Help & Support and open a
                                                                    dispute.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTen">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTen"
                                                            aria-expanded="false" aria-controls="collapseTen">
                                                            What are the different order statuses?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTen" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTen" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <ul>
                                                                <li>Pending: Order has been placed but not started.</li>
                                                                <li>In Progress: The freelancer is working on your
                                                                    order.</li>
                                                                <li>Delivered: The freelancer has submitted the final
                                                                    work.</li>
                                                                <li>Completed: The order has been approved and closed.
                                                                </li>
                                                                <li>Canceled: The order has been canceled.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingEleven">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseEleven"
                                                            aria-expanded="false" aria-controls="collapseEleven">
                                                            What happens if a freelancer delivers low-quality work?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseEleven" class="accordion-collapse collapse"
                                                        aria-labelledby="headingEleven" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            If the quality is poor, you can:
                                                            <ul>
                                                                <li>Request a revision before accepting the delivery.
                                                                </li>
                                                                <li>Leave honest feedback to help other buyers.</li>
                                                                <li>Report the seller if they fail to meet standards.
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <!-- end Order management  -->
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="category_sec" id="profile" v-else-if="faq == 6">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 m-auto">
                                    <div class="section_title ">
                                        <h4 class="title_css">Selling on isumax.</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="row my-3">
                                <div class="col-md-8 m-auto">
                                    <button class="btn btn-default" type="button" @click="back()"><i
                                            class="fa-solid fa-arrow-left"></i> Back</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8 m-auto">
                                    <!-- ========== Selling on isumax============== -->
                                    <div class="ui-content">
                                        <div class="accordion-style1 faq-page mb90">
                                            <div class="accordion" id="accordionExample">

                                                <!-- Selling on Isumax Section -->
                                                <div class="accordion-item active">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="true" aria-controls="collapseOne">
                                                            How do I start selling on Isumax?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            To become a seller on Isumax:
                                                            <ul>
                                                                <li>Sign Up for Free – Create your account on Isumax.
                                                                </li>
                                                                <li>Set Up Your Profile – Add details about your skills
                                                                    and experience.</li>
                                                                <li>Create Gigs – List the services you offer, set
                                                                    prices, and provide descriptions.</li>
                                                                <li>Get Orders & Deliver Work – Receive projects,
                                                                    complete them, and submit the work.</li>
                                                                <li>Get Paid – Withdraw your earnings securely through
                                                                    available payment methods.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">
                                                            Can I sell multiple services?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Yes! You can create multiple gigs offering different
                                                            services within allowed categories. Each gig should clearly
                                                            describe what you offer.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">
                                                            How do I get more orders on Isumax?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            To attract more buyers:
                                                            <ul>
                                                                <li>Optimize Your Profile & Gigs – Use clear
                                                                    descriptions and eye-catching images.</li>
                                                                <li>Share Your Gigs – Promote your services on social
                                                                    media.</li>
                                                                <li>Maintain Good Ratings – Deliver quality work on time
                                                                    and provide excellent customer service.</li>
                                                                <li>Utilize the Starx Program – Earn extra by referring
                                                                    buyers and freelancers to Isumax.</li>
                                                                <li>Isumax Marketing – Contact the Isumax Marketing
                                                                    Department, who will optimize, mobilize, and promote
                                                                    your gigs for free (terms and conditions may apply).
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFour">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseFour">
                                                            How does Isumax help me get clients?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFour" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFour" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Isumax's social media marketing team shares your gigs across
                                                            platforms, increasing visibility and bringing potential
                                                            clients to your services.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="false" aria-controls="collapseFive">
                                                            How do I receive payments?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFive" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFive" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Payments are processed securely, and you can withdraw
                                                            earnings through:
                                                            <ul>
                                                                <li>Bank Transfer</li>
                                                                <li>PayPal</li>
                                                                <li>Cryptocurrency (USDT, etc.)</li>
                                                                <li>Isumax Wallet</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingSix">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                                            aria-expanded="false" aria-controls="collapseSix">
                                                            When will I receive my earnings?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseSix" class="accordion-collapse collapse"
                                                        aria-labelledby="headingSix" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Your earnings become available after a security clearance
                                                            period (typically a few days) to ensure buyer satisfaction.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingSeven">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseSeven"
                                                            aria-expanded="false" aria-controls="collapseSeven">
                                                            What should I do if a buyer requests extra work?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseSeven" class="accordion-collapse collapse"
                                                        aria-labelledby="headingSeven" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            If a buyer asks for additional work beyond your gig scope:
                                                            <ul>
                                                                <li>Offer a custom order with an updated price.</li>
                                                                <li>Politely explain if the request is outside your
                                                                    expertise.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingEight">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseEight"
                                                            aria-expanded="false" aria-controls="collapseEight">
                                                            Can I cancel an order?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseEight" class="accordion-collapse collapse"
                                                        aria-labelledby="headingEight" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Yes, you can cancel under certain conditions:
                                                            <ul>
                                                                <li>If the buyer is unresponsive.</li>
                                                                <li>If the project request is outside your expertise.
                                                                </li>
                                                                <li>If the buyer violates Isumax policies.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingNine">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseNine"
                                                            aria-expanded="false" aria-controls="collapseNine">
                                                            What happens if a buyer is not satisfied with my work?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseNine" class="accordion-collapse collapse"
                                                        aria-labelledby="headingNine" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            If a buyer is unhappy:
                                                            <ul>
                                                                <li>Offer revisions to improve the delivery.</li>
                                                                <li>Communicate professionally to resolve the issue.
                                                                </li>
                                                                <li>Contact Isumax support if there is a dispute.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTen">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTen"
                                                            aria-expanded="false" aria-controls="collapseTen">
                                                            How do I increase my seller level?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTen" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTen" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Isumax rewards top-performing sellers. To level up:
                                                            <ul>
                                                                <li>Complete orders successfully.</li>
                                                                <li>Maintain high ratings and fast response times.</li>
                                                                <li>Avoid cancellations and disputes.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingEleven">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseEleven"
                                                            aria-expanded="false" aria-controls="collapseEleven">
                                                            Can I withdraw my earnings at any time?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseEleven" class="accordion-collapse collapse"
                                                        aria-labelledby="headingEleven" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Yes, once your earnings are cleared, you can withdraw at any
                                                            time based on the minimum withdrawal threshold.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwelve">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwelve"
                                                            aria-expanded="false" aria-controls="collapseTwelve">
                                                            What are the rules for selling on Isumax?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwelve" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwelve" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Rules for selling on Isumax:
                                                            <ul>
                                                                <li>Deliver original, high-quality work to buyers.</li>
                                                                <li>Do not request payments outside Isumax.</li>
                                                                <li>Communicate professionally with clients.</li>
                                                                <li>Follow ethical and legal guidelines for your
                                                                    services.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingThirteen">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThirteen"
                                                            aria-expanded="false" aria-controls="collapseThirteen">
                                                            Can I use my Isumax account as both a buyer and seller?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThirteen" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThirteen"
                                                        data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Yes! You can buy services and sell gigs from the same
                                                            account. Simply switch roles in your dashboard.
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <!-- Selling on isumax -->
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="category_sec" id="profile" v-else-if="faq == 7">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 m-auto">
                                    <div class="section_title ">
                                        <h4 class="title_css">Gigs</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="row my-3">
                                <div class="col-md-8 m-auto">
                                    <button class="btn btn-default" type="button" @click="back()"><i
                                            class="fa-solid fa-arrow-left"></i> Back</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8 m-auto">
                                    <!-- ============ Gigs ===============  -->
                                    <div class="ui-content">
                                        <div class="accordion-style1 faq-page mb90">
                                            <div class="accordion" id="accordionExample">

                                                <!-- Selling on Isumax Section -->
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="true" aria-controls="collapseOne">
                                                            What is a gig on Isumax?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            A gig is a service listing that freelancers create to
                                                            showcase what they offer. Buyers can browse gigs and hire
                                                            sellers based on their needs.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">
                                                            How do I create a gig on Isumax?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            To create a gig:
                                                            <ul>
                                                                <li>Log in to your Isumax seller account.</li>
                                                                <li>Go to "Create Gig" in your dashboard.</li>
                                                                <li>Enter gig details – Title, description, category,
                                                                    pricing, and delivery time.</li>
                                                                <li>Add images to make your gig more attractive.</li>
                                                                <li>Publish your gig – Once approved, your gig will be
                                                                    live for buyers to see.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">
                                                            How many gigs can I create?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            The number of gigs you can create depends on your seller
                                                            level. New sellers can start with a few, while experienced
                                                            sellers can list more.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFour">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseFour">
                                                            How can I make my gig stand out?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFour" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFour" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            To attract more buyers:
                                                            <ul>
                                                                <li>Write a clear and detailed gig title & description.
                                                                </li>
                                                                <li>Set competitive pricing.</li>
                                                                <li>Deliver work on time and maintain high ratings.</li>
                                                                <li>Share your gig on social media.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="false" aria-controls="collapseFive">
                                                            Can I edit my gig after publishing?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFive" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFive" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Yes! You can edit your gig anytime to update descriptions,
                                                            pricing, or delivery details. However, frequent changes may
                                                            affect your ranking.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingSix">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                                            aria-expanded="false" aria-controls="collapseSix">
                                                            What are gig extras, and how do I add them?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseSix" class="accordion-collapse collapse"
                                                        aria-labelledby="headingSix" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Gig extras are add-ons that allow buyers to purchase
                                                            additional services from you (e.g., faster delivery, extra
                                                            revisions). You can add these while creating or editing your
                                                            gig.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingSeven">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseSeven"
                                                            aria-expanded="false" aria-controls="collapseSeven">
                                                            Can I offer multiple pricing packages?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseSeven" class="accordion-collapse collapse"
                                                        aria-labelledby="headingSeven" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Yes! Isumax allows you to set Basic, Standard, and Premium
                                                            pricing options with different features and delivery times.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingEight">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseEight"
                                                            aria-expanded="false" aria-controls="collapseEight">
                                                            How can I promote my gig?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseEight" class="accordion-collapse collapse"
                                                        aria-labelledby="headingEight" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <ul>
                                                                <li>Use social media – Share your gig on platforms like
                                                                    Facebook, Twitter, and LinkedIn.</li>
                                                                <li>Optimize your gig SEO – Use relevant keywords in
                                                                    your title and description.</li>
                                                                <li>Utilize the Isumax Starx Program – Earn more through
                                                                    referrals and community engagement.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingNine">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseNine"
                                                            aria-expanded="false" aria-controls="collapseNine">
                                                            What happens if my gig gets rejected?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseNine" class="accordion-collapse collapse"
                                                        aria-labelledby="headingNine" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            If your gig is rejected, review the rejection reason and
                                                            update it according to Isumax guidelines before
                                                            resubmitting.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTen">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTen"
                                                            aria-expanded="false" aria-controls="collapseTen">
                                                            How do I rank higher on Isumax search results?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTen" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTen" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <ul>
                                                                <li>Complete orders on time.</li>
                                                                <li>Maintain high ratings & positive reviews.</li>
                                                                <li>Stay active on the platform.</li>
                                                                <li>Regularly update your gigs for relevance.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <!-- gigs part end here  -->
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="category_sec" id="profile" v-else-if="faq == 8">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 m-auto">
                                    <div class="section_title ">
                                        <h4 class="title_css">Rules & tips</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="row my-3">
                                <div class="col-md-8 m-auto">
                                    <button class="btn btn-default" type="button" @click="back()"><i
                                            class="fa-solid fa-arrow-left"></i> Back</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8 m-auto">
                                    <!-- ============== Rule and tips =============== -->
                                    <div class="ui-content">
                                        <div class="accordion-style1 faq-page mb90">
                                            <div class="accordion" id="accordionExample">
                                                <!-- FAQ Section -->
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="true" aria-controls="collapseOne">
                                                            What are the basic rules for using Isumax?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            To ensure a safe and professional environment, all users
                                                            must follow these rules:
                                                            <ul>
                                                                <li>Be honest and professional in all interactions.</li>
                                                                <li>Deliver high-quality work within the agreed
                                                                    timeframe.</li>
                                                                <li>No fraudulent activities, including fake reviews or
                                                                    misleading services.</li>
                                                                <li>Respect intellectual property rights – Do not copy
                                                                    others' work.</li>
                                                                <li>Follow payment and withdrawal policies as per Isumax
                                                                    guidelines.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">
                                                            Are there restrictions on the services I can offer?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Yes, Isumax prohibits:
                                                            <ul>
                                                                <li>Illegal or unethical services (e.g., hacking, fake
                                                                    reviews).</li>
                                                                <li>Adult, violent, or inappropriate content.</li>
                                                                <li>Any services violating intellectual property laws.
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">
                                                            Can I contact buyers or sellers outside Isumax?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            No, all communication and transactions must stay on the
                                                            Isumax platform. Sharing personal contact details or
                                                            attempting to make payments outside Isumax is strictly
                                                            prohibited.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFour">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseFour">
                                                            What happens if I violate the rules?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFour" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFour" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Depending on the severity of the violation, actions may
                                                            include:
                                                            <ul>
                                                                <li>Warnings for minor infractions.</li>
                                                                <li>Gig suspension or removal.</li>
                                                                <li>Temporary or permanent account suspension for
                                                                    serious violations.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="false" aria-controls="collapseFive">
                                                            How do I report rule violations or suspicious activity?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFive" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFive" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            You can report users violating Isumax rules through the
                                                            Support Center. Provide relevant details, and our team will
                                                            take necessary action.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingSix">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                                            aria-expanded="false" aria-controls="collapseSix">
                                                            Are there any fees for using Isumax?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseSix" class="accordion-collapse collapse"
                                                        aria-labelledby="headingSix" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Isumax takes a small commission from sellers for completed
                                                            orders. Buyers do not pay extra fees beyond the service
                                                            price unless stated otherwise.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingSeven">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseSeven"
                                                            aria-expanded="false" aria-controls="collapseSeven">
                                                            Can I have multiple accounts on Isumax?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseSeven" class="accordion-collapse collapse"
                                                        aria-labelledby="headingSeven" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            No, each user is allowed only one account. Multiple accounts
                                                            can lead to suspension.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingEight">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseEight"
                                                            aria-expanded="false" aria-controls="collapseEight">
                                                            Can I edit or remove my reviews?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseEight" class="accordion-collapse collapse"
                                                        aria-labelledby="headingEight" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Reviews cannot be removed unless they violate Isumax
                                                            policies (e.g., contain hate speech, threats, or false
                                                            claims).
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingNine">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseNine"
                                                            aria-expanded="false" aria-controls="collapseNine">
                                                            What happens if a buyer or seller doesn’t follow the
                                                            agreement?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseNine" class="accordion-collapse collapse"
                                                        aria-labelledby="headingNine" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            If an issue arises:
                                                            <ul>
                                                                <li>Try to resolve the dispute with the other party.
                                                                </li>
                                                                <li>If unresolved, open a dispute through Isumax support
                                                                    for mediation.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTen">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTen"
                                                            aria-expanded="false" aria-controls="collapseTen">
                                                            Can I share my gig links on social media?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTen" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTen" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Yes! Promoting your gigs outside Isumax is allowed, but
                                                            directing clients to pay outside the platform is not.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingEleven">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseEleven"
                                                            aria-expanded="false" aria-controls="collapseEleven">
                                                            Are refunds possible on Isumax?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseEleven" class="accordion-collapse collapse"
                                                        aria-labelledby="headingEleven" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Refunds are handled case-by-case. If a seller fails to
                                                            deliver, buyers can request a refund through customer
                                                            support.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwelve">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwelve"
                                                            aria-expanded="false" aria-controls="collapseTwelve">
                                                            How does Isumax handle disputes?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwelve" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwelve" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Our dispute resolution team reviews cases fairly. We may
                                                            issue refunds, warn users, or take necessary actions based
                                                            on platform rules.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingThirteen">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThirteen"
                                                            aria-expanded="false" aria-controls="collapseThirteen">
                                                            Can I change my username or profile details?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThirteen" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThirteen"
                                                        data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Some details, like usernames, are fixed after registration.
                                                            You can update your bio, skills, and gig details from your
                                                            profile settings.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFourteen">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFourteen"
                                                            aria-expanded="false" aria-controls="collapseFourteen">
                                                            How can I stay compliant with Isumax rules?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFourteen" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFourteen"
                                                        data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Read and follow the Terms of Service.
                                                            <ul>
                                                                <li>Communicate professionally and transparently.</li>
                                                                <li>Deliver work on time and as promised.</li>
                                                                <li>Avoid rule-breaking activities such as spamming or
                                                                    misleading buyers.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="category_sec" id="profile" v-else-if="faq == 9">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 m-auto">
                                    <div class="section_title ">
                                        <h4 class="title_css">Others</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="row my-3">
                                <div class="col-md-8 m-auto">
                                    <button class="btn btn-default" type="button" @click="back()"><i
                                            class="fa-solid fa-arrow-left"></i> Back</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8 m-auto">
                                    <!-- ================== Others =================  -->
                                    <div class="ui-content">
                                        <div class="accordion-style1 faq-page mb90">
                                            <div class="accordion" id="accordionExample">
                                                <div class="accordion-item active">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="true" aria-controls="collapseOne">
                                                            What is Isumax?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Isumax is a freelance marketplace where buyers can hire
                                                            professionals for remote jobs and projects, and sellers
                                                            (freelancers) can offer their services globally. It provides
                                                            a secure and efficient platform for digital services.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">
                                                            Can I use Isumax on mobile devices?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Yes! Isumax is fully optimized for mobile and desktop use.
                                                            You can access the platform via a web browser, and a mobile
                                                            app can be downloaded from the Isumax website.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">
                                                            How do I contact Isumax support?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            You can reach out to our customer support team through:
                                                            <ul>
                                                                <li>The Help & Support section on the website.</li>
                                                                <li>Submitting a support ticket for issues.</li>
                                                                <li>Emailing our support team for direct assistance.
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFour">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseFour">
                                                            Can I pause or deactivate my account?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFour" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFour" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Yes, you can pause your gigs if you need a break, or request
                                                            account deactivation through support. However, account
                                                            deletion is permanent and cannot be undone.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="false" aria-controls="collapseFive">
                                                            Does Isumax offer promotional programs?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFive" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFive" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Yes! Isumax runs several promotional programs, including:
                                                            <ul>
                                                                <li>Starx Program – Our affiliate system to help buyers
                                                                    earn passive income.</li>
                                                                <li>Seller Promotions – Social media exposure for
                                                                    freelancers.</li>
                                                                <li>Seasonal Discounts – Offers for buyers and sellers.
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingSix">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                                            aria-expanded="false" aria-controls="collapseSix">
                                                            Can I change my registered email or username?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseSix" class="accordion-collapse collapse"
                                                        aria-labelledby="headingSix" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Your username cannot be changed after registration. However,
                                                            you can update your email address in your account settings
                                                            or contact support for assistance.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingSeven">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseSeven"
                                                            aria-expanded="false" aria-controls="collapseSeven">
                                                            Does Isumax offer training for sellers or Starx/affiliates?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseSeven" class="accordion-collapse collapse"
                                                        aria-labelledby="headingSeven" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Yes! We provide training sessions, guides, and support to
                                                            help sellers and Starx succeed. You can request marketing
                                                            materials, content, and personalized training.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingEight">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseEight"
                                                            aria-expanded="false" aria-controls="collapseEight">
                                                            What payment methods does Isumax support?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseEight" class="accordion-collapse collapse"
                                                        aria-labelledby="headingEight" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Isumax supports various payment methods for deposits and
                                                            withdrawals, including:
                                                            <ul>
                                                                <li>Bank transfers</li>
                                                                <li>Cryptocurrency (USDT, etc.)</li>
                                                                <li>E-wallets</li>
                                                                <li>Other local payment gateways (availability varies by
                                                                    region)</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingNine">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseNine"
                                                            aria-expanded="false" aria-controls="collapseNine">
                                                            Is there a referral program on Isumax?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseNine" class="accordion-collapse collapse"
                                                        aria-labelledby="headingNine" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Yes! The Starx Program allows you to earn rewards by
                                                            referring buyers and sellers to Isumax. You can get
                                                            commissions and even salary income based on your community’s
                                                            engagement.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTen">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTen"
                                                            aria-expanded="false" aria-controls="collapseTen">
                                                            Can I request a feature or suggest improvements?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTen" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTen" data-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Absolutely! We love hearing from our users. You can submit
                                                            feature requests or suggestions via Help@isumax.com.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- end others  -->
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- choose a category fir help and support section end here  -->

                    <!-- community section start here  -->
                    <section class="community_sec">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="commu_container">
                                        <div class="commu_box">
                                            <i class="fa-solid fa-group"></i>
                                            <h5>Commutiy hub</h5>
                                            <p>Discover opportunities to create meaningful connections and develop your
                                                professional growth.</p>
                                        </div>
                                        <div class="commu_box">
                                            <i class="fa-thin fa-users"></i>
                                            <h5>Forum</h5>
                                            <p>Join the global conversation for sharing tips, best practices and peer
                                                support.</p>
                                        </div>
                                        <div class="commu_box">
                                            <i class="fa-solid fa-newspaper"></i>
                                            <h5>Blog</h5>
                                            <p>Visit to learn about how to build your business or freelancing Career.
                                            </p>
                                        </div>
                                        <div class="commu_box">
                                            <i class="fa-brands fa-tiktok"></i>
                                            <h5>Tiktok</h5>
                                            <p>Follow us for advice
                                                inspiration and fun.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- community section start here  -->

                    <Footer />
                    <!-- Our Footer -->

                </div>
            </div>
        </body>

    </div>
</template>


<script setup>
const faq = ref(0);

const back = () => {
    faq.value = 0;
};

const content = (index) => {
    faq.value = index;
};


</script>
