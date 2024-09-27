<template>
    <div>

        <div class="row mt-2">
            <div class="col-12">
                <div class="category">
                    <div class="row">
                        <div class="sell_title bg_appliance justify-content-center">
                            <div class="text-center">
                                <h5>Top {{ count }} Offical Store</h5>
                            </div>
                        </div>
                    </div>
                    <div class="row px-2">
                        <div class="col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3" v-for="item in sellers" :key="item.id">
                            <Nuxt-link :to="`/business/${item.slug}`">
                                <div class="cat_div">
                                    <img :src="item.thumnail" class="img-fluid" loading="lazy">
                                </div>
                            </Nuxt-link>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- officaial store part end here  -->

    </div>
</template>

<script>
export default {

    data() {
        return {
            loading: false,
            sellers: [],
            count: '',
        };
    },
    async mounted() {
        await this.fetchDefaultProduct();
    },
    methods: {
        
        async fetchDefaultProduct() {
            this.loading = true;
            await this.$axios.get(`/unauthenticate/allsellers`).then(response => {
                this.sellers = response.data.data;
                this.count = response.data.data_count;
                // console.log(response.data);
            })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });;

        }
    },

}
</script>
