<template>
    <title>Fitler</title>
    <div>

        <div class="container">

            <nav class="main-header navbar navbar-expand-md navbar-light navbar-white fixed-top">
                <div class="container">
                    <button class="navbar-toggler order-1" type="button" data-toggle="collapse"
                        data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse order-3" id="navbarCollapse">

                        <ul class="navbar-nav">
                            <nuxt-link to="/games" class="nav-link">Home</nuxt-link>
                        </ul>

                    </div>

                </div>
            </nav>
        </div>

        <br /> <br /> <br />

        <div class="container">

            <!-- <button @click="makeDeposit">MakeDeposit</button>  -->
            <center>
                <div class="loading-indicator" v-if="loading" style="text-align: center">
                    <Loader />
                </div>
            </center>

            <section class="content">
                <div class="container-fluid">
                    <!-- Start  -->
                    <div class="row">
                        <div class="col-12 col-sm-12">
                            <div class="card card-primary card-tabs">
                                <div class="card-header p-0 pt-1">
                                    <ul class="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="custom-tabs-one-home-tab" data-toggle="pill"
                                                href="#custom-tabs-one-home" role="tab"
                                                aria-controls="custom-tabs-one-home" aria-selected="true">Home</a>
                                        </li>

                                        <li class="nav-item" @click="getGameList">
                                            <a class="nav-link" id="custom-tabs-two-home-tab" data-toggle="pill"
                                                href="#custom-tabs-two-home" role="tab"
                                                aria-controls="custom-tabs-one-home" aria-selected="true">Make Game
                                                List</a>
                                        </li>

                                    </ul>

                                </div>
                                <div class="card-body">
                                    <div class="tab-content" id="custom-tabs-one-tabContent">
                                        <div class="tab-pane fade show active" id="custom-tabs-one-home" role="tabpanel"
                                            aria-labelledby="custom-tabs-one-home-tab">
                                            <div class="row">

                                                <form @submit.prevent="applyFilters">
                                                    <!-- Game Type Dropdown -->
                                                    <label for="game_type">Game Type:</label>
                                                    <select v-model="filters.game_type" id="game_type" @change="applyFilters">
                                                        <option value="1">Live</option>
                                                        <option value="2">Fishing</option>
                                                        <option value="3">Electronic</option>
                                                        <option value="4">Lottery</option>
                                                        <option value="5">Sports</option>
                                                        <option value="6">Chess</option>
                                                        <option value="7">E-sports</option>
                                                    </select>


                                                    <!-- Name Filter -->
                                                    <label for="name">Name:</label>
                                                    <input type="text" v-model="filters.name" id="name"
                                                        placeholder="Enter game name">

                                                    <!-- Code Filter -->
                                                    <label for="code">Code:</label>
                                                    <input type="text" v-model="filters.code" id="code"
                                                        placeholder="Enter code">

                                                    <!-- Game Code Filter -->
                                                    <label for="game_code">Game Code:</label>
                                                    <input type="text" v-model="filters.game_code" id="game_code"
                                                        placeholder="Enter game code">

                                                    <!-- Submit Button -->
                                                    <button type="submit">Apply Filters</button>
                                                </form>
                                                <hr />
                                                <!-- Start -->
                                                <!-- ===={{ filterData }}=== -->
                                                <div v-for="(chunk, index) in filterData" :key="index" class="row mb-3">
                                                    <!-- Loop through each item in the chunk -->
                                                    <div v-for="item in chunk" :key="item.id"
                                                        class="col-md-2 img img-thumbnail" @click="playGames(item)">
                                                        <div class="card">
                                                            <img :src="item.img" class="card-img-top" :alt="item.name"
                                                                style="height:220px;">
                                                            <div class="card-body">
                                                                <!-- <h5 class="card-title">{{ item.name }}</h5> -->
                                                                <!-- <p class="card-text">Code: {{ item.code }}</p> -->
                                                                <p class="card-text"><small>Game Code: {{ item.game_code
                                                                        }}</small></p>
                                                                <!-- <p class="card-text">Game Type: {{ item.game_type }}</p> -->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- END -->

                                            </div>
                                            <hr>

                                        </div>

                                        <div class="tab-pane fade" id="custom-tabs-two-home" role="tabpanel"
                                            aria-labelledby="custom-tabs-one-home-tab">
                                            <br />
                                            <form @submit.prevent="saveData()" id="formrest" class="forms-sample"
                                                enctype="multipart/form-data">
                                                <select class="form-control" v-model="insertdata.game_category_id">
                                                    <option value="" selected>Select</option>
                                                    <option v-for="data in categoryList.data" :value="data.id"
                                                        :key="data.id">
                                                        {{ data.name }}
                                                    </option>
                                                </select>
                                                <br />
                                                <button type="submit" class="btn btn-success px-5 w-100"><i
                                                        class="bx bx-check-circle mr-1"></i> Submit</button>

                                            </form>

                                            <hr>

                                            <div v-for="(group, code) in groupedData" :key="code" class="mb-4">
                                                <h3>{{ code }} ({{ group.count }} items)</h3>
                                                <table class="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>ID</th>
                                                            <th class="text-left">Name</th>
                                                            <th>Game Code</th>
                                                            <th>Game Type</th>
                                                            <th>Image</th>
                                                            <th>Slug</th>
                                                            <th>Status</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="game in group.games" :key="game.id">
                                                            <td>{{ game.id }}</td>
                                                            <td class="text-left">{{ game.name }}</td>
                                                            <td>{{ game.game_code }}</td>
                                                            <td>{{ game.game_type }}</td>
                                                            <td>
                                                                <img :src="game.img" alt="Game Image" width="100">
                                                            </td>
                                                            <td>{{ game.slug }}</td>
                                                            <td> {{ game.status === 1 ? 'Active' : 'Inactive' }}</td>

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

                    <!-- END -->

                </div>
            </section>
        </div>
    </div>
