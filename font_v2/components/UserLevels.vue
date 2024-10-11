<template>
  <div>
    <div class="commission-box">
      <h3>Level Commissions</h3>
      
    </div>


    <h3>All Users (Total Count: {{ totalCount }})</h3>
    <table class="table table-bordered table-striped">
      <thead class="thead-dark">
        <tr>
          <th class="w-10">SL NO</th>
          <th>Level</th>
          <!-- Add a column for user level -->
          <th class="w-20">Name</th>
          <th class="text-center">Commission</th>
          <th>Join Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in mergedUsers" :key="user.id">
          <td>{{ index + 1 }}</td>
          <td>{{ user.level }}</td>
          <!-- Show user level -->
          <td>{{ user.name }}</td>
          <td class="text-center">{{ user.level_commision }}</td>
          <td>{{ new Date(user.created_at).toLocaleDateString() }}</td>
        </tr>
      </tbody>
    </table>
    <p>Total Users: {{ total }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const loading = ref(true);
const error = ref(null);
const levelData = ref([]);


const fetchUserLevels = async () => {
  loading.value = true;
  error.value = null;

  try {
    const response = await axios.get("/user/checkLevelHistorys", {
      params: { email },
    });
    levelData.value = response.data;
  } catch (err) {
    error.value = err.response
      ? err.response.data.error
      : "An error occurred while fetching user data.";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchUserLevels();
});
</script>

<style scoped>
.commission-box {
  background-color: #f8f9fa;
  /* Light gray background */
  border: 1px solid #dee2e6;
  /* Border color */
  border-radius: 8px;
  /* Rounded corners */
  padding: 20px;
  /* Padding inside the box */
  margin: 20px 0;
  /* Margin above and below the box */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  /* Subtle shadow */
}

.commission-details {
  border-top: 1px solid #dee2e6;
  /* Line separator */
  padding-top: 10px;
  /* Padding above the details */
}

.commission-details p {
  font-size: 16px;
  /* Font size for the details */
  margin: 5px 0;
  /* Margin above and below the paragraph */
}

.commission-details span {
  font-weight: bold;
  /* Bold text for the commission values */
  color: #007bff;
  /* Color for the commission values */
}
</style>