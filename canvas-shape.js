var canvas =document.getElementById("canvas"),
canvas1 =document.getElementById("canvas1"),
canvas2 =document.getElementById("canvas2"),
canvas3 =document.getElementById("canvas3"),
canvas4 =document.getElementById("canvas4"),
canvas5 =document.getElementById("canvas5");
if(canvas.getContext){
var ctx=canvas.getContext("2d"),
ctx1=canvas1.getContext("2d"),
ctx2=canvas2.getContext("2d"),
ctx3=canvas3.getContext("2d"),
ctx4=canvas4.getContext("2d"),
ctx5=canvas5.getContext("2d");
    ctx.fillStyle="green";
    ctx.fillRect(10,10,100,100);//fillRect(x,y,width,height)
    ctx.fillStyle="rgb(200,0,0)";//填充矩形颜色
    ctx.fillRect(25,25,100,100);//绘制一个填充的矩形
    ctx.clearRect(45,45,60,60);//清除指定矩形区域，让清除部分完全透明。
    ctx.strokeRect(50,50,50,50);//绘制一个矩形的边框
    //绘制三角形<!--  beginPath()，closePath()，stroke()，fill() -->
    ctx.fillStyle="black";
    ctx.beginPath();
                 ctx.moveTo(75,50);ctx.lineTo(100,75);ctx.lineTo(100,25);ctx.fill();//stroke()不会自动闭合
    //笔触
    ctx1.beginPath();
    ctx1.arc(75,75,50,0,Math.PI*2,true); // 绘制
    ctx1.moveTo(110,75);//移动起点
    ctx1.arc(75,75,35,0,Math.PI,false);   // 口(顺时针)
    ctx1.moveTo(65,65);
    ctx1.arc(60,65,5,0,Math.PI*2,true);  // 左眼
    ctx1.moveTo(95,65);
    ctx1.arc(90,65,5,0,Math.PI*2,true);  // 右眼
    ctx1.stroke();
    //绘制八卦
    //绘制白色半圆的代码如下：
     ctx2.beginPath();
     ctx2.arc(75,75,60,1.5*Math.PI,Math.PI/2,false);
     ctx2.fillStyle="white";
     ctx2.closePath();
     ctx2.fill();

     //绘制黑色半圆的代码如下：
     ctx2.beginPath();
     ctx2.arc(75,75,60,Math.PI/2,1.5*Math.PI,false);
     ctx2.fillStyle="black";
     ctx2.closePath();
     ctx2.fill();

     //绘制黑色小圆
     ctx2.beginPath();
     ctx2.arc(75,105,30,0,Math.PI*2,true);
     ctx2.fillStyle="black";
     ctx2.closePath();
     ctx2.fill();

     //绘制白色小圆
     ctx2.beginPath();
     ctx2.arc(75,45,30,0,Math.PI*2,true);
     ctx2.fillStyle="white";
     ctx2.closePath();
     ctx2.fill();

     //绘制黑色小圆心
     ctx2.beginPath();
     ctx2.arc(75,45,5,0,Math.PI*2,true);
     ctx2.fillStyle="black";
     ctx2.closePath();
     ctx2.fill();

      //绘制白小圆心
     ctx2.beginPath();
     ctx2.arc(75,105,5,0,Math.PI*2,true);
     ctx2.fillStyle="white";
     ctx2.closePath();
     ctx2.fill();

     //绘制文字代码如下：
     ctx2.save();
     ctx2.fillStyle="black";
     ctx2.globalAlpha="0.4";
     ctx2.textAlign="center";
     ctx2.font="20px Arial";
     ctx2.shadowColor="rgba(0,0,0,0.4)";
     ctx2.shadowOffsetX=15;
     ctx2.shadowOffsetY=-10;
     ctx2.shadowBlur=2;
     ctx2.fillText('Hello Canavs',80,150);//IE不支持
     ctx2.restore();
   //基本形状 
      for(var i=0;i<4;i++){
        for(var j=0;j<3;j++){
          ctx3.beginPath();
          var x              = 25+j*50;               // x 坐标值
          var y              = 25+i*50;               // y 坐标值
          var radius         = 20;                    // 圆弧半径
          var startAngle     = 0;                     // 开始点
          var endAngle       = Math.PI+(Math.PI*j)/2; // 结束点
          var anticlockwise  = i%2==0 ? false : true; // 顺时针或逆时针

          ctx3.arc(x, y, radius, startAngle, endAngle, anticlockwise);

          if (i>1){
            ctx3.fill();
          } else {
            ctx3.stroke();
          }
      }
    }
    //demeo 绘制游戏人物
    //1.1绘制圆角矩形
    roundedRect(ctx4,12,12,150,150,15);
    roundedRect(ctx4,19,19,150,150,9);
    roundedRect(ctx4,53,53,49,33,10);
    roundedRect(ctx4,53,119,49,16,6);
    roundedRect(ctx4,135,53,49,33,10);
    roundedRect(ctx4,135,119,25,49,10);
    //1.2绘制吃豆人
    ctx4.beginPath();
    ctx4.arc(37,37,13,Math.PI/7,-Math.PI/7,false);
    ctx4.lineTo(31,37);
    ctx4.fill();
    //1.3绘制武器
    for(var i=0;i<8;i++){
      ctx4.fillRect(51+i*16,35,4,4);
    }

    for(i=0;i<6;i++){
      ctx4.fillRect(115,51+i*16,4,4);
    }

    for(i=0;i<8;i++){
      ctx4.fillRect(51+i*16,99,4,4);
    }
    //1.4绘制怪物
    ctx4.beginPath();
    ctx4.moveTo(83,116);
    ctx4.lineTo(83,102);
    ctx4.bezierCurveTo(83,94,89,88,97,88);
    ctx4.bezierCurveTo(105,88,111,94,111,102);
    ctx4.lineTo(111,116);
    ctx4.lineTo(106.333,111.333);
    ctx4.lineTo(101.666,116);
    ctx4.lineTo(97,111.333);
    ctx4.lineTo(92.333,116);
    ctx4.lineTo(87.666,111.333);
    ctx4.lineTo(83,116);
    ctx4.fill();

    ctx4.fillStyle = "white";
    ctx4.beginPath();
    ctx4.moveTo(91,96);
    ctx4.bezierCurveTo(88,96,87,99,87,101);
    ctx4.bezierCurveTo(87,103,88,106,91,106);
    ctx4.bezierCurveTo(94,106,95,103,95,101);
    ctx4.bezierCurveTo(95,99,94,96,91,96);
    ctx4.moveTo(103,96);
    ctx4.bezierCurveTo(100,96,99,99,99,101);
    ctx4.bezierCurveTo(99,103,100,106,103,106);
    ctx4.bezierCurveTo(106,106,107,103,107,101);
    ctx4.bezierCurveTo(107,99,106,96,103,96);
    ctx4.fill();

    ctx4.fillStyle = "black";
    ctx4.beginPath();
    ctx4.arc(101,102,2,0,Math.PI*2,true);
    ctx4.fill();

    ctx4.beginPath();
    ctx4.arc(89,102,2,0,Math.PI*2,true);
    ctx4.fill();
    // 封装的一个用于绘制圆角矩形的函数.

  function roundedRect(ctx,x,y,width,height,radius){
    ctx4.beginPath();
    ctx4.moveTo(x,y+radius);
    ctx4.lineTo(x,y+height-radius);
    ctx4.quadraticCurveTo(x,y+height,x+radius,y+height);
    ctx4.lineTo(x+width-radius,y+height);
    ctx4.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
    ctx4.lineTo(x+width,y+radius);
    ctx4.quadraticCurveTo(x+width,y,x+width-radius,y);
    ctx4.lineTo(x+radius,y);
    ctx4.quadraticCurveTo(x,y,x,y+radius);
    ctx4.stroke();    
  }
  //Path2D
  var p = new Path2D("M10 10 h 80 v 80 h -80 Z");
  ctx5.fill(p);
 }


s