<template>
    <div class="progress-container">
      <div class="progress-wrapper">
        <div class="progress">
          <div class="progress-bar" :style="{ width: progress + '%' }"></div>
        </div>
      </div>
      <div class="countdown">{{ remainingTime }}</div>
      <button v-if="!progressStarted" @click="startProgress">Start</button>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const duration = 2 * 60 * 1000; // 5 minutes in milliseconds
      const startTime = ref(null);
      const progress = ref(0);
      const remainingTime = ref('');
      const progressStarted = ref(false);
  
      const calculateProgress = () => {

        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - startTime.value;

        if (elapsedTime >= duration) {
          progress.value = 100;
          remainingTime.value = '00:00';
        } else {
            
        progress.value = (elapsedTime / duration) * 100;
        remainingTime.value = formatTime(duration - elapsedTime);

        // Log progress and remaining time to console
        console.log('Progress:', progress.value.toFixed(2) + '%');
        console.log('Remaining Time:', remainingTime.value);

        }

       
      };
  
      const formatTime = (time) => {
        const minutes = Math.max(0, Math.floor(time / 60000));
        const seconds = Math.max(0, Math.floor((time % 60000) / 1000));
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      };
  
      const startProgress = () => {
        startTime.value = new Date().getTime();
        localStorage.setItem('startTime', startTime.value);
        calculateProgress();
        setInterval(calculateProgress, 1000);
        progressStarted.value = true;
      };
  
      onMounted(() => {
        const storedStartTime = localStorage.getItem('startTime');
        if (storedStartTime) {
          startTime.value = parseInt(storedStartTime, 10);
          calculateProgress();
          setInterval(calculateProgress, 1000);
          progressStarted.value = true;
        }
      });
  
      return {
        progress,
        remainingTime,
        startProgress,
        progressStarted
      };
    }
  };
  </script>
  
  <style scoped>
  .progress-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
  
  .progress-wrapper {
    width: 300px;
    height: 20px;
    background-color: #f0f0f0;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .progress {
    width: 100%;
    height: 100%;
  }
  
  .progress-bar {
    height: 100%;
    background-color: #007bff;
  }
  
  .countdown {
    font-size: 24px;
    margin-top: 20px;
  }
  
  button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  