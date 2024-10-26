<template>
  <div>
    <title>Welcome to Isumax</title>
    <body>
      <div class="wrapper ovh">
        <!-- <div class="preloader"></div> -->
        <Header />
         <MobileMenu/>
         <Child />
        
         
         <div v-if="node && node.menu">
    <!-- Use 'node.menu' safely here -->
  </div>
  <div v-else>
   
  </div>
      </div>
      <a class="scrollToHome at-home2" href="#"
            ><i class="fas fa-angle-up"></i
          ></a>
    </body>
  </div>
</template>

<script setup>

import Child from '~/components/Child.vue';
const node = ref(null);

// Simulate loading data
// Function to load node data
function loadNodeData() {
  node.value = {
    menu: {} // Example menu data
  };
}

// Watch for changes in 'node'
watch(
  node,
  (newNode) => {
    if (newNode && newNode.menu) {
      console.log('Menu is available:', newNode.menu);
    } else {
      console.warn('Menu is not available');
    }
  }
);

// Load data when component is created
loadNodeData();
</script>