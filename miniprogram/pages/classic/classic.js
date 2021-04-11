import { ClassicModel } from '../../models/classic.js'
import { LikeModel } from '../../models/like.js'

let classicModel = new ClassicModel()               //实例化 HTTP 这个类
let likeModel = new LikeModel()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    classic: null,
    first: false,
    latest: true,
    likeCount:0,
    likeStatus: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 数据更新， 想要实现数据更新，就要通过 setData 来实现
    classicModel.getLatest(res => {
      this.setData({
        classicData: res,
        likeCount: res.fav_nums,
        likeStatus: res.like_status
      })
    })
  },
  onLike: function (e) {
    let behavior = e.detail.behavior
    likeModel.like(behavior, this.data.classicData.id, this.data.classicData.type)
  },
  onPre: function (e) {
    this._updateClassic('previous')
  },
  onNext: function (e) {
    this._updateClassic('next')
  },
  _updateClassic: function (preOrNext) {           //私有函数放在函数最下面
    let index = this.data.classicData.index
    classicModel.getClassic(index, preOrNext, (res) => {
      this._getLikStatus(res.id, res.type)
      this.setData({
        classicData: res,
        first: classicModel.isFirst(res.index),
        latest: classicModel.isLatest(res.index),

      })
    })
  },
  _getLikStatus: function (artID, category) {
    likeModel.getClassicLikeStatus(artID, category, res => {
      this.setData({
        likeCount: res.fav_nums,
        likeStatus: res.like_status
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})