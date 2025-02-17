<template>
    <div class="payment-failed-container">
      <div class="payment-failed-message">
        <h1>Payment Failed ❌</h1>
        <p>Your payment could not be completed or was canceled.</p>
        <router-link to="/" class="retry-btn">Try Again</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      localStorage.setItem("payment_status", "failed"); // ✅ Update status
    }
  }
  </script>
  
  <style scoped>
  .payment-failed-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #ff7675, #d63031);
  }
  
  .payment-failed-message {
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    padding: 40px 50px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
    transform: scale(0.98);
    animation: fadeIn 1s ease-in-out;
  }
  
  h1 {
    font-size: 2.5rem;
    color: #e74c3c;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
  }
  
  p {
    font-size: 1.2rem;
    color: #636e72;
    margin-bottom: 30px;
    font-family: 'Roboto', sans-serif;
  }
  
  .retry-btn {
    display: inline-block;
    padding: 12px 25px;
    background-color: #e74c3c;
    color: #fff;
    text-decoration: none;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  .retry-btn:hover {
    background-color: #ff6b6b;
    transform: translateY(-5px);
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  </style>
  