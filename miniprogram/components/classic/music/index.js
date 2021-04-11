import { classBeh } from '../classic-common-beh.js'
const mMgr = wx.getBackgroundAudioManager()
Component({
	/**
	 * 组件的属性列表
	 */
	behaviors: [classBeh],				//这才是真正的继承 
	properties: {
		src: String
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		playing: false,
		pauseSrc: './images/player@pause.png',
		playSrc: './images/player@play.png'
	},
	attached: function () {
		this._recoverStatus()
		this._monitorSwitch()
	},
	// hidden ready  created  都触发不了detached 函数
	detached: function () {
		// mMgr.stop()
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		onPlay: function () {
			//切换 暂停/播放 按钮
			if (!this.data.playing) {
				this.setData({
					playing: true
				})
				mMgr.title = 'this.properties.title'
				mMgr.epname = '此时此刻'
				mMgr.singer = '月之门'
				mMgr.src = this.properties.src
				mMgr.src = this.properties.src
			}
			else {
				this.setData({
					playing: true
				})
				mMgr.pause()
			}
		},
		_recoverStatus: function () {
			if (mMgr.paused) {
				this.setData({
					playing: false
				})
				return
			}
			if (mMgr.src == this.properties.src) {
				this.setData({
					playing: true
				})
			}
		},
		_monitorSwitch: function () {
			mMgr.onPlay(() => {
				this._recoverStatus()
			})
			mMgr.onPause(()=> {
				this._recoverStatus()
			})
			mMgr.onStop(()=> {
				this._recoverStatus()
			})
			mMgr.onEnded(()=>{		//让音乐自动播放完成
				this._recoverStatus()
			})
		}
	}
})
