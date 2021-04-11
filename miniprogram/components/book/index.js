// components/book/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        book:Object
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        onTap() {
            const bid = this.properties.book.id
            wx.navigateTo({     //跳转到指定的详情页
              url: `/pages/book-detail/book-detail?bid=${bid}`,
            })
        }
    }
})
