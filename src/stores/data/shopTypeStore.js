import {defineStore} from "pinia/dist/pinia";
import {ref} from "vue";

export const useShopTypeStore = defineStore('shopTypeStore', () => {

    /**
     * 商品分类缓存<br>
     *
     * 数据结构：<br>
     * ```
     * [
     *     {
     *         "id": 1,
     *         "parent": true,
     *         "name": "笔记本",
     *         "icon": "http://xxx.png",
     *         "sort": 1,
     *         "status": -1
     *     }
     * ]
     * ```
     */
    const shopTypeCache = ref([])


    return {shopTypeCache}
})