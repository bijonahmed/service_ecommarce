<template>
  <div ref="editorContainer" class="editorContainer"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// Define props and emits
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});
const emit = defineEmits(['update:modelValue']);

const editorContainer = ref(null);
let editorInstance = null;

// Watch for changes in the modelValue prop to set the editor content
watch(() => props.modelValue, (newValue) => {
  if (editorInstance && editorInstance.getData() !== newValue) {
    editorInstance.setData(newValue);
  }
});

onMounted(async () => {
  try {
    editorInstance = await ClassicEditor.create(editorContainer.value, {
      toolbar: [
        'heading', '|',
        'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|',
        'undo', 'redo'
      ],
    });

    // Set initial content from the prop
    editorInstance.setData(props.modelValue);

    // Listen for changes in the editor
    editorInstance.model.document.on('change:data', () => {
      const data = editorInstance.getData();
      if (data !== props.modelValue) { // Emit only if the data is different
        emit('update:modelValue', data); // Emit the updated data
      }
    });
  } catch (error) {
    console.error('Error initializing the editor:', error);
  }
});

onBeforeUnmount(() => {
  if (editorInstance) {
    editorInstance.destroy().catch(err => {
      console.error('Error during editor destruction:', err);
    });
    editorInstance = null; // Clear the reference
  }
});
</script>

<style scoped>
.editorContainer {
  border: 1px solid #ccc;
  min-height: 300px; /* Adjust as necessary */
}
</style>
