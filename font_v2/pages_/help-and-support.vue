<template>
    <div>
        <title>Help and Support</title>

        <body class="bgc-thm1">
            <div class="wrapper ovh">
                <Header />
                <MobileMenu />
                <div class="body_content">
                    <!-- Breadcumb Sections -->
                    <section class="breadcumb-section wow fadeInUp">
                    </section>

                    <!-- About Section Area -->
                    <section class="our-faq pb90 pt60">
                        <div class="container mt-5" v-for="(paragraph, index) in content" :key="index">
                            <h1 class="text-center" v-html="paragraph.name"></h1>

                            <hr>
                            <div class="terms-content">
                                <p class="text-justify" style="text-align: justify;" v-html="paragraph.description_full"></p>
                            </div>
                        </div>
                    </section>
                    <!-- Our Agents -->

                    <!-- Our Footer -->
                    <Footer />
                </div>
            </div>
        </body>

    </div>
</template>

<script setup>
import axios from 'axios';
const content = ref([]);
const checkContent = async () => {
    const post_id = 10;
    const category_id = 8;
    try {
        const response = await axios.get('/unauthenticate/checkContent', {
            params: {
                post_id: post_id,
                category_id: category_id
            }
        });
        content.value = response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}



onMounted(() => {
    checkContent();
});
</script>

<style scoped></style>
