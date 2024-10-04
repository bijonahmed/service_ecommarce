<template>
  <div ref="chartContainer" style="width: 100%; height: 400px;"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import axios from 'axios';

// Initialize HighchartsMore for 3D support
HighchartsMore(Highcharts);

const chartContainer = ref(null);
let chart = null;
const total_seller = ref(0);
const total_buyer = ref(0);

// Function to fetch data
const fetchData = async () => {
  try {
    const response = await axios.get(`/product/dashboardCounting`);
    total_seller.value = response.data.total_seller;
    total_buyer.value = response.data.total_buyer;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Function to initialize the chart
const initChart = () => {
  chart = Highcharts.chart(chartContainer.value, {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
        depth: 250,
        viewDistance: 25,
      }
    },
    title: {
      text: 'Sellers/Buyers'
    },
    plotOptions: {
      pie: {
        innerSize: '50%', // Makes the pie a donut
        depth: 45,
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'Count',
      data: [
        { name: 'Sellers', y: total_seller.value },
        { name: 'Buyers', y: total_buyer.value }
      ]
    }]
  });
};

// Watch for changes in total_seller and total_buyer to update the chart dynamically
watch([total_seller, total_buyer], ([newSeller, newBuyer]) => {
  if (chart) {
    chart.series[0].setData([
      { name: 'Sellers', y: newSeller },
      { name: 'Buyers', y: newBuyer }
    ]);
  }
});

// Initialize the chart when the component is mounted
if (process.client) {
  onMounted(() => {
    fetchData();
    initChart();
  });

  // Cleanup the chart when the component is unmounted
  onBeforeUnmount(() => {
    if (chart) {
      chart.destroy();
    }
  });
}
</script>
<style scoped>
#chartContainer {
  width: 100%;
  height: 400px;
  /* Set a height for the chart */
}
</style>