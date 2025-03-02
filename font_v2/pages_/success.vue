<template>
  <title>Success Payment</title>
    <div class="payment-success-container">
      <div class="payment-success-message">
        <h1>Payment Successful! 🎉</h1>
        <p>Thank you for your payment. Your transaction was successful.</p>
        <router-link to="/dashboard/buyer/welcome" class="go-home-btn">Go To Dashbaord</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      localStorage.setItem("payment_status", "success"); // ✅ Update status
    }
  }
  </script>
  
  <style scoped>
  .payment-success-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #56ccf2, #6e7dff);
  }
  
  .payment-success-message {
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
    color: #2d3436;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
  }
  
  p {
    font-size: 1.2rem;
    color: #636e72;
    margin-bottom: 30px;
    font-family: 'Roboto', sans-serif;
  }
  
  .go-home-btn {
    display: inline-block;
    padding: 12px 25px;
    background-color: #2d3436;
    color: #fff;
    text-decoration: none;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  .go-home-btn:hover {
    background-color: #56ccf2;
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
  