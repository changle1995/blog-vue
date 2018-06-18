<template>
  <div @keyup.enter="login">
    <el-form :model="loginForm"
             status-icon
             class="login-form">
      <h1 class="login-title">博客登录</h1>
      <p class="login-error">{{ error }}</p>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" :autofocus="true" placeholder="请输入账号">
          <template slot="prepend"><i class="el-icon-mobile-phone"></i></template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="请输入密码">
          <template slot="prepend"><i class="el-icon-info"></i></template>
        </el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="login">登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        error: '',
        loginForm: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        this.$store.dispatch('login', {username: this.loginForm.username, password: this.loginForm.password, router: this.$router})
          .then(() => {
            this.$router.push({path: '/home'})
          }, () => {
            this.error = '账号或密码错误'
            this.loginForm.username = ''
            this.loginForm.password = ''
          })
      }
    }
  }
</script>

<style scoped>
  .login-title {
    text-align: center;
    color: indigo;
  }

  .login-error {
    text-align: center;
    color: red;
  }

  .login-form {
    width: 400px;
    margin: 13% auto 0;
  }
</style>
