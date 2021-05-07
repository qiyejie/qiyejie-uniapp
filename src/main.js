import Vue from 'vue'
import App from './App'
import tuiToast from 'thorui-uni/lib/thorui/tui-toast/tui-toast'

Vue.config.productionTip = false
Vue.component('tui-toast',tuiToast)

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
