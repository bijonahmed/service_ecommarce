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
                <div class="conatiner">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <table class="table table-wrap">
                                        <thead>
                                            <tr>
                                                <th>sl</th>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>image</th>
                                                <th>status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <!-- {{ blogs }} -->
                                            <tr v-for="(blog, index) in blogs" :key="blog.id">
                                                <td>#{{ index + 1 }}</td>
                                                <td>{{ blog.title }}</td>
                                                <td>{{ blog.description }}</td>
                                                <td>
                                                    <img :src="blog.image" alt="Blog Image" style="max-width: 100px;">
                                                </td>
                                                <td>{{ blog.status }}</td>
                                                <td>
                                                    <button @click="editBlog(blog.slug)" class="btn btn-primary">Edit</button>
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
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
export default {
    data() {
        return {
            blogs: [],
        };
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
        title: 'Blog List',
    },
    async mounted() {
        this.getblogData();
    },

    methods: {
        getblogData() {
            this.$axios.get('blog/bloglist')
                .then(response => {
                    this.blogs = response.data.data;
                    // console.log(response.data);
                })
        },
        editBlog(slug){
            console.log(slug);
        }

    }
}

</script>

<style scoped>
/* Scoped styles for this component */
.thumbnail {
    height: 80px;
    width: 80px;
    object-fit: cover;
    /* 1300x650 */
}
</style>