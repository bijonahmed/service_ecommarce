<template>
    <div>

        <head>
            <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-bs4.min.css" rel="stylesheet">
            <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-bs4.min.js"></script>
        </head>
        <LogoAndPayment />
        <!-- navbar section start here  -->
        <NavbarSecond />
        <!-- Main section start here  -->

        <section class="main_content ">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <userSidebar />
                    </div>
                    <div class="col-md-9 ps-md-0 col-12">
                        <!-- <div class="loading-indicator" v-if="loading">
                            <div class="loader-container">
                                <center class="loader-text">Loading...</center>
                                <img src="/loader/loader.gif" alt="Loader" />
                            </div>
                        </div> -->
                        <div class="main_profile mt-3">
                            <h3>Blog Post</h3>
                            <div class="row">
                                <div class="col-md-6 m-auto">

                                    <form @submit.prevent="addblog()" id="addCat" method="post"
                                        enctype="multipart/form-data">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form_group mb-2">
                                                    <p>Title</p>
                                                    <input type="text" v-model="blog.title" class="form-control"
                                                        id="categoryName" placeholder="Enter category name" required>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form_group mb-2">
                                                    <p>Category</p>
                                                    <select name="" id="" v-model="blog.category" class="form-control">
                                                        <option value="" disabled selected>Select category</option>
                                                        <option v-for="category in categories" :key="category.id"
                                                            :value="category.id">{{ category.name }}</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form_group mb-2">
                                                    <p>Content</p>
                                                    <!-- <textarea name="" v-model="blog.desc" id="" cols="30" rows="4"
                                                        class="form-control"></textarea> -->

                                                    <client-only placeholder="loading...">
                                                        <ckeditor-nuxt v-model="blog.desc" :config="editorConfig"
                                                            class="form-control" />
                                                    </client-only>

                                                </div>
                                            </div>

                                            <div class="col-md-12">
                                                <div class="form_group mb-2">
                                                    <p>Image</p>
                                                    <input type="file" ref="image" @change="onFileChange"
                                                        class="form-control mb-2">
                                                </div>
                                                <img :src="thumbnail" alt="" class="img-fluid thumbnail">
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form_group mb-2">
                                                    <input type="submit" class="form-control mt-3 btn_confirm py-2"
                                                        value="Post">
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <!-- END Main Section here -->
        <!-- back to top button  -->
        <div class="back_top">
            <a href="#top"><i class="fa-solid fa-angle-up"></i></a>
        </div>
        <Footer />
    </div>
</template>

<script>
import $ from "jquery";


import Common_MobileSidebar from '~/components/Common_MobileSidebar.vue';
import Common_MiniTabNavbar from '~/components/Common_MiniTabNavbar.vue';
import Common_MobileSearchProduct from '~/components/Common_MobileSearchProduct.vue';
import userSidebar from '~/components/userSidebar.vue';
import NavbarSecond from "../../components/NavbarSecond.vue";

export default {

    data() {
        return {
            blog: {
                title: '',
                category: '',
                desc: '',
            },
            thumbnail: '/images/default_image.png',
            categories: '',
            editorConfig: {
                removePlugins: ['Title'],
                simpleUpload: {
                    uploadUrl: 'path_to_image_controller',
                    headers: {
                        'Authorization': 'optional_token'
                    }
                }
            },
            loading: false,
        }
    },
    middleware: 'IsUser',
    components: {
        'ckeditor-nuxt': () => {
            if (process.client) {
                return import('@blowstack/ckeditor-nuxt')
            }
        },
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        userSidebar,


    },

    head: {
        title: 'New Blog',
    },

    async mounted() {
        await this.loadCKEditor();
        CKEDITOR.replace('editor');
        this.catList();

        this.setupEventHandlers();
        this.catList();
    },
    methods: {

        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.thumbnail = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },

        catList() {
            this.$axios.get('/blog/blogcatlist')
                .then(response => {
                    this.categories = response.data.data;
                    // console.log(response.data);
                });
        },
        addblog() {
            const formData = new FormData();
            formData.append('title', this.blog.title);
            formData.append('category', this.blog.category);
            formData.append('content', this.blog.desc);
            formData.append('image', this.$refs.image.files[0]);
            // formData.append('user_id', this.user.id);

            // console.log(formData);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/blog/add-newblog',
                formData, {
                headers
            })
                .then(response => {
                    // Lobibox.notify('success', {
                    //     pauseDelayOnHover: true,
                    //     continueDelayOnInactiveTab: false,
                    //     position: 'top right',
                    //     icon: 'bx bx-check-circle',
                    //     msg: "Successfully blog created"
                    // });
                    this.$router.push('/user/user-bloglist');
                })
                .catch(error => {
                    if (error.response && error.response.status === 422) {
                        const validationErrors = error.response.data.errors;
                        console.log('Validation errors:', validationErrors);

                        Object.values(validationErrors).forEach(errors => {
                            errors.forEach(errorMessage => {
                                Lobibox.notify('error', {
                                    pauseDelayOnHover: true,
                                    continueDelayOnInactiveTab: false,
                                    position: 'top right',
                                    icon: 'bx bx-check-circle',
                                    msg: errorMessage
                                });
                            });
                        });
                    } else {
                        console.error('Error adding blog:', error.message);
                    }
                });
        },

        loadCKEditor() {
            return new Promise((resolve) => {
                if (typeof CKEDITOR === 'undefined') {
                    const script = document.createElement('script');
                    script.src = 'https://cdn.ckeditor.com/4.17.1/standard/ckeditor.js';
                    script.async = true;
                    script.onload = resolve;
                    document.head.appendChild(script);
                } else {
                    resolve();
                }
            });
        },

        setupEventHandlers() {
            // Ensure DOM elements exist before executing jQuery functions
            $(".post_mdal_open").click(function () {
                $(".post_mdal_").fadeIn();
                $(".search_bar").css("z-index", "0");
            })
            $(".post_mdal_open").click(function () {
                $(".search_bar").css("z-index", "0");
            })
            $(".bt_close").click(function () {
                $(".post_mdal_").fadeOut();
                $(".search_bar").css("z-index", "4");
            })
        },

    }
}

</script>

<style scoped>
.loading-indicator {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

/* For Loader */
.loader-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
}

.loader-text {
    margin: 0;
    /* Remove default margin */
}

.loader-top {
    top: 0;
}

.loader-bottom {
    bottom: 0;
}

/* Scoped styles for this component */
.thumbnail {
    height: 80px;
    width: 80px;
    object-fit: cover;
    /* 1300x650 */
}
</style>