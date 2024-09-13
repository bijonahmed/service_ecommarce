<template>
    <!-- <div> -->
        <!-- navbar section start here  -->
        <section class="search_bar ">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-3 col-md-4 col-4">
                        <div class="logo nav_tab">
                            <!-- mobile view sidebar  -->
                            <button type="button" class="btn_menu mobile_view" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i
                                    class="fa-solid fa-bars-staggered"></i></button>

                            <!-- sidebar offcanvas  -->
                            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                                aria-labelledby="offcanvasExampleLabel">
                                <div class="offcanvas-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Ecommerce</h5>
                                </div>
                                <div class="offcanvas-body">
                                    <Common_MobileSidebar />
                                </div>
                            </div>
                            <!-- mini tab view navbar here  -->

                            <Common_MiniTabNavbar />
                            <!-- nav end  -->
                            <Nuxt-link to="/" ><img src="/images/logo.png" alt="" class="img-fluid navLogo" width="200px"></Nuxt-link>
                        </div>
                    </div>
                    <div class="col-6 desktop_view mini_tab_hide">
                        <form action="" class="">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" id="autocomplete-input" class="form-control ui-menu-item"
                                placeholder="Search products...">
                            <button type="button">Search</button>
                        </form>
                    </div>
                    <!-- desktop_view options  -->
                    <DesktopViewOption />
                    <!-- mobile view options  -->
                    <div class="col-4 ms-auto  mobile_view">
                        <div class="mobile_nav_option">
                            <a class="search_form"><i class="fa-solid fa-magnifying-glass"></i></a>
                        </div>
                    </div>
                    <!-- search modal  -->
                    <div class="search_form_modal">
                        <div class="search_box_main">
                            <div class="bar_search ">
                                <div>
                                    <a class="close_search_modal"><i class="fa-solid fa-arrow-left"></i></a>
                                </div>
                                <div>
                                    <input type="text" name="" placeholder="Search Product, Brands, Categories"  id="autocomplete-input_mobile">
                                </div>
                                <div>
                                    <button type="submit"> <i class="fa-solid fa-magnifying-glass"></i></button>
                                </div>
                            </div>
                            <ul>
                                <li v-for="(item, key) in searchloop" :key="key">
                                    <nuxt-link v-if="item.type == 'category'"  :to="`/category/category-grid?slug=${item.catslug}`">{{ item.label }}</nuxt-link>
                                    <nuxt-link v-if="item.type == 'product'"  :to="`/product-details/${item.slug}`">{{ item.label }}</nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Main section start here  -->
    <!-- </div> -->
</template>

<script>

// import axios from 'axios';
import Common_MobileSidebar from '~/components/Common_MobileSidebar.vue';
import Common_MiniTabNavbar from '~/components/Common_MiniTabNavbar.vue';
import DesktopViewOption from "/components/DesktopViewOption.vue"
export default {
    
    components: {
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        DesktopViewOption,
    },
    data() {
        return {
            searchloop: [],            
        };
    },
    async mounted(){
        
        if (process.client) {
            $(document).ready(() => {
                var self = this;
                $('#autocomplete-input').autocomplete({
                    source: (request, response) => {
                        const searchTerm = request.term;
                        if (searchTerm.length >= 1) {
                            // Make Axios request to fetch products dynamically
                            this.$axios.get(`/unauthenticate/products/search?term=${searchTerm}`)
                                .then(res => {
                                    //console.log("search console return " + res.data);
                                    response(res.data);
                                })
                                .catch(error => {
                                    console.error('Error fetching products:', error);
                                    response([]); // Return empty array in case of error
                                });
                        } else {
                            response([]); // Return empty array if search term is too short
                        }
                    },
                    minLength: 2, // Minimum characters before autocomplete starts

                    select: function (event, ui) {
                        if (ui.item.type == 'category') {
                            self.$router.push({
                                path: '/category/category-grid',
                                query: {
                                    slug: ui.item.catslug
                                }
                            });
                        }

                        if (ui.item.type == 'product') {
                            self.$router.push({
                                path: '/product-details/' + ui.item.slug,

                            });
                        }

                        var label = ui.item.label;
                        var value = ui.item.value;
                        // Store the selected value in session storage
                        sessionStorage.setItem('valueSelectedForAutocomplete', value);
                    }
                });

                $('#autocomplete-input_mobile').autocomplete({
                    source: (request, response) => {
                        const searchTerm = request.term;
                        if (searchTerm.length >= 1) {
                            // Make Axios request to fetch products dynamically
                            this.$axios.get(`/unauthenticate/products/search?term=${searchTerm}`)
                                .then(res => {
                                    //console.log("search console return " + res.data);
                                    // response(res.data);
                                    this.searchloop = res.data;
                                })
                                .catch(error => {
                                    console.error('Error fetching products:', error);
                                    response([]); // Return empty array in case of error
                                });
                        } else {
                            response([]); // Return empty array if search term is too short
                        }
                    },
                    minLength: 2, // Minimum characters before autocomplete starts

                    select: function (event, ui) {
                        if (ui.item.type == 'category') {
                            self.$router.push({
                                path: '/category/category-grid',
                                query: {
                                    slug: ui.item.catslug
                                }
                            });
                        }

                        if (ui.item.type == 'product') {
                            self.$router.push({
                                path: '/product-details/' + ui.item.slug,

                            });
                        }

                        var label = ui.item.label;
                        var value = ui.item.value;
                        // Store the selected value in session storage
                        sessionStorage.setItem('valueSelectedForAutocomplete', value);
                    }
                });
            });
        };
        this.openModal();
    },
    methods:{
        openModal(){
            $(".search_form").click(function(){
                $(".search_form_modal").fadeIn();
            });
            $(".close_search_modal").click(function(){
                $(".search_form_modal").fadeOut();
            });
        },

    }
}
</script>
