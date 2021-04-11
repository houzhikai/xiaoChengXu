// Behavior 的写作方式 完全可以模仿 component 来写， 关键字改成 Behavior 即可
let classBeh = Behavior ({
	properties: {
		img: String,
		content: String,
		hidden: Boolean
	}
})
export {classBeh}