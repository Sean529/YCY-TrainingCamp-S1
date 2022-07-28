class BrakeBanner{
	constructor(selector){
		// 初始化 pixi 应用，画布的宽高、颜色
		this.app = new PIXI.Application({
			width: window.innerWidth,
			height: window.innerHeight,
			backgroundColor: 0xff0000
		})

		// 把实例在画布渲染
		document.querySelector(selector).appendChild(this.app.view)
		// 创建加载器，加载（图片）资源
		this.loader = new PIXI.Loader()
		// 加载指定图片
		this.loader.add('btn.png', 'images/btn.png')
		// 加载资源
		this.loader.load()
		// 加载成功回调
		this.loader.onComplete.add(() => {
			// 雪碧图实例化
			const btn = new PIXI.Sprite(this.loader.resources['btn.png'].texture)
			// 将雪碧图添加到画布
			this.app.stage.addChild(btn)
		})
	}
}