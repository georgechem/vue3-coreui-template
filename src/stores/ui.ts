import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', () => {

    const sidebarVisible = ref<boolean>(false);
    const sidebarUnfoldable = ref<boolean>(false);

    // const doubleCount = computed(() => count.value * 2)

    function toggleSidebar(){
        sidebarVisible.value = !sidebarVisible.value;
    }
    function toggleUnfoldable(){
        sidebarUnfoldable.value = !sidebarUnfoldable.value;
    }
    function updateSidebarVisible(status: boolean){
        sidebarVisible.value = status;
    }

    return {
        sidebarVisible, sidebarUnfoldable,
        toggleSidebar, toggleUnfoldable, updateSidebarVisible
    }
})