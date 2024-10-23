<template>
    <title>MY GIG LIST</title>

    <body class="bgc-thm1">
        <div class="wrapper ovh">
            <Header />
            <MobileMenu />
            <div class="body_content">
                <!-- Breadcumb Sections -->

                <section class="breadcumb-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-lg-10">
                                <div class="breadcumb-style1 mb10-xs">
                                    <div class="breadcumb-list">
                                        <nuxt-link to="/dashboard/welcome">Dashboard</nuxt-link>
                                        <a href="#">My GIG</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-lg-2">
                                <div class="d-flex align-items-center justify-content-sm-end">
                                    <div class="share-save-widget d-flex align-items-center">
                                        <div class="h6 mb-0"><nuxt-link to="/dashboard/welcome">Back</nuxt-link></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Start Profile -->
                <div class="container">
                    <div class="px30 pt30 mb30 bg-white bdrs12 wow fadeInUp default-box-shadow1 bdr1"
                        style="visibility: visible; animation-name: fadeInUp;">

                        <div class="row">
                            <div class="col-md-6">
                                <h4 class="mb-30">My GIG List</h4>
                            </div>
                            <div class="col-md-6 text-end" style="margin-bottom: 20px;">
                                <nuxt-link to="/dashboard/mygig/creategig" class="btn btn-primary text-white">Create
                                    Gig</nuxt-link>
                            </div>
                            <div class="col-sm-6 col-xl-3" v-for="gig in gigData" :key="gig.id">
                                <div class="listing-style1">
                                    <div class="list-thumb">
                                        <!-- Delete -->
                                        <img class="w-100" :src="gig.thumbnail_images" alt="">
                                        <a href="#" class="listing-fav fz12" @click="deleteGig(gig.id)"><i
                                                class="fa-solid fa-trash"></i></a>
                                        <!-- Share  -->
                                        <nuxt-link href="#" @click="shareUrl(gig.gig_slug)" class="listing-fav fz12"
                                            style="left: 20px;"><i class="fa-solid fa-share"></i></nuxt-link>
                                        <!-- Edit  -->
                                        <nuxt-link :to="`/dashboard/editgig/${gig.gig_slug}`" class="listing-fav fz12 "
                                            style="top: 65px;"><i class="fa-solid fa-pen"></i></nuxt-link>
                                    </div>

                                    <!-- <div align="right">
                                        <nuxt-link :to="`/dashboard/editgig/${gig.gig_slug}`">
                                        <button type="button" class="btn btn-primary text-white"><i class="fa-solid fa-pen"></i>&nbsp;Edit</button>
                                    </nuxt-link></div> -->
                                    <div class="list-content">
                                        <p class="list-text body-color fz14 mb-1">{{ gig.category_name }}</p>
                                        <h6 class="list-title"> <nuxt-link :to="`/dashboard/editgig/${gig.gig_slug}`">
                                                {{ gig.name }}</nuxt-link></h6>
                                        <hr class="my-2">
                                        <div class="list-meta mt15 d-flex justify-content-between align-items-center">
                                            <div class="budget">
                                                <p class="mb-0 body-color">Starting at<span
                                                        class="fz17 fw500 dark-color ms-1">${{ gig.price }}</span></p>
                                            </div>
                                            <div>
                                                <span v-if="gig.status == 1">
                                                    <nuxt-link :to="`/gigs/${gig.gig_slug}`"><span
                                                            class="badge bg-primary rounded-pill p-2">Preview</span></nuxt-link>
                                                </span>
                                                <span v-else>
                                                    <span class="badge bg-danger rounded-pill">Not Publish</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- END Profile -->
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


const errors = ref({});
const gigData = ref([]);


const shareUrl = (slug) => {
    const currentUrl = window.location.origin; // Get the base URL (e.g., https://example.com)
    const fullUrl = `${currentUrl}/gigs/${slug}`; // Construct the full URL with slug

    navigator.clipboard.writeText(fullUrl)
        .then(() => {

            Swal.fire(
                'Copied!',
                'Your gig URL has been copied.',
                'success'
            );



            //alert('URL copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy URL: ', err);
        });
};

const deleteGig = async (id) => {
    // Show confirmation dialog
    const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    });

    // Check if the user confirmed
    if (result.isConfirmed) {
        try {
            const response = await axios.get('/gig/deleteGig', {
                params: { id: id }
            });

            // Call gigList function after successful deletion
            if (response.status === 200) {
                Swal.fire(
                    'Deleted!',
                    'Your gig has been deleted.',
                    'success'
                );
                gigList(); // Refresh the gig list
            }
        } catch (error) {
            console.log(error);
            Swal.fire(
                'Error!',
                'There was an error deleting your gig.',
                'error'
            );
        }
    }
};


const getCatList = async () => {
    try {
        const response = await axios.get(`/unauthenticate/getFindCategorys`);
        categoryData.value = response.data;
    } catch (error) {
        console.log(error);
    }
};


const gigList = async () => {
    try {
        loading.value = true;
        const response = await axios.get(`/gig/getGigHistory`);
        gigData.value = response.data.data;
    } catch (error) {
        // Handle error
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    // getCatList();
    gigList();


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