import { BookModel } from '../../models/book.js'
import { random } from '../../until/common.js'
const bookModel = new BookModel()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		books: [],
		searching: false,
		more: ''
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	async onLoad() {
		const books = await bookModel.getHotList()
		// .then(res => {
		// 	this.setData({
		// 		books: res
		// 	})
		// })
		this.setData({
			books
		})
	},
	onSearching() {
		this.setData({
			searching: true
		})
	},
	onCancel() {
		this.setData({
			searching: false
		})
	},
	onReachBottom() {
		this.setData({
			more: random(16)
		})
	},
})