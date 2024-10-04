<template>
  <div ref="chartContainer" style="width: 100%; height: 400px;"></div>
</template>

<script setup>
import Highcharts from 'highcharts';

// Create a ref for the chart container
const chartContainer = ref(null);
let chart;

if (process.client) {
  onMounted(() => {
    // Create the attendance chart
    chart = Highcharts.chart(chartContainer.value, {
      chart: {
        type: 'column' // Set the chart type to column
      },
      title: {
        text: 'Last 7 Days'
      },
      xAxis: {
        categories: [
          'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' // Example days of the week
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Last 7 Days Join Members.'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><br/>',
        pointFormat: '<span style="color:{series.color}">{series.name}: </span>' +
          '<b>{point.y}</b><br/>'
      },
      series: [{
        name: 'Register',
        data: [10, 8, 6, 4, 3, 2, 1] // Example attendance data
      }]
    });
  });

  // Cleanup the chart on component unmount
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
  height: 400px; /* Set a height for the chart */
}
</style>
