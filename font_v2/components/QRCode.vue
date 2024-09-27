<template>
    <div>
      <canvas ref="canvas"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, onMounted } from 'vue';
  import QRCode from 'qrcode';
  
  const props = defineProps({
    modelValue: {
      type: String,
      required: true
    }
  });
  
  const canvas = ref(null);
  
  const generateQRCode = (text) => {
    if (canvas.value) {
      QRCode.toCanvas(canvas.value, text, { errorCorrectionLevel: 'H' }, (error) => {
        if (error) console.error(error);
        console.log('QR code generated!');
      });
    }
  };
  
  onMounted(() => {
    generateQRCode(props.modelValue);
  });
  
  watch(() => props.modelValue, (newValue) => {
    generateQRCode(newValue);
  });
  </script>
  
  <style scoped>
  canvas {
    max-width: 100%;
  }
  </style>
  