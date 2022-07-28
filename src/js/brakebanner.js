class BrakeBanner {
  constructor(selector) {
    // 初始化 pixi 应用，画布的宽高、颜色
    this.app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0xffffff,
    })

    // 把实例在画布渲染
    document.querySelector(selector).appendChild(this.app.view)
    // 创建加载器，加载（图片）资源
    this.loader = new PIXI.Loader()

    // 加载指定图片
    this.loader.add('btn.png', 'images/btn.png')
    this.loader.add('brake_bike.png', 'images/brake_bike.png')
    this.loader.add('brake_handler_bar.png', 'images/brake_handler_bar.png')
    this.loader.add('brake_lever.png', 'images/brake_lever.png')
    this.loader.add('btn_circle.png', 'images/btn_circle.png')

    // 加载资源
    this.loader.load()
    // 加载成功回调
    this.loader.onComplete.add(() => {
      this.show()
    })
  }

  show() {
    // 创建容器
    const actionButton = new PIXI.Container()
    // 将容器添加到画布
    this.app.stage.addChild(actionButton)

    // 按钮
    const btnImage = new PIXI.Sprite(this.loader.resources['btn.png'].texture)

    // 圆圈
    const btnCircle = new PIXI.Sprite(
      this.loader.resources['btn_circle.png'].texture,
    )

    // 在容器中添加按钮
    actionButton.addChild(btnImage)
    actionButton.addChild(btnCircle)

    // 改变按钮图片的圆心
    btnImage.pivot.x = btnImage.pivot.y = btnImage.width / 2
    btnCircle.pivot.x = btnCircle.pivot.y = btnCircle.width / 2

	// 将按钮放置在画布中央
	actionButton.x = actionButton.y = window.innerWidth/2
  }
}
