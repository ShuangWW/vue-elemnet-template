<template>
    <div class="login-container">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
            <h4 class="title">综合管理平台</h4>
            <el-form-item prop="username">
                <el-input v-model="loginForm.username" auto-complete="on" placeholder="账户" />
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="loginForm.password" auto-complete="on" placeholder="密码" />
            </el-form-item>
            <el-form-item>
                <el-button :loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { isvalidUserName } from '@/utils/validate'
export default {
    name: 'Login',
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            loginRules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 1, max: 50, message: '长度在1-50字符之间', trigger: 'blur' },
                    { validator: isvalidUserName, trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 1, max: 8, message: '长度在1-8字符之间', trigger: 'blur' },
                ]
            },
            loading: false,
        }
    },
    methods: {
        handleLogin() {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    this.loading = true
                    this.$store.dispatch('Login', this.loginForm).then(() => {
                        this.loading = false
                        this.$router.push({ name:'Home' })
                    }).catch(() => {
                        this.loading = false
                    })
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #3da7d7;
$light_gray: #eee;
.login-container {
	position: fixed;
	height: 100%;
	width: 100%;
	background-color: $bg;
	.login-form {
		position: absolute;
		width: 480px;
		max-width: 100%;
		padding: 0px 35px 0px 35px;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		.title {
			font-size: 26px;
			color: $light_gray;
			margin: 0px auto 40px auto;
			text-align: center;
		}
	}
}
</style>