</template>
<script setup>
import { ref, watch, onMounted } from "vue";
import axios from "axios";
definePageMeta({
    middleware: "is-logged-in",
    title: "Profile", // Set your desired page title here
});
const errors = ref({});
const router = useRouter();
const loading = ref(false);
const total_records = ref(0);
const filterData = ref([]);
const groupedData = ref([]);
const categoryList = ref([]);

const insertdata = reactive({
    id: '',
    game_category_id: '',
    status: 1,
});
// Define reactive filters object
const filters = ref({
    game_type: 3, // Default to game_type = 3
    name: '',
    code: '',
    game_code: ''
});

const playGames = async (game) => {

    if (!game || !game.slug) {
        console.error('Game slug is null or undefined');
        return;
    }
    let slug = game.slug;
    router.push({
        path: '/games/play/playgame',
        query: { slug }
    });

}
const saveData = async () => {
    try {
        loading.value = true;
        let gcategoryId = insertdata.game_category_id;
        const url = `/api_gameList?category_id=${gcategoryId}`;
        const response = await axios.get(url);
        getGameList();
        //total_records.value = response.data.total_records;
    } catch (error) {
        // Handle error
    } finally {
        loading.value = false;
    }
};

const getGameList = async () => {
    try {
        loading.value = true;
        const response = await axios.get(`/api_getGames`);
        groupedData.value = response.data.data;
    } catch (error) {
        // Handle error
    } finally {
        loading.value = false;
    }
};

const gamesCategory = async () => {
    try {
        loading.value = true;
        const response = await axios.get(`/api_gameCategory`);
        categoryList.value = response.data;
    } catch (error) {
        // Handle error
    } finally {
        loading.value = false;
    }
};

const makeDeposit = async () => {

    try {
        loading.value = true;
        const response = await axios.post(`/api_makedeposit`);
        console.log("============" + response.data);
        //  window.location.href =response.data;
        //return false; 
        // categoryList.value = response.data;
    } catch (error) {
        // Handle error
    } finally {
        loading.value = false;
    }
}


const applyFilters = async () => {
    try {
        loading.value = true;
        const response = await axios.post(`/applyFiterGames`, {
            game_type: filters.value.game_type,
            name: filters.value.name || null,
            code: filters.value.code || null,
            game_code: filters.value.game_code || null
        });
        console.log('Response data:', response.data);
        filterData.value = response.data;
        // Use the response data as needed, e.g., update a list or display filtered results
    } catch (error) {
        console.error('Error fetching games:', error);
        // Handle error
    } finally {
        loading.value = false;
    }
};



onMounted(() => {
    getGameList();
    gamesCategory();
    applyFilters();

});
</script>

<style scoped>
.table img {
    max-width: 100px;
}
</style>