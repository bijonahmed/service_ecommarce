<template>
  <div ref="editorContainer"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps, defineEmits, watch } from 'vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const props = defineProps(['modelValue']);
const emits = defineEmits(['update:modelValue']);

const editorContainer = ref(null);
let editorInstance = null;

onMounted(() => {
  ClassicEditor
    .create(editorContainer.value)
    .then(instance => {
      editorInstance = instance;

      // Set initial content
      if (props.modelValue) {
        editorInstance.setData(props.modelValue);
      }

      // Listen for changes in the editor
      editorInstance.model.document.on('change:data', () => {
        emits('update:modelValue', editorInstance.getData());
      });
    })
    .catch(error => {
      console.error('There was a problem initializing the editor.', error);
    });
});

onBeforeUnmount(() => {
  if (editorInstance) {
    editorInstance.destroy()
      .then(() => {
        editorInstance = null; // Clear the reference
      })
      .catch(error => {
        console.error('Error during editor destruction:', error);
      });
  }
});

// Watch for prop changes to update the editor content
watch(() => props.modelValue, (newValue) => {
  if (newValue && editorInstance) {
    editorInstance.setData(newValue);
  }
});
</script>
