<template>
    <div>
        <LogoAndPayment />
        <!-- navbar section start here  -->
        <NavbarSecond />
        <!-- Main section start here  -->

        <section class="container">
            <div class="main_profile">
                <div class="row">
                    <div class="col-md-12">
                        <div class="page_title">
                            <h4>All Brands</h4>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <!-- {{ brands }} -->
                        <div class="brandContainer">
                            <a v-for="(brand, index) in brands" :key="index" @click="redirectbrandlist(brand.slug)"
                                class="brandBox">
                                <!-- <img :src="`/images/brands/brand(${brand.id}).webp`" :alt="brand.name" class="img-fluid"> -->
                                <img :src="brand.image" :alt="brand.name" class="img-fluid">
                                <p>{{ brand.name }}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- back to top button  -->
        <div class="back_top">
            <a href="#top"><i class="fa-solid fa-angle-up"></i></a>
        </div>
        <Footer />
    </div>
</template>

<script>
import $ from 'jquery';
import NavbarSecond from '~/components/NavbarSecond.vue';



export default {
    components: {
        NavbarSecond

    },
    data() {
        return {
            brands: [],
        }
    },
    head: {
        title: 'All Brands',
    },
    mounted() {
        this.dataload();
    },
    methods: {
        redirectbrandlist(slug) {
            this.$router.push({
                path: '/brand-product/brand-grid',
                query: {
                    slug: slug
                }
            })
        },
        async dataload() {
            this.loading = true;
            try {
                const response = await this.$axios.get(`/unauthenticate/allbrandsList`);
                this.brands = response.data;
                // console.log(response.data);

            } catch (error) {
                // Handle error
            }

        },
    },
}
</script>

<style></style>