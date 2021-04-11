// components/like/index.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		like: {
			// type 是必填的， value 和 observer 是 选填的 value 的默认值是false ， 如果 值是false 就可以不写
			type: Boolean,
		},
		//number  的默认值是 0 
		count: {
			type: Number
		},
		readOnly: {
			type: Boolean
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		yesSrc: './images/like.png',
		noSrc: './images/like@dis.png',
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		onLike: function (e) {
			if (this.properties.readOnly) {
				return
			}
			let like = this.properties.like
			let count = this.properties.count
			// setData 可以提供一个 JavaScript 对象
			this.setData({
				count: like ? count - 1 : count + 1,
				like: !like
			})
			// 	确认是点赞 还是 取消点赞
			let behavior = this.properties.like ? 'like' : 'cancel'
			// 第一个是自定义名称， 第二个是 自定义属性，第三个一般情况下是不使用的
			this.triggerEvent('like', {
				behavior: behavior
			}, {})
		}
	}
})
