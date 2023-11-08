import {defineStore} from "pinia/dist/pinia";
import {ref} from "vue";

export const useCollapseStateStore = defineStore('collapseStateStore', () => {

    // 页面菜单部分折叠状态
    const collapseState = ref(false)

    // 设置菜单部分折叠状态
    const setCollapseState = val => collapseState.value = val

    return {collapseState, setCollapseState}
})