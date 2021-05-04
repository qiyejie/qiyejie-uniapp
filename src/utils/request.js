import axios from 'axios'
import Toast from 'thorui-uni/lib/thorui/tui-toast/tui-toast'
// // import { forceQuit } from '@/utils/login.js'
import qs from 'qs'
// import { toastWhiteList } from './config'

class Request {
	constructor(baseURL, headers = {
		'content-type': 'application/json'
	}) {
		this.request = axios.create({
			baseURL,
			headers
		})

		// 添加请求拦截器
		this.request.interceptors.request.use(config => {
			config.params = {
				...config.params
			}
			return config
		}, (error) => {
			// 请求错误时做些事
			return Promise.reject(error)
		})

		// 添加响应拦截器
		this.request.interceptors.response.use((config) => {
			// 对响应数据做些事
			if (~~config.data.code !== 0) {
				Toast.show(config.data.message)
			}
			if (~~config.data.code === 411) { // 重新登录
				console.log('重新登录')
			}
			return config

		}, (error) => {
			if (error.response) {
				const {
					status,
					data
				} = error.response
				if (~~status === 401 && data.code === 500001) {
					// forceQuit()
				}
			}
			// 响应错误时做些事
			return Promise.reject(error)
		})
	}
	get(url, params) {
		return this.request.get(url, {
			params
		})
	}
	post(url, data, config = {
		headers: {
			'content-type': 'application/x-www-form-urlencoded'
		}
	}, useStringifyData = true) {
		return this.request.post(url, (useStringifyData ? qs.stringify(data) : data), config)
	}
	postJson(url, data) {
		return this.request.post(url, data)
	}
}

export default Request
