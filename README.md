1. image 默认的image组件默认宽度320px、高度240px
			image组件中二维码/小程序码图片不支持长按识别。仅在wx.previewImage中支持长按识别
2.  为什么在 image 里设置 width 和 height 正常的尺寸会出现过大的情况呢（width：32px 实际效果是预想的两倍 ）
			可以使用 rpx 单位， 使用 rpx 与 web 里面的 px 比例是 1:2
3. 设计小程序的时候  宽度750px ，高度 1334px 作为设计稿尺寸 （正好是 iPhone6 的宽高）
4. rpx 是自适应 px 是固定单位
5. 在 classic.js 中， request 是异步的函数， 所以前面不能 直接 let 一个函数名
		如果是一个同步的函数，则可以
		 小程序里的 request 没有同步只有异步
6. 在 import 引用时` 一定要用相对路径`，
7. 在 http.js 中，出现了 code 数据类型出错的问题
但是 数据的报错提醒是 `code.startsWith is not a function``,   解决方案是 将上面的 code 的数据类型 改为字符串， 因为 下面是将要判断 字符串的首位是否是 2 的问题
8. 错误提醒
			1. 当输入的命令是正确的			 调用  	params.success(res.data)
			2. 当 api 接口调用失败			调用 let error_code = res.data.error_code	
			3. 当 出错（err）时				直接调用  	this._show_error(2)		
9. 页面 左右箭头与 视频相反
`原因： 视频中采用的是倒序方法，左为 next 右为 pre`
10. 注意细节： 在监听左箭头和右箭头时，直接监听它的箭头而不是去 监听bind：tap
11. 小程序中对组件的代码复用是用  `behavior` 来实现的
behavior 的复用   组件的使用  是子覆盖 父 的， 但是当 behavior 里带有生命周期的时候，不会出现 子 覆盖 父的情况，
小程序会依次执行生命周期
12. 取消点赞之后，切换页面返回来又将是 点赞状态
原因为 `是将所有的 classic 数据都放进了缓存里`
13. wxss 的代码也能通过 @import 形式传过去， 从而达到复用的效果
14. 	wx.getSystemInfo		//用来获取系统信息的函数， 异步操作
15. promise的三种状态 pending 进行中 fulfiled 已成功 rejected 已失败
	在 promise 中，必填参数必须放在默认参数之前
16. 重点[接口更新提示] 若需要小程序在退到后台后继续播放音频,你需要在 app.json 中配置 requiredBackgroundModes
17. book-detail 中 comments.content 文字不能显示
18. 子元素选择器 和 后代选择器 的区别
19. 最愚蠢的错误 bind:tap="{{}}"
20. 点击 x 无反应且 book 页面样式也不对
21. 难点：1. loading 的使用和 各种细节
		  2.点击图片获取用户信息
22. 没有解决的问题： 触底loading 加载数据 无法实现			被默认的 onReachBottom函数覆盖了
					userAythorized2 有点小问题（头像需要点击一下才能显示）
					hasMore 无法调用
23. userAythorized1 方法要知道	

