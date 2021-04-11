import { HTTP } from '../until/http.js'
class ClassicModel extends HTTP {
	getLatest(sCallBack) {
		this.request({
			url: 'classic/latest',
			success: res => {
				sCallBack(res)
				this._setLaestIndex(res.index)
				let key = this._getkey(res.index)
				wx.setStorageSync(key, res)
			}
		})
	}
	getClassic(index, preOrNext, sCallBack) {
		//读取数据的时候，如果有缓存直接从缓存中拿
		let key = preOrNext == "next" ? this._getkey(index + 1) : this._getkey(index - 1)
		let classic = wx.getStorageSync(key)
		if (!classic) {
			this.request({
				url: `classic/${index}/${preOrNext}`,
				success: res => {
					wx.setStorageSync(this._getkey(res.index), res)
					sCallBack(res)
				}
			})
		}
		else {
			sCallBack(classic)
		}
	}

	isFirst(index) {
		return index == 1 ? true : false
	}
	isLatest(index) {
		let latestIndex = this._getLaestIndex()
		return latestIndex == index ? true : false
	}

	getMyFavor(success) {
		const params = {
			url: 'classic/favor',
			success: success
		}
		this.request(params)
	}

	_setLaestIndex(index) {					//将 index 存入缓存的方法
		wx.setStorageSync('latest', index)			//这是同步拿到index 的方法
	}
	_getLaestIndex() {				//读取 index 的方法			获取最新一期的 期刊号  不需要传参
		const index = wx.getStorageSync('latest')
		return index
	}
	_getkey(index) {
		let key = 'class-' + index
		return key
	}
}
export { ClassicModel }