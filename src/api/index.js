import {
	baseURL
} from '../utils/config.js'
import Request from '../utils/request.js'

// 可以在每个单独的小模块中使用此方式引入，可以更好的分离api请求，便于协作开发和维护
let request = new Request(baseURL)
export function user_change_info() {
	return request.get('/user/user_change_info.php')
}
