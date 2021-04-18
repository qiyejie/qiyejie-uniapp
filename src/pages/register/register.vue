<template>
  <div class="register">
    <div class="register-title">
      欢迎注册企业捷
      <image
        class="register-logo"
        src="../../static/logo/logo.png"
        mode="aspectFit"
      ></image>
    </div>
    <view class="register-form">
      <view class="cu-form-group">
        <view class="title">企业捷ID</view>
        <input placeholder="请输入企业捷ID" name="input" v-model="qyj_id" />
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
    <tui-tips ref="toast" position="center"></tui-tips>
  </div>
</template>

<script>
import tuiTips from 'thorui-uni/lib/thorui/tui-tips/tui-tips'

export default {
  data: () => ({
    qyj_id: '',
    password: '',
    password_second: ''
  }),
  components: {
    tuiTips
  },
  methods: {
    validate() {
      let options = {
        msg: '两次输入的密码不一致~',
        duration: 2000
      }
      if (!(this.password === this.password_second)) {
        this.$refs.toast.showTips(options)
        return false
      } else return true
    },
    submit() {
      if (!this.validate()) return
      console.log(11111)
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
