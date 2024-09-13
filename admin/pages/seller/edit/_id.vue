<template>
    <div>
        <!--start page wrapper -->
        <div class="page-wrapper">
            <div class="page-content">

                <!--top header banner row-->
                <div class="row">
                    <div class="col-md-8 m-auto">
                        <div class="form_container bg-white p-3">
                            <h5>Update Seller</h5>
                            <form @submit.prevent="updatecoupon()" id="couponform" class="forms-sample"
                                enctype="multipart/form-data">
                                <div class="form-group mb-2">
                                    <label for="" class="text-dark fs-6">Business Name <span class="text-danger">*</span>
                                    </label>
                                    <input type="text" name="name" id="" v-model="insertdata.business_name" class="form-control"
                                        ref="name">
                                    <input type="text" name="id" id="" v-model="insertdata.id"
                                        class="form-control d-none" ref="id">
                                </div>
                                
                                <div class="form-group mb-2">
                                    <label for="" class="text-dark fs-6">Status <span
                                            class="text-danger">*</span></label>
                                    <select name="status" v-model="insertdata.status" id=""
                                        class="form-control">
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>
                                <div class="form-group mb-2">
                                    <label for="" class="text-dark fs-6">Top Stores Status <span
                                            class="text-danger">*</span></label>
                                    <select name="status" v-model="insertdata.home_status" id=""
                                        class="form-control">
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
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
        title: 'Update Seller',
    },
    data() {
        return {
            insertdata: {
                id: '',
                business_name: '',
                status: '',
                home_status: '',
            },
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
            const id = this.insertdata.id
            formData.append('id', this.insertdata.id);
            formData.append('business_name', this.insertdata.business_name);
            formData.append('status', this.insertdata.status);
            formData.append('home_status', this.insertdata.home_status);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/setting/updateSeller?id=${id}',
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
                this.$router.push('/seller/allseller');

            })
            .catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                    // this.errors = error.response.data.id;
                }
            });
            // console.log(formData);

        },
        getData() {
            console.log(this.$route.params.id);
            let id = this.$route.params.id;
            this.$axios.get(`/setting/editseller/${id}`).then(response => {
                // console.log(response.data.data.business_name)
                this.insertdata.id = response.data.data.id;
                this.insertdata.business_name = response.data.data.business_name;
                this.insertdata.status = response.data.data.status;
                this.insertdata.home_status = response.data.data.home_status;
            });

        },


    }
};
</script>