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
                                <div class="col-md-4"><button class="btn_help" @click="content(1)"><img src="/buttons/profile.png" alt=""
                                            class="img-fluid"></button></div>
                                <div class="col-md-4"><button class="btn_help" @click="content(2)"><img src="/buttons/security.png" alt=""
                                            class="img-fluid"></button></div>
                                <div class="col-md-4"><button class="btn_help" @click="content(3)"><img src="/buttons/purchasing.png" alt=""
                                            class="img-fluid"></button></div>
                                <div class="col-md-4"><button class="btn_help" @click="content(4)"><img src="/buttons/payWithdraw.png"
                                            alt="" class="img-fluid"></button></div>
                                <div class="col-md-4"><button class="btn_help" @click="content(5)"><img src="/buttons/orderManagement.png"
                                            alt="" class="img-fluid"></button></div>
                                <div class="col-md-4"><button class="btn_help" @click="content(6)"><img src="/buttons/selling.png" alt=""
                                            class="img-fluid"></button></div>
                                <div class="col-md-4"><button class="btn_help" @click="content(7)"><img src="/buttons/gigs.png" alt=""
                                            class="img-fluid"></button></div>
                                <div class="col-md-4"><button class="btn_help" @click="content(8)"><img src="/buttons/rules.png" alt=""
                                            class="img-fluid"></button></div>
                                <div class="col-md-4"><button class="btn_help" @click="content(9)"><img src="/buttons/other.png" alt=""
                                            class="img-fluid"></button></div>
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
                                    <button class="btn btn-default" type="button" @click="back()"><i class="fa-solid fa-arrow-left"></i> Back</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8 m-auto">
                                    <div class="ui-content" bis_skin_checked="1">
                                        <div class="accordion-style1 faq-page mb90" bis_skin_checked="1">
                                            <div class="accordion" id="accordionExample" bis_skin_checked="1">
                                                <div class="accordion-item active" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="true" aria-controls="collapseOne">What
                                                            methods of payments are supported?</button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">Can I
                                                            cancel at anytime?</button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">How do I
                                                            get a receipt for my purchase?</button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingFour">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseFour">Which
                                                            license do I need?</button>
                                                    </h2>
                                                    <div id="collapseFour" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFour" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="false" aria-controls="collapseFive">How do I
                                                            get access to a theme I purchased?</button>
                                                    </h2>
                                                    <div id="collapseFive" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFive" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                    <button class="btn btn-default" type="button" @click="back()"><i class="fa-solid fa-arrow-left"></i> Back</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8 m-auto">
                                    <div class="ui-content" bis_skin_checked="1">
                                        <div class="accordion-style1 faq-page mb90" bis_skin_checked="1">
                                            <div class="accordion" id="accordionExample" bis_skin_checked="1">
                                                <div class="accordion-item active" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="true" aria-controls="collapseOne">What
                                                            methods of payments are supported?</button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">Can I
                                                            cancel at anytime?</button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">How do I
                                                            get a receipt for my purchase?</button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingFour">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseFour">Which
                                                            license do I need?</button>
                                                    </h2>
                                                    <div id="collapseFour" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFour" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="false" aria-controls="collapseFive">How do I
                                                            get access to a theme I purchased?</button>
                                                    </h2>
                                                    <div id="collapseFive" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFive" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                    <button class="btn btn-default" type="button" @click="back()"><i class="fa-solid fa-arrow-left"></i> Back</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8 m-auto">
                                    <div class="ui-content" bis_skin_checked="1">
                                        <div class="accordion-style1 faq-page mb90" bis_skin_checked="1">
                                            <div class="accordion" id="accordionExample" bis_skin_checked="1">
                                                <div class="accordion-item active" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="true" aria-controls="collapseOne">What
                                                            methods of payments are supported?</button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">Can I
                                                            cancel at anytime?</button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">How do I
                                                            get a receipt for my purchase?</button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingFour">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseFour">Which
                                                            license do I need?</button>
                                                    </h2>
                                                    <div id="collapseFour" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFour" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="false" aria-controls="collapseFive">How do I
                                                            get access to a theme I purchased?</button>
                                                    </h2>
                                                    <div id="collapseFive" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFive" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                    <button class="btn btn-default" type="button" @click="back()"><i class="fa-solid fa-arrow-left"></i> Back</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8 m-auto">
                                    <div class="ui-content" bis_skin_checked="1">
                                        <div class="accordion-style1 faq-page mb90" bis_skin_checked="1">
                                            <div class="accordion" id="accordionExample" bis_skin_checked="1">
                                                <div class="accordion-item active" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="true" aria-controls="collapseOne">What
                                                            methods of payments are supported?</button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">Can I
                                                            cancel at anytime?</button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">How do I
                                                            get a receipt for my purchase?</button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingFour">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseFour">Which
                                                            license do I need?</button>
                                                    </h2>
                                                    <div id="collapseFour" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFour" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="false" aria-controls="collapseFive">How do I
                                                            get access to a theme I purchased?</button>
                                                    </h2>
                                                    <div id="collapseFive" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFive" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                    <button class="btn btn-default" type="button" @click="back()"><i class="fa-solid fa-arrow-left"></i> Back</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8 m-auto">
                                    <div class="ui-content" bis_skin_checked="1">
                                        <div class="accordion-style1 faq-page mb90" bis_skin_checked="1">
                                            <div class="accordion" id="accordionExample" bis_skin_checked="1">
                                                <div class="accordion-item active" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="true" aria-controls="collapseOne">What
                                                            methods of payments are supported?</button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">Can I
                                                            cancel at anytime?</button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">How do I
                                                            get a receipt for my purchase?</button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingFour">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseFour">Which
                                                            license do I need?</button>
                                                    </h2>
                                                    <div id="collapseFour" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFour" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="false" aria-controls="collapseFive">How do I
                                                            get access to a theme I purchased?</button>
                                                    </h2>
                                                    <div id="collapseFive" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFive" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                    <button class="btn btn-default" type="button" @click="back()"><i class="fa-solid fa-arrow-left"></i> Back</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8 m-auto">
                                    <div class="ui-content" bis_skin_checked="1">
                                        <div class="accordion-style1 faq-page mb90" bis_skin_checked="1">
                                            <div class="accordion" id="accordionExample" bis_skin_checked="1">
                                                <div class="accordion-item active" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="true" aria-controls="collapseOne">What
                                                            methods of payments are supported?</button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">Can I
                                                            cancel at anytime?</button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">How do I
                                                            get a receipt for my purchase?</button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingFour">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseFour">Which
                                                            license do I need?</button>
                                                    </h2>
                                                    <div id="collapseFour" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFour" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="false" aria-controls="collapseFive">How do I
                                                            get access to a theme I purchased?</button>
                                                    </h2>
                                                    <div id="collapseFive" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFive" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                    <button class="btn btn-default" type="button" @click="back()"><i class="fa-solid fa-arrow-left"></i> Back</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8 m-auto">
                                    <div class="ui-content" bis_skin_checked="1">
                                        <div class="accordion-style1 faq-page mb90" bis_skin_checked="1">
                                            <div class="accordion" id="accordionExample" bis_skin_checked="1">
                                                <div class="accordion-item active" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="true" aria-controls="collapseOne">What
                                                            methods of payments are supported?</button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">Can I
                                                            cancel at anytime?</button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">How do I
                                                            get a receipt for my purchase?</button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingFour">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseFour">Which
                                                            license do I need?</button>
                                                    </h2>
                                                    <div id="collapseFour" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFour" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="false" aria-controls="collapseFive">How do I
                                                            get access to a theme I purchased?</button>
                                                    </h2>
                                                    <div id="collapseFive" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFive" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                    <button class="btn btn-default" type="button" @click="back()"><i class="fa-solid fa-arrow-left"></i> Back</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8 m-auto">
                                    <div class="ui-content" bis_skin_checked="1">
                                        <div class="accordion-style1 faq-page mb90" bis_skin_checked="1">
                                            <div class="accordion" id="accordionExample" bis_skin_checked="1">
                                                <div class="accordion-item active" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="true" aria-controls="collapseOne">What
                                                            methods of payments are supported?</button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">Can I
                                                            cancel at anytime?</button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">How do I
                                                            get a receipt for my purchase?</button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingFour">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseFour">Which
                                                            license do I need?</button>
                                                    </h2>
                                                    <div id="collapseFour" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFour" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="false" aria-controls="collapseFive">How do I
                                                            get access to a theme I purchased?</button>
                                                    </h2>
                                                    <div id="collapseFive" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFive" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
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
                                    <button class="btn btn-default" type="button" @click="back()"><i class="fa-solid fa-arrow-left"></i> Back</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8 m-auto">
                                    <div class="ui-content" bis_skin_checked="1">
                                        <div class="accordion-style1 faq-page mb90" bis_skin_checked="1">
                                            <div class="accordion" id="accordionExample" bis_skin_checked="1">
                                                <div class="accordion-item active" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="true" aria-controls="collapseOne">What
                                                            methods of payments are supported?</button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">Can I
                                                            cancel at anytime?</button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">How do I
                                                            get a receipt for my purchase?</button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingFour">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseFour">Which
                                                            license do I need?</button>
                                                    </h2>
                                                    <div id="collapseFour" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFour" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item" bis_skin_checked="1">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="false" aria-controls="collapseFive">How do I
                                                            get access to a theme I purchased?</button>
                                                    </h2>
                                                    <div id="collapseFive" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFive" data-parent="#accordionExample"
                                                        bis_skin_checked="1">
                                                        <div class="accordion-body" bis_skin_checked="1">Cras vitae ac
                                                            nunc orci. Purus amet tortor non at phasellus ultricies
                                                            hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                                                            scelerisque volutpat nec sit vel donec. Sagittis, id
                                                            volutpat erat vel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
