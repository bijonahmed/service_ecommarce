<template>
    <div>
        <div class="row">
                    <div class="col-12">
                        <div class="deal_foryou">
                            <div class="row mb-2">
                                <div class="col-12 m-auto">
                                    <div class="sell_title justify-content-center ">
                                        <h5>Deals For You</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="row" v-for="(item, index) in banner" :key="index">
                                <div class="col-6">
                                    <a >
                                        <img :src="item.imageOne" class="img-fluid" alt="">
                                    </a>
                                </div>
                                <div class="col-6">
                                    <a >
                                        <img :src="item.imageTwo" class="img-fluid" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            banner: [],
        }
    },
    mounted() {
        this.alldealsads();
    },
    methods: {
        async alldealsads() {
            this.loading = true;
            try {
                const response = await this.$axios.get(`/unauthenticate/alldealsads`);
                this.banner = response.data;
                // console.log(response.data);

            } catch (error) {
                // Handle error
            } finally {
                this.loading = false; // Hide loader after response
            }
        },
    },
};
</script>