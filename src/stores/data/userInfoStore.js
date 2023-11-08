import {defineStore} from "pinia/dist/pinia";
import {ref} from "vue";

export const useUserInfoStore = defineStore('userInfoStore', () => {

    // 用户信息
    const userInfo = ref({})

    // 设置用户信息
    const setUserInfo = val => userInfo.value = val

    return {userInfo, setUserInfo}
})