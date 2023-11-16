import {defineStore} from "pinia/dist/pinia";
import {ref} from "vue";

export const useDocumentWHStore = defineStore('documentWHStore', () => {

    // 浏览器宽高信息
    const wh = ref({w: 0, h: 0})

    return {wh}
})