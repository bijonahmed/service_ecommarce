<template>
    <div>
        <div class="top_bannar desktop_view">
            <div class="container">
                <div class="col-12">
                    <img :src="bannerData" loading="lazy" class="img-fluid" alt="">
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            errors: {},
            bannerData: '',
        };
    },
    mounted() {
        this.fetchBannerData();
    },
    methods: {
        fetchBannerData() {

            this.$axios.get('/unauthenticate/headerbanner').then(response => {
                this.bannerData = response.data.image;
                // console.log(response.data);
            }).catch(error => {
                this.error = error.message;
                console.error('Error fetching Top header banner data:', error);
            });

        },
    }
};
</script>