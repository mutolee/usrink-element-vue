<script setup>
import {ref} from "vue";
import loginUtil from "@/utils/LoginUtil";
import httpUtil from "@/utils/HttpUtil";
import {useRouter} from 'vue-router'

const router = useRouter()

// 登录按钮Loading状态
const loading = ref(false)

// 登录表单
const loginForm = ref({
    userName: '',
    passWord: ''
})

// 登录事件
const submitLogin = () => {
    loading.value = true
    // 模拟登录请求
    // 实际项目应该为POST请求
    httpUtil.get('/data/login.json', {...loginForm.value}).then(async res => {
        // 缓存用户信息
        await loginUtil.cacheUserInfo(res.data.data)
        // 模拟登录耗时操作
        await new Promise(resolve => setTimeout(resolve, 1000))
        router.push('/')
    }).catch(err => {
        // 关闭Loading
        loading.value = false
        console.error(err)
    }).finally(() => {

    })

}
</script>

<template>
    <section class="usr_login">
        <el-form
            :model="loginForm"
            class="el_form_override">
            <h3>
                <el-icon
                    :size="36"
                    color="#409EFF">
                    <ElementPlus/>
                </el-icon>
                UsrInk-Element-Vue
            </h3>
            <el-form-item>
                <el-input
                    v-model="loginForm.userName"
                    placeholder="用户名"
                    size="large"
                    prefix-icon="UserFilled"
                    clearable/>
            </el-form-item>
            <el-form-item>
                <el-input
                    v-model="loginForm.passWord"
                    placeholder="密码"
                    type="password"
                    size="large"
                    prefix-icon="Lock"
                    show-password/>
            </el-form-item>
            <el-form-item>
                <el-button
                    type="primary"
                    :loading="loading"
                    @click="submitLogin"
                    size="large"
                    style="width: 100%">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </section>
</template>

<style scoped>
.usr_login {
    background-color: #2d3a4b;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.el_form_override {
    min-width: 300px;
    padding: 50px;
    background-color: rgb(41, 51, 67);
    border: 1px solid rgb(50, 60, 74);
    border-radius: 5px;
}

.el_form_override h3 {
    font-size: 26px;
    color: #eee;
    margin-bottom: 40px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
}

.el_form_override h3 .el-icon {
    margin-right: 10px;
}
</style>
