<template>
  <div>
    <title>Play Game</title>
    <div class="container">


      <nav class="main-header navbar navbar-expand-md navbar-light navbar-white fixed-top">
        <div class="container">
          <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse order-3" id="navbarCollapse">

            <ul class="navbar-nav">
              <li class="nav-item">
                <nuxt-link to="/games" class="nav-link">Home</nuxt-link>
              </li>



            </ul>

          </div>

        </div>
      </nav>
    </div>

    <br /> <br /> <br />

    <div class="container">

      <center>
        <div class="loading-indicator" v-if="loading" style="text-align: center">
          <Loader />
        </div>
      </center>


      <section class="content">
        <div class="container-fluid">

          <center><button type="button"><nuxt-link to="/games">Back to Game List</nuxt-link></button></center>
          <!-- Start  -->
          <div class="row">
            <div class="col-12 col-sm-12">
              <div class="card card-primary card-tabs">
                <div class="card-header p-0 pt-1">
                  <ul class="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active" id="custom-tabs-one-home-tab" data-toggle="pill"
                        href="#custom-tabs-one-home" role="tab" aria-controls="custom-tabs-one-home"
                        aria-selected="true">Game</a>
                    </li>

                    <li class="nav-item" @click="getGameList">
                      <a class="nav-link" id="custom-tabs-two-home-tab" data-toggle="pill" href="#custom-tabs-two-home"
                        role="tab" aria-controls="custom-tabs-one-home" aria-selected="true">Make Game
                        List</a>
                    </li>

                  </ul>


                </div>
                <div class="card-body">
                  <div class="tab-content" id="custom-tabs-one-tabContent">
                    <div class="tab-pane fade show active" id="custom-tabs-one-home" role="tabpanel"
                      aria-labelledby="custom-tabs-one-home-tab">
                      <div class="row">

                        <!-- Start -->
                        <iframe v-if="gameUrl" :src="gameUrl" class="game-frame"></iframe>
                        <!-- END -->
                        <button @click="fetchGame">Load Game</button>



                      </div>
                      <hr>

                    </div>

                    <div class="tab-pane fade" id="custom-tabs-two-home" role="tabpanel"
                      aria-labelledby="custom-tabs-one-home-tab">
                      <br />
                      ===


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
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const loading = ref(false);
import axios from 'axios';

const router = useRoute();
const playgames = ref("");
const gameUrl = ref(''); // Reactive variable to store the game URL


const fetchGame = async () => {
  try {
    loading.value = true;
    const gameSlug = router.query.slug;
    // Check if the URL is already cached
    if (cachedGameUrls[gameSlug]) {
      gameUrl.value = cachedGameUrls[gameSlug];
      return;
    }
    // Make API call
    const response = await axios.get('/api_checkgamerow', {
      params: { slug: gameSlug }
    });
    gameUrl.value = response.data.url;
    cachedGameUrls[gameSlug] = response.data.url;
    // Redirect to the URL
    // window.location.href = response.data.url;

  } catch (error) {
    console.error('Error fetching game details:', error);
  } finally {
    loading.value = false;
  }
};
const cachedGameUrls = {};


// const fetchGame = async () => {
//   try {
//     loading.value = true;

//     // Simulate loading delay
//     await new Promise(resolve => setTimeout(resolve, 5000)); // 20 seconds delay
//     const gameSlug = router.query.slug;
//     const response = await axios.get('/api_checkgamerow', {
//       params: {
//         slug: gameSlug,
//       }
//     });

//     gameUrl.value = response.data.url;
//      // Redirect to the URL
//      //window.location.href = response.data.url;

//   } catch (error) {
//     console.error('Error fetching game details:', error);
//   } finally {
//     loading.value = false;
//   }
// };

onMounted(() => {
  fetchGame();
});
</script>

<style>
.game-frame {
  width: 100%;
  height: 500px;
  /* Adjust the height as needed */
  border: none;
}

.loading {
  text-align: center;
  font-size: 18px;
  color: #999;
}
</style>