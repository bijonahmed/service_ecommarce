<template>
<div class="referral-link-container">
    <h2 class="heading title_balence">Your Profile Link</h2>
    <div class="input-group">
      <input ref="referralInput" type="text" class="form-control referral-input" :value="referralLink" readonly />
      <button class="btn btn-copy" style="display: flex;
  align-items: center;" type="button" @click="copyToClipboard">
        Copy <i class="bi bi-clipboard"></i>
      </button>
    </div>
    <div v-if="isCopied" class="alert alert-success copied-alert">
      Profile link copied!
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import { useRouter } from 'nuxt/app'
import axios from 'axios'

// Initialize reactive properties
const slug = ref('')
const referralLink = ref('')
const isCopied = ref(false)
const router = useRouter()

// Function to get user data including the invite code
const chkUserrow = async () => {
  try {
    const response = await axios.post(`/auth/me`)
    slug.value = response.data.slug // Set the invite code
  } catch (error) {
    console.error("Error fetching user data:", error)
  }
}

// Update referralLink whenever slug changes
watchEffect(() => {
  const currentDomain = window.location.origin
  referralLink.value = `${currentDomain}${router.resolve({ path: '/public' }).href}?profile=${slug.value}`
})

// Fetch user data on component mount
onMounted(() => {
  chkUserrow()
})

// Function to copy referral link to clipboard
const copyToClipboard = () => {
  const inputElement = document.createElement('input')
  inputElement.value = referralLink.value
  document.body.appendChild(inputElement)
  inputElement.select()
  document.execCommand('copy')
  document.body.removeChild(inputElement)

  isCopied.value = true
  setTimeout(() => {
    isCopied.value = false
  }, 2000)
}
</script>

<style scoped>
/* Container Styling */
.referral-link-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Heading Styling */
.heading {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}

/* Input Group Styling */
.input-group {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
}

/* Referral Input Styling */
.referral-input {
  width: 70%;
  height: 45px;
  font-size: 16px;
  padding: 10px;
  border: 2px solid #e0e0e0;
  border-radius: 5px 0 0 5px;
  transition: border-color 0.3s ease;
}

.referral-input:focus {
  border-color: #007bff;
  outline: none;
}

/* Copy Button Styling */
.btn-copy {
  background-color: #007bff;
  color: #fff;
  height: 45px;
  border: none;
  font-size: 16px;
  padding: 0 15px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-copy:hover {
  background-color: #0056b3;
}

.btn-copy i {
  margin-left: 5px;
}

/* Copied Alert Styling */
.copied-alert {
  margin-top: 20px;
  padding: 15px;
  font-size: 14px;
  border-radius: 5px;
  color: #155724;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  animation: fadeInOut 2s;
}

/* Animation for Alert */
@keyframes fadeInOut {

  0%,
  100% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
}
</style>