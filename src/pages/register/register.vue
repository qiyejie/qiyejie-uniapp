<template>
  <view class="register">
    <view class="register-title">
      欢迎注册企业捷
      <image
        class="register-logo"
        src="../../static/logo/logo.png"
        mode="aspectFit"
      ></image>
    </view>
    <view class="register-form">
      <view class="cu-form-group">
        <view class="title">设置邮箱</view>
        <input placeholder="请输入邮箱" name="input" v-model="email" />
      </view>
      <view class="cu-form-group">
        <view class="title">设置密码</view>
        <input
          placeholder="请输入密码"
          name="input"
          password
          v-model="password"
        />
      </view>
      <view class="cu-form-group">
        <view class="title">确认密码</view>
        <input
          placeholder="请再次输入密码"
          name="input"
          password
          v-model="password_second"
        />
      </view>
      <button class="bg-gradual-blue register-form" @click="submit">
        注册
      </button>
    </view>
    <tui-toast ref="toast" position="center"></tui-toast>
  </view>
</template>

<script>
import { userRegister } from '@/api'

export default {
  data: () => ({
    email: '',
    password: '',
    password_second: ''
  }),
  components: {
    
  },
  methods: {
    validate() {
      let options = {
        title: '两次密码输入不一致',
        icon: false
      }
      if (!(this.password === this.password_second)) {
        this.$refs.toast.show(options)
        return false
      } else return true
    },
    submit() {
      if (!this.validate()) return
      const data = {
        email: this.email,
        password: this.password
      }
      userRegister(data).then(res =>
      console.log(res)
              // this.$refs.toast.show({ title: res.data.message, icon: false })
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  padding: 30px;
  text-align: center;
  &-title {
    font-size: 26px;
    display: flex;
  }
  &-logo {
    width: 40px;
    height: 40px;
  }
  &-form {
    margin-top: 30px;
  }
}
</style>
