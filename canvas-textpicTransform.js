  var canvas =document.getElementById("canvas"),
  canvas1 =document.getElementById("canvas1"),
  canvas2 =document.getElementById("canvas2"),
  canvas3 =document.getElementById("canvas3"),
  canvas4 =document.getElementById("canvas4"),
  canvas5 =document.getElementById("canvas5"),
  canvas6 =document.getElementById("canvas6"),
  canvas7 =document.getElementById("canvas7"),
  canvas8 =document.getElementById("canvas8");
  if(canvas.getContext){
  var ctx=canvas.getContext("2d"),
  ctx1=canvas1.getContext("2d"),
  ctx2=canvas2.getContext("2d"),
  ctx3=canvas3.getContext("2d"),
  ctx4=canvas4.getContext("2d"),
  ctx5=canvas5.getContext("2d"),
  ctx6=canvas6.getContext("2d"),
  ctx7=canvas7.getContext("2d"),
  ctx8=canvas8.getContext("2d");
  //绘制文本。fillText(tetx,x,y,[,maxWidth]),strokeText(tetx,x,y,[,maxWidth])
  ctx.font = "32px serif";
  ctx.textBaseline="middle"
  ctx.strokeText("Hello ", 10, 50);
  ctx.font = "16px serif";
  ctx.strokeText("zeep", 100, 50);

  //文本测量
  var text=ctx.measureText("foo");
  console.log(text.width);//16
  //使用图片，先获取图片(很多方法)，在绘制图片drawImage(image,x,y)
  //
  var img=new Image();
  img.onload=()=>{//要等到img.src加载在会执行
      ctx1.drawImage(img,0,0);
      ctx1.beginPath();
      ctx1.moveTo(30,96);
      ctx1.lineTo(70,66);
      ctx1.lineTo(103,76);
      ctx1.lineTo(170,15);
      ctx1.stroke();
    }
   img.src="http://img1.3lian.com/2016/gif/w/15/61.jpg"  ;
   //缩放Scalling，drawImage(image, x, y, width, height)
   var img1=new Image();
   img1.onload=()=>{
      for(var i=0;i<3;i++){
        for(var j=0;j<4;j++){
          ctx2.drawImage(img1,i*50,38*j,50,37.5)
        }
      }
   }
   img1.src='https://mdn.mozillademos.org/files/5397/rhino.jpg';
  //切片Slicing,drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  //sx、sy裁剪图片起始位置，swidth、sHeight裁剪图片宽高，dx、dy放置在画布中起始位置，dWidth、dHeight放缩后大小
  //变形，ctx.save(),ctx.restore();
  ctx3.fillRect(0,0,150,150);   // 使用默认设置绘制一个矩形
  ctx3.save();                  // 保存默认状态

  ctx3.fillStyle = '#09F'       // 在原有配置基础上做改变
  ctx3.fillRect(15,15,120,120); // 使用新的设置绘制一个矩形

  ctx3.save();                  // 保存当前状态
  ctx3.fillStyle = '#FFF'       // 再次改变配置
  ctx3.globalAlpha = 0.5;    
  ctx3.fillRect(30,30,90,90);   // 使用新的配置绘制一个矩形

  ctx3.restore();               // 重新加载之前的状态
  ctx3.fillRect(45,45,60,60);   // 使用上一次的配置绘制一个矩形

  ctx3.restore();               // 加载默认配置
  ctx3.fillRect(60,60,30,30);   // 使用加载的配置绘制一个矩形  
  //移动transtlating，translate(x, y)，左右偏移和上下偏移, canvas 和它的原点到一个不同的位置。
  //做变形前先保存状态
  function drawSpirograph(ctx,R,r,O){//绘制螺旋函数
  var x1 = R-O;
  var y1 = 0;
  var i  = 1;
  ctx.beginPath();
  ctx.moveTo(x1,y1);
  do {
    if (i>20000) break;
    var x2 = (R+r)*Math.cos(i*Math.PI/72) - (r+O)*Math.cos(((R+r)/r)*(i*Math.PI/72))
    var y2 = (R+r)*Math.sin(i*Math.PI/72) - (r+O)*Math.sin(((R+r)/r)*(i*Math.PI/72))
    ctx.lineTo(x2,y2);
    x1 = x2;
    y1 = y2;
    i++;
  } while (x2 != R-O && y2 != 0 );
  ctx.stroke();
}
function draw() {
  ctx4.fillRect(0,0,150,150);
  for (var i=0;i<3;i++) {
    for (var j=0;j<3;j++) {
      ctx4.save();
      ctx4.strokeStyle = "#9CFF00";
      ctx4.translate(25+j*50,25+i*50);
      drawSpirograph(ctx4,10*(j+2)/(j+1),-4*(i+3)/(i+1),5);
      ctx4.restore();
    }
  }
}
draw();
  //罗旋圆
  var r = 1;    
  var draw1 = setInterval(function(){   
    drawLine(ctx,r=r+1/r);  
    },1);   
    function drawLine(ct,r){    
      ct.beginPath(); 
      ct.arc(75,105,r,r,r+1); 
      ct.stroke();  
      if(r>40){
        clearInterval(draw1);
      } 
    }
  //旋转，Rotating,原点为中心旋转 canvas。rotate(angle),顺时针
  ctx5.translate(75,75);
  for(var i=1;i<6;i++){
    ctx5.save();
    ctx5.fillStyle='rgb('+(51*i)+','+(255-51*i)+',255)';
    for(var j=0;j<i*6;j++){//画每个环的圆点
      ctx5.rotate(Math.PI*2/(i*6));
      ctx5.beginPath();
      ctx5.arc(0,i*12.5,5,5,0,Math.PI*2,true);
      ctx5.fill();
    }
    ctx5.restore();
  }
  //缩放Scalling,scale(x, y)x,y 分别是横轴和纵轴的缩放因子，它们都必须是正值。值比 1.0 小表示缩小，比 1.0 大则表示放大，值为 1.0 时什么效果都没有。
  ctx6.strokeStyle = "#0cf";
  ctx6.lineWidth = 1.5;
  ctx6.fillRect(0,0,150,150);

  //1. Uniform scaling
  ctx6.save()
  ctx6.translate(25,25);
  drawSpirograph(ctx6,11,3,2.5);  // no scaling

  ctx6.translate(50,0);//在之前移动的基础上继续移动
  ctx6.scale(0.75,0.75);
  drawSpirograph(ctx6,11,3,2.5);

  ctx6.translate(65,0);
  ctx6.scale(0.75,0.75);
  drawSpirograph(ctx6,11,3,2.5);
  ctx6.restore();
  // 2.None-Uniform scaling(y direction)
  ctx6.strokeStyle = "#fc0";
  ctx6.save()
  ctx6.translate(25,75);
  drawSpirograph(ctx6,11,3,2.5);  // no scaling

  ctx6.translate(50,0);//在之前移动的基础上继续移动
  ctx6.scale(1,0.75);
  drawSpirograph(ctx6,11,3,2.5);

  ctx6.translate(50,0);
  ctx6.scale(1,0.75);
  drawSpirograph(ctx6,11,3,2.5);
  ctx6.restore();
  // 3.None-Uniform scaling(x direction)
  ctx6.strokeStyle = "#cf0";
  ctx6.save()
  ctx6.translate(25,125);
  drawSpirograph(ctx6,11,3,2.5);  // no scaling

  ctx6.translate(50,0);//在之前移动的基础上继续移动
  ctx6.scale(0.75,1);
  drawSpirograph(ctx6,11,3,2.5);

  ctx6.translate(70,0);
  ctx6.scale(0.75,1);
  drawSpirograph(ctx6,11,3,2.5);
  ctx6.restore();
  //变形Transforms,transform(m11, m12, m21, m22, dx, dy)
  var sin = Math.sin(Math.PI/6);
  var cos = Math.cos(Math.PI/6);
  ctx7.translate(75, 75);
  var c = 0;
  for (var i=0; i <= 12; i++) {
    c = Math.floor(255 / 12 * i);
    ctx7.fillStyle = "rgb(" + c + "," + c + "," + c + ")";
    ctx7.fillRect(0, 0, 50, 5);
    ctx7.transform(cos, sin, -sin, cos, 0, 0);//顺时针旋转
  }
  
  ctx7.setTransform(-1, 0, 0, 1, 75, 75);//重置为单位矩阵
  ctx7.fillStyle = "rgba(255, 128, 255, 0.5)";
  ctx7.fillRect(0, 25, 50, 50);







}