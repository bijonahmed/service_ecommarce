<template>
  <div>
    <div class="commission-box">
      <h3>Level Commissions</h3>
      <div class="loading-indicator" v-if="loading" style="text-align: center;">
                                    <Loader />
                                </div>
      <div align="right"><button @click="fetchUserLevels(userEmail)">Show MLM History</button></div>
      <div class="commission-details">
        <p>
          Level 1 Commission: <span>${{ level1TotalCommission }}</span>
        </p>
        <p>
          Level 2 Commission: <span>${{ level2TotalCommission }}</span>
        </p>
        <p>
          Level 3 Commission: <span>${{ level3TotalCommission }}</span>
        </p>
      </div>
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
          <th >Join Date</th>
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
const level_1 = ref([]);
const level_2 = ref([]);
const level_3 = ref([]);

const total = ref(0);

const level_1_count = computed(() => level_1.value.length);
const level_2_count = computed(() => level_2.value.length);
const level_3_count = computed(() => level_3.value.length);


// Define the prop
const props = defineProps({
  userEmail: {
    type: String, // Specify the type (in this case, a String)
    required: true // Make it required if needed
  }
});
// Access the prop directly
// Merging users from all levels into one array
const mergedUsers = computed(() => {
  return [
    ...level_1.value.map((user) => ({ ...user, level: "Level 1" })),
    ...level_2.value.map((user) => ({ ...user, level: "Level 2" })),
    ...level_3.value.map((user) => ({ ...user, level: "Level 3" })),
  ];
});

// Calculate total count of all users
const totalCount = computed(
  () => level_1_count.value + level_2_count.value + level_3_count.value
);



const fetchUserLevels = async (email) => {
  loading.value = true;
  error.value = null;

  try {
    const response = await axios.get("/user/checkmlmHistorys", {
      params: { email },
    });

    const data = response.data;

    // Assigning API response to component data
    level_1.value = data.level_1;
    level_2.value = data.level_2;
    level_3.value = data.level_3;
    level_1_count.value = data.level_1_count;
    level_2_count.value = data.level_2_count;
    level_3_count.value = data.level_3_count;
    total.value = data.total;
  } catch (err) {
    error.value = err.response
      ? err.response.data.error
      : "An error occurred while fetching user data.";
  } finally {
    loading.value = false;
  }
};

const level1TotalCommission = computed(() => {
  return level_1.value.length * (level_1.value[0]?.level_commision || 0);
});

const level2TotalCommission = computed(() => {
  return level_2.value.length * (level_2.value[0]?.level_commision || 0);
});

const level3TotalCommission = computed(() => {
  return level_3.value.length * (level_3.value[0]?.level_commision || 0);
});

onMounted(() => {
  fetchUserLevels();
});
</script>
  
  <style scoped>
.commission-box {
  background-color: #f8f9fa; /* Light gray background */
  border: 1px solid #dee2e6; /* Border color */
  border-radius: 8px; /* Rounded corners */
  padding: 20px; /* Padding inside the box */
  margin: 20px 0; /* Margin above and below the box */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

.commission-details {
  border-top: 1px solid #dee2e6; /* Line separator */
  padding-top: 10px; /* Padding above the details */
}

.commission-details p {
  font-size: 16px; /* Font size for the details */
  margin: 5px 0; /* Margin above and below the paragraph */
}

.commission-details span {
  font-weight: bold; /* Bold text for the commission values */
  color: #007bff; /* Color for the commission values */
}
</style>
  