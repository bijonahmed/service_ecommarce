// src/compositions/useSidebarToggle.js

import { ref } from 'vue';

export default function useSidebarToggle() {
    const isSidebarOpen = ref(false);

    function toggleSidebar() {
        isSidebarOpen.value = !isSidebarOpen.value;
    }

    return {
        isSidebarOpen,
        toggleSidebar
    };
}
