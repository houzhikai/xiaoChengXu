// 如何给一个类 添加一个方法
import { config } from '../config.js'
const tips = {
	1: '抱歉，出现了一个错误',				//这是一个默认错误
	2: '抱歉，您的电脑断网了！',
	1005: 'dsadasdasd',
	3000: '期刊不存在'
}
class HTTP {
	request({ url, data = {}, method = 'GET' }) {
		return new Promise((resolve, reject) => {
			this._request(url, resolve, reject, data, method)
		})
	}
	_request(url, resolve, reject, data = {}, method = 'GET') {
		// 实例方法
		wx.request({
			url: config.api_base_url + url,
			method: method,
			data: data,
			header: {
				'content-type': 'application/json',
				'appkey': config.appkey
			},
			success: (res) => {
				// 取得的状态码是 2 开头的   , toString 将数字转为字符串
				const code = res.statusCode.toString()
				if (code.startsWith('2')) {
					resolve(res.data)
				}
				else {			//api 调用失败
					reject()
					const error_code = res.data.error_code
					this._show_error(error_code)
				}
			},
			fail: (err) => {				//验证这个错误，只需将 电脑断网
				reject()
				this._show_error(2)
			}
		})
	}
	_show_error(error_code) {				//加 _ 表示 这是一个私有方法
		if (!error_code) {
			error_code = 1
		}
		const tip = tips[error_code]
		wx.showToast({
			title: tip ? tip : tips[1],
			icon: 'none',
			duration: 2000
		})
	}
}
export { HTTP }