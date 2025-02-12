<template>
    <div>
        <div class="loader-container">
            <center class="loader-text">Loading...</center>
            <div class="loader"></div>
        </div>
    </div>
</template>

<style>
/* Darker background with opacity */
.loading-indicator {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    /* Dark background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    animation: fadeIn 1s ease-out;
}

/* Centered loader container */
.loader-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
}

/* Glowing loader text */
.loader-text {
    margin: 0;
    color: #fff;
    /* White text */
    font-size: 24px;
    font-weight: bold;
    text-shadow: 0 0 10px #fff, 0 0 20px #ff4d4d, 0 0 30px #ff4d4d;
    /* Glowing text effect */
    animation: glow 1.5s infinite alternate;
    /* Glowing effect animation */
}

/* Spinning loader animation */
.loader {
    border: 8px solid #f3f3f3;
    border-top: 8px solid #ff4d4d;
    /* Red color for the spinner */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    /* Spinning animation */
    margin-top: 20px;
}

/* Keyframes for the spinning animation */
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

/* Glowing effect for the text */
@keyframes glow {
    0% {
        text-shadow: 0 0 10px #fff, 0 0 20px #ff4d4d, 0 0 30px #ff4d4d;
    }

    100% {
        text-shadow: 0 0 20px #fff, 0 0 40px #ff4d4d, 0 0 60px #ff4d4d;
    }
}

/* Smooth fade-in effect for the whole loader */
@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>