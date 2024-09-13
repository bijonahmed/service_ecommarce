<template>
    <div>
        <div class="page-wrapper">
            <div class="page-content">
                <!--breadcrumb-->
                <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div class="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0 p-0">
                                <li class="breadcrumb-item">
                                    <router-link to="/"><a href="javascript:;"><i
                                                class="bx bx-home-alt"></i></a></router-link>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Attributes</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <!-- form container  -->
                <div class="container mt-5 bg-white">
                    <div class="row">
                        <div class="col-md-6 m-auto">
                            <h1>Add Blog Category</h1>
                            <form @submit.prevent="updateCat()" id="addCat" method="post" enctype="multipart/form-data">
                                <div class="mb-3">
                                    <label for="categoryName" class="form-label">Category Name</label>
                                    <input type="text" v-model="blog.cat_name" class="form-control" id="categoryName"
                                        placeholder="Enter category name" required>
                                </div>
                                <div class="mb-3">
                                    <label for="categoryDescription" class="form-label">Category Description</label>
                                    <client-only placeholder="loading...">
                                        <ckeditor-nuxt v-model="blog.cat_desc" :config="editorConfig"
                                            class="form-control" />
                                    </client-only>
                                </div>
                                <div class="mb-3">
                                    <label for="categoryName" class="form-label">Status</label>
                                    <select name="" id="" v-model="blog.status" class="form-control">
                                        <option value="" disabled selected>Select one</option>
                                        <option value="1">Active</option>
                                        <option value="2"  >Inactive</option>
                                    </select>
                                </div>
                                <button type="submit" class="btn btn-primary">Update</button>  
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';
    export default {
        data() {
            return {
                editorConfig: {
                    removePlugins: ['Title'],
                    simpleUpload: {
                        uploadUrl: 'path_to_image_controller',
                        headers: {
                            'Authorization': 'optional_token'
                        }
                    }
                },
                blog: {
                    cat_name: '',
                    cat_desc: '',
                    status: '',
                },
                categories: [],
                user_id: '',

            };
        },
        components: {
            'ckeditor-nuxt': () => {
                if (process.client) {
                    return import('@blowstack/ckeditor-nuxt')
                }
            },
        },
        computed: {

            loggedIn() {
                return this.$store.state.auth.loggedIn;
            },
            user() {
                return this.$store.state.auth.user
            },

        },
        head: {
            title: 'Edit blog Category ',
        },
        async mounted() {
            this.getCatdetails();
            await this.loadCKEditor();
            CKEDITOR.replace('editor');
        },

        methods: {
            getCatdetails(){

                this.$axios.get(`/blog/blogCatdetails/${this.$route.query.slug}`)
                    .then(response => {
                        this.blog.cat_name = response.data.data.name;
                        this.blog.cat_desc = response.data.data.description;
                        this.blog.status = response.data.data.status;
                        this.user_id = response.data.data.user_id;
                        // console.log(response.data.data.name);
                    });
            },
            
            updateCat() {
                const formData = new FormData();
                formData.append('name', this.blog.cat_name);
                formData.append('description', this.blog.cat_desc);
                formData.append('status', this.blog.status);
                formData.append('user_id', this.user_id);
                formData.append('slug', this.$route.query.slug);
                // console.log(formData);

                const headers = {
                    'Content-Type': 'multipart/form-data'
                };

                this.$axios.post('/blog/updateBlogCat', formData, { headers })
                    .then(response => {
                        // Check if the response contains a success message
                        if (response && response.data && response.data.message) {
                            console.log('Success:', response.data.message);
                            Lobibox.notify('success', {
                                pauseDelayOnHover: true,
                                continueDelayOnInactiveTab: false,
                                position: 'top right',
                                icon: 'bx bx-check-circle',
                                msg: 'Your data has been successfully Update.'
                            });
                            this.$router.push('/blog/blog-cat');
                        } else {
                            console.log('Success: Resource created successfully'); // Default success message
                            Lobibox.notify('success', {
                                pauseDelayOnHover: true,
                                continueDelayOnInactiveTab: false,
                                position: 'top right',
                                icon: 'bx bx-check-circle',
                                msg: 'Your data has been successfully Update.'
                            });
                            this.$router.push('/blog/blog-cat');
                        }
                    })
                    .catch(error => {
                        // Handle errors
                        if (error.response && error.response.status === 422) {
                            // Validation errors
                            console.error('Validation errors:', error.response.data.errors);
                        } else {
                            // Other errors
                            console.error('An error occurred:', error.message);
                        }
                    });

            },
            loadCKEditor() {
                return new Promise((resolve) => {
                    if (typeof CKEDITOR === 'undefined') {
                        const script = document.createElement('script');
                        // script.src = 'https://cdn.ckeditor.com/4.17.1/standard/ckeditor.js';
                        script.async = true;
                        script.onload = resolve;
                        document.head.appendChild(script);
                    } else {
                        resolve();
                    }
                });
            }
        }
    }

</script>

<style scoped>
    /* Scoped styles for this component */
</style>