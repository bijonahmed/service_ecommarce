<template>
    <div>
        <!--start page wrapper -->
        <div class="page-wrapper">
            <div class="page-content">

                <!--top header banner row-->
                <div class="row">
                    <div class="col-md-8 m-auto">
                        <div class="form_container bg-white p-3">
                            <h5>Update Coupons</h5>
                            <form @submit.prevent="updatecoupon()" id="couponform" class="forms-sample"
                                enctype="multipart/form-data">
                                <div class="form-group mb-2">
                                    <label for="" class="text-dark fs-6">Promo Name <span class="text-danger">*</span>
                                    </label>
                                    <input type="text" name="name" id="" v-model="insertdata.name" class="form-control"
                                        ref="name">
                                    <input type="text" name="id" id="" v-model="insertdata.id"
                                        class="form-control d-none" ref="id">
                                </div>
                                <div class="form-group mb-2">
                                    <label for="" class="text-dark fs-6">Promo Code <span class="text-danger">*</span>
                                    </label>
                                    <input type="text" name="promocode" v-model="insertdata.promocode" id=""
                                        class="form-control" ref="promocode">
                                </div>
                                <div class="form-group mb-2">
                                    <label for="" class="text-dark fs-6">Coupon type <span
                                            class="text-danger">*</span></label>
                                    <select name="code_type" v-model="insertdata.code_type" ref="code_type" id=""
                                        class="form-control">
                                        <option value="percentage">In percentage</option>
                                        <option value="fixed">Fixed Amount</option>
                                    </select>
                                </div>
                                <div class="form-group mb-2">
                                    <label for="" class="text-dark fs-6">Min. Shopping Amount <span
                                            class="text-danger">*</span></label>
                                    <input type="text" v-model="insertdata.min_shopping" name="min_shopping" id=""
                                        class="form-control" ref="min_shopping">
                                </div>
                                <div class="form-group mb-2">
                                    <label for="" class="text-dark fs-6">Discount in percentage(%) <span
                                            class="text-secondary" style="font-size: 12px;">(If coupon type
                                            "Percentage")</span></label>
                                    <input type="text" name="d_percent" v-model="insertdata.d_percent" id=""
                                        class="form-control" ref="d_percent">
                                </div>
                                <div class="form-group mb-2">
                                    <label for="" class="text-dark fs-6">Discount in Fixed amount($) <span
                                            class="text-secondary" style="font-size: 12px;">(If coupon type "Fiexed
                                            Amount")</span></label>
                                    <input type="text" name="d_fvalue" v-model="insertdata.d_fvalue" id=""
                                        class="form-control" ref="d_fvalue">
                                </div>
                                <div class="form-group mb-2">
                                    <label for="" class="text-dark fs-6">Status <span
                                            class="text-danger">*</span></label>
                                    <select name="status" v-model="insertdata.status" ref="status" id=""
                                        class="form-control">
                                        <option value="1">Active</option>
                                        <option value="2">Inactive</option>
                                    </select>
                                </div>
                                <div class="form-group mb-2">
                                    <button type="submit" class="btn-success w-100 py-1 border-0">
                                        <i class="bx bx-check-circle mr-1"></i>Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!--top header banner row-->
            </div>
        </div>
        <!--end page wrapper -->
    </div>
</template>


<script>
export default {
    head: {
        title: 'Update Coupon',
    },
    data() {
        return {
            insertdata: {
                id: '',
                name: '',
                promocode: '',
                code_type: '',
                status: '',
                d_percent: null,
                d_fvalue: null,
            },
            promocode: null,
            status: "1",
            errors: {},
            cid: '',
        };
    },
    created() {
        this.getData();
    },
    methods: {

        updatecoupon() {
            // const formData = new FormData();

            const formData = new FormData();
            const cid = this.insertdata.id
            formData.append('id', this.insertdata.id);
            formData.append('name', this.insertdata.name);
            formData.append('promocode', this.insertdata.promocode);
            formData.append('code_type', this.insertdata.code_type);
            formData.append('min_shopping', this.insertdata.min_shopping);
            formData.append('d_percent', this.insertdata.d_percent);
            formData.append('d_fvalue', this.insertdata.d_fvalue);
            formData.append('status', this.insertdata.status);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/setting/updatecoupon?id=${cid}',
                formData, {
                headers
            })
                .then((res) => {
                    // $('#formrest')[0].reset();
                    // this.success_noti();
                    Lobibox.notify('success', {
                        pauseDelayOnHover: true,
                        continueDelayOnInactiveTab: false,
                        position: 'top right',
                        icon: 'bx bx-check-circle',
                        msg: 'Your Coupon has been successfully Updated.'
                    });
                    this.$router.push('/coupons/all-coupons');

                })
                .catch(error => {
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors;
                        // this.errors = error.response.data.id;
                    }
                });
            // console.log(cid);

        },
        getData() {
            console.log(this.$route.params.id);
            let id = this.$route.params.id;
            this.$axios.get(`/setting/getcoupons/${id}`).then(response => {
                // console.log(response.data.data.id)
                this.insertdata.id = response.data.data.id;
                this.insertdata.name = response.data.data.name;
                this.insertdata.promocode = response.data.data.promocode;
                this.insertdata.code_type = response.data.data.code_type;
                this.insertdata.status = response.data.data.status;
                this.insertdata.d_percent = response.data.data.d_percent;
                this.insertdata.d_fvalue = response.data.data.d_fvalue;
                this.insertdata.min_shopping = response.data.data.min_shopping;
            });

        },


    }
};
</script>