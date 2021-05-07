<template>
  <view class="login">
    <view>
      <image
        class="login-logo"
        src="../../static/logo/logo.png"
        mode="aspectFit"
      ></image>
    </view>
    <view class="login-form">
      <view class="cu-form-group">
        <view class="title">邮箱</view>
        <input placeholder="请输入注册邮箱账号" name="input" v-model="qyj_id" />
      </view>
      <view class="cu-form-group">
        <view class="title">密码</view>
        <input
          placeholder="请输入密码"
          name="input"
          password
          v-model="password"
        />
      </view>
      <button class="bg-gradual-blue login-button" @click="login">登录</button>
      <view class="login-button">
        <span class="left">忘记密码</span>
        |
        <span class="right" @click="toRegister">注册账号</span>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data: () => ({
    qyj_id: '',
    password: ''
  }),
  methods: {
    login() {
      console.log(111, this.qyj_id, this.password)
    },
    toRegister() {
      uni.navigateTo({
        url: '/pages/register/register'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  padding: 30px;
  text-align: center;
  &-logo {
    margin-top: 20px;
    width: 40%;
  }
  &-button {
    margin-top: 30px;
    .left {
      margin-right: 10px;
    }
    .right {
      margin-left: 10px;
    }
  }
}
</style>