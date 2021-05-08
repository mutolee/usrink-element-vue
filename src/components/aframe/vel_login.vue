<template>
    <div class="vel_login">
        <el-form :model="loginForm" size="lager">
            <h3>系统登录</h3>
            <el-form-item>
                <el-input v-model="loginForm.userName"
                          placeholder="登录用户名"
                          prefix-icon="el-icon-user-solid"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="loginForm.userPwd" type="password"
                          placeholder="登录密码"
                          prefix-icon="el-icon-lock"></el-input>
            </el-form-item>
            <el-form-item>
                <div class="vel_login_yzm_item">
                    <el-input v-model="loginForm.yzm"
                              placeholder="验证码">
                    </el-input>
                    <img src="/static/imgs/yzm.png"/>
                </div>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login" :loading="logining" style="width: 100%">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import api from "../../config/api";
import cookie from "../../utils/cookieUtil";
import {GEN_ROUTER, STATUS_CODE, TOKEN, USER_NAME} from "../../config/constant"

export default {
    name: "vel_login",
    data() {
        return {
            logining: false,
            loginForm: {
                userName: 'Yanglinen',
                userPwd: '123456',
                yzm: ''
            }
        }
    },
    methods: {
        login() {
            this.logining = true;
            let that = this;
            api.userLogin(this.loginForm).then((res) => {
                if (res.statusCode === STATUS_CODE.SUCCESS) {
                    that.setUserCookie(res)
                    setTimeout(() => {
                        that.$router.push(GEN_ROUTER)
                    }, 500)
                }
            })
        },
        setUserCookie(res) {
            cookie.set(USER_NAME, res.data.userName, 1);
            cookie.set(TOKEN, res.data.token, 1);
        }
    }
}
</script>

<style scoped>

.vel_login {
    min-height: 100%;
    background-color: #2d3a4b;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.vel_login h3 {
    font-size: 26px;
    color: #eee;
    margin: 0 auto 40px auto;
    text-align: center;
    font-weight: 700;
}

.vel_login .el-form {
    min-width: 300px;
    margin-top: -150px;
}

.vel_login .el-form {
    padding: 50px;
    background-color: rgb(41, 51, 67);
    border: 1px solid rgb(50, 60, 74);
    border-radius: 5px;
}

.vel_login_yzm_item {
    display: flex;
    align-items: center;
}

.vel_login_yzm_item img {
    width: 100px;
    height: 40px;
    margin-left: 10px;
    border-radius: 4px;
}

</style>

