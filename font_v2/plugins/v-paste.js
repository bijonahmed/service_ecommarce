// plugins/v-paste.js

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('paste', {
      beforeMount(el, binding) {
        el.addEventListener('paste', (event) => {
          // Prevent the default paste action
          event.preventDefault();
  
          // Get the pasted data
          const clipboardData = event.clipboardData || window.clipboardData;
          const pastedData = clipboardData.getData('Text');
  
          // Call the provided method with the pasted data
          if (binding.value && typeof binding.value === 'function') {
            binding.value(pastedData);
          }
        });
      },
      unmounted(el) {
        el.removeEventListener('paste', this.handlePaste);
      },
    });
  });
  