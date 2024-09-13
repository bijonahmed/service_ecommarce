<template>
    <div>
        <div class="page-wrapper">
            <div class="page-content py-3">
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
                        <div class="col-md-6">
                            <h1>Add Blog Category</h1>
                            <form @submit.prevent="addCat()" id="addCat" method="post" enctype="multipart/form-data">
                                <input type="text" :value="user.id" hidden>
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
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div class="col-md-6">
                            <h2>Category List</h2>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Category Name</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Loop through your categories and generate table rows -->
                                    <tr v-for="(category, index) in categories" :key="index">
                                        <th scope="row">{{ index + 1 }}</th>
                                        <td>{{ category.name }}</td>
                                        <td>
                                            <span v-if="category.status==1" class="badge bg-success">Active</span>
                                            <span v-else class="badge bg-danger">Inactive</span>
                                        </td>
                                        <td>
                                            <!-- Add edit button here -->
                                            <button class="btn btn-primary"
                                                @click="editpage(category.slug)">Edit</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
                categories: [
                    { name: 'Category 1' },
                    { name: 'Category 2' },
                    { name: 'Category 3' },
                ],

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
                },
                categories: [],

            }
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
            title: 'Blog Category',
        },
        async mounted() {
            this.getblogCat();
            await this.loadCKEditor();
            CKEDITOR.replace('editor');
        },

        methods: {
            editpage(slug) {
                this.$router.push({
                    path: '/blog/edit-blogCat',
                    query: {
                        slug: slug
                    }
                });
            },
            addCat() {
                const formData = new FormData();
                formData.append('name', this.blog.cat_name);
                formData.append('description', this.blog.cat_desc);
                formData.append('user_id', this.user.id);

                const headers = {
                    'Content-Type': 'multipart/form-data'
                };

                this.$axios.post('/blog/newblogcat', formData, { headers })
                    .then(response => {
                        // Check if the response contains a success message
                        if (response && response.data && response.data.message) {
                            console.log('Success:', response.data.message);
                            Lobibox.notify('success', {
                                pauseDelayOnHover: true,
                                continueDelayOnInactiveTab: false,
                                position: 'top right',
                                icon: 'bx bx-check-circle',
                                msg: 'Your data has been successfully inserted.'
                            });
                            document.getElementById('addCatForm').reset();
                        } else {
                            console.log('Success: Resource created successfully'); // Default success message
                            Lobibox.notify('success', {
                                pauseDelayOnHover: true,
                                continueDelayOnInactiveTab: false,
                                position: 'top right',
                                icon: 'bx bx-check-circle',
                                msg: 'Your data has been successfully inserted.'
                            });
                            document.getElementById('addCatForm').reset();
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
                        script.src = 'https://cdn.ckeditor.com/4.17.1/standard/ckeditor.js';
                        script.async = true;
                        script.onload = resolve;
                        document.head.appendChild(script);
                    } else {
                        resolve();
                    }
                });
            },
            getblogCat() {
                this.$axios.get('/blog/blogcatlist')
                    .then(response => {
                        this.categories = response.data.data;
                        // console.log(response.data);
                    });
            }
        }
    }

</script>

<style scoped>
    /* Scoped styles for this component */
</style>