# [canvas-绘制形状](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) #
1. 栅格
2. 绘制矩形
3. 绘制路径
	- 绘制一个三角形
	- 移动笔触
	- 线
	- 圆弧
	- 贝塞尔（bezier）以及二次贝塞尔
	- 贝塞尔曲线
	- 二次贝塞尔曲线
	- 矩形
	- 组合使用
4. Path2D 对象

实例效果图

![](http://i.imgur.com/mGDqxuw.png)
# [canvas-样式和颜色](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) #	
1. 色彩 Colors
2. 透明度 Transparency
  
	- globalAlpha 示例

 	- rgba() 示例
3. 线型 Line styles
  	- lineWidth 属性的例子
	- lineCap 属性的例子
	- lineJoin 属性的例子
	- miterLimit 属性的演示例子
	- 使用虚线
4. 渐变 Gradients
	- createLinearGradient 的例子
    - createRadialGradient 的例子
5. 图案样式 Patterns
	- createPa-ttern 的例子
6. 阴影 Shadows
7. Canvas 填充规则

实例效果

![](http://i.imgur.com/9Ms5DLg.png)
# [绘制文本](http://www.whatwg.org/specs/web-apps/current-work/images/baselines.png) #
1. 文本
	- 填充文本
	- 文本边框
2. 有样式的文本
	- textBaseline
3. 先进的文本测量	

   ![](http://i.imgur.com/ChryIpO.png)

# [使用图片](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Using_images) #
1. 绘制图片
2. 缩放Scalling
3. 切片Slicing
# [变形](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Transformations) #
1. 状态的保存和恢复 Saving and restoring state
2. 移动 Translating
3. 旋转 Rotating
4. 缩放 Scaling
5. 变形 Transforms

实例效果

![](http://i.imgur.com/lVnmu3z.png)
# [合成裁剪](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Compositing) #
1. globalCompositeOperation
	- globalCompositeOperation = type（12种）
2. 裁切路径 Clipping paths
# [基本动画 ](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_animations)#
1. 动画的基本步骤
 	- 清空 canvas
	- 保存 canvas 状态
	- 绘制动画图形（animated shapes）
	- 恢复 canvas 状态
2. 操控动画

Controlling an animation2requestAnimationFrame(callback)告诉浏览器你希望执行一个动画，并在重绘之前，请求浏览器执行一个特定的函数来更新动画。

实例效果

![](http://i.imgur.com/yDPJIQm.gif)
# [高级动画](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Advanced_animations) #
1.绘制小球  2.添加速率  3.边界  4.加速度  5.长尾效果  6.添加鼠标控制  