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
  //组合，compositing,globalCompositeOperation=type(12种)
  //裁剪路径Clipping paths，clip();
  ctx.fillRect(0,0,150,150);
  ctx.translate(75,75);
  //create a circular clipping path
  ctx.beginPath();
  ctx.arc(0,0,60,0,Math.PI*2,true);
  ctx.clip();
  //draw background
  var lingrad=ctx.createLinearGradient(0,-75,0,75);
  lingrad.addColorStop(0,'#232256');
  lingrad.addColorStop(0,'#143778');
  ctx.fillStyle=lingrad;
  ctx.fillRect(-75,-75,150,150);
  //draw stars
  for(var j=1;j<50;j++){
    ctx.save();
    ctx.fillStyle='#fff';
    ctx.translate(75-Math.floor(Math.random()*150),
                  75-Math.floor(Math.random()*150));
    drawStar(ctx,Math.floor(Math.random()*4)+2);
    ctx.restore();
  }
  //封装创建星星函数
  function drawStar(ctx,r){
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(r,0);
    for(var i=0;i<9;i++){
      ctx.rotate(Math.PI/5);
      if(i%2 == 0) {
        ctx.lineTo((r/0.525731)*0.200811,0);
      } else {
        ctx.lineTo(r,0);      
      }
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
  //基本动画Animation 1.清空 canvas 2.保存 canvas 状态 3.绘制动画图形（animated shapes）4.恢复 canvas 状态
  //requestAnimationFrame(callback)告诉浏览器你希望执行一个动画，并在重绘之前，请求浏览器执行一个特定的函数来更新动画。
  //动画太阳系
  var sun=new Image();
  var moon=new Image();
  var earth=new Image();
  function init(){
    sun.src='https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
    moon.src='https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
    earth.src='https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
    window.requestAnimationFrame(draw);
  }
  function draw(){
    ctx1.globalCompositeOperation='destination-over';
    ctx1.clearRect(0,0,150,150);
    ctx1.fillStyle='rgba(0,0,0,0.4)';
    ctx1.strokeStyle='rgba(0,153,255,0.4)';
    ctx1.save();
    ctx1.translate(75,75);
    //earth
    var time =new Date();
    ctx1.rotate(((2*Math.PI)/60)*time.getSeconds()+((2*Math.PI)/60000)*time.getMilliseconds());
    ctx1.translate(52.5,0);//轨道位置
    ctx1.fillRect(0,-6,25,12);//shadow
    ctx1.save();
    ctx1.scale(0.5,0.5);//实例是300*300，这里要缩放图片,坐标也会相应缩放
    ctx1.drawImage(earth,-12,-12);
    ctx1.restore();
    //moon
    ctx1.save();
    ctx1.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
    ctx1.translate(0,14.25);
    ctx1.save();
    ctx1.scale(0.5,0.5);//实例是300*300，这里要缩放图片
    ctx1.drawImage(moon,-3.5,-3.5);
    ctx1.restore();
    ctx1.restore();

    ctx1.restore();
    ctx1.beginPath();
    ctx1.arc(75,75,52.5,0,Math.PI*2,false);//Earth orbit
    ctx1.stroke();
    ctx1.drawImage(sun,0,0,150,150);//sun
    window.requestAnimationFrame(draw);
    console.log('1')
  }
  init();
  //时钟动画
  function clock(){
    var now=new Date();
    ctx2.save();
    ctx2.clearRect(0,0,150,150);
    ctx2.translate(75,75);
    ctx2.scale(0.4,0.4);
    ctx2.rotate(-Math.PI/2);
    ctx2.strokeStyle='black';
    ctx2.fillStyle='white';
    ctx2.lineWidth=8;
    ctx2.lineCap='round';
    //hour marks
     ctx2.save();
    for (var i=0;i<12;i++){
      ctx2.beginPath();
      ctx2.rotate(Math.PI/6);
      ctx2.moveTo(100,0);
      ctx2.lineTo(120,0);
      ctx2.stroke();
    }
    ctx2.restore();   
    //minute marks
    ctx2.save();
    ctx2.linewidth=4;
    for(var i=0;i<60;i++){
      if(!i%5==0){
        ctx2.beginPath();
        ctx2.moveTo(117,0);
        ctx2.lineTo(120,0);
        ctx2.stroke();
      }
      ctx2.rotate(Math.PI/30);
    }
    ctx2.restore();
    
    var sec=now.getSeconds(),
    min=now.getMinutes(),
    hr=now.getHours();
    hr=hr>=12?hr-12:hr;
    ctx2.fillStyle='black';
    //write Hour
    ctx2.save();
    ctx2.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
    ctx2.lineWidth = 14;
    ctx2.beginPath();
    ctx2.moveTo(-20,0);
    ctx2.lineTo(80,0);
    ctx2.stroke();
    ctx2.restore();    
    // write Minutes
    ctx2.save();
    ctx2.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
    ctx2.lineWidth = 10;
    ctx2.beginPath();
    ctx2.moveTo(-28,0);
    ctx2.lineTo(112,0);
    ctx2.stroke();
    ctx2.restore();
    //write seconds
    ctx2.save();
    ctx2.rotate((Math.PI/30)*sec);
    ctx2.strokeStyle = "#D40000";
    ctx2.fillStyle = "#D40000";
    ctx2.lineWidth=6;
    ctx2.beginPath();
    ctx2.moveTo(-30,0);
    ctx2.lineTo(83,0);
    ctx2.stroke();
    ctx2.beginPath();
    ctx2.arc(0,0,10,0,Math.PI*2,true);
    ctx2.fill();
    ctx2.beginPath();
    ctx2.fillStyle = "rgba(0,0,0,1)";
    ctx2.arc(0,0,3,0,Math.PI*2,true);
    ctx2.fill();
    ctx2.beginPath();
    ctx2.arc(95,0,10,0,Math.PI*2,true);
    ctx2.stroke();
    ctx2.restore();
    ctx2.restore();
    window.requestAnimationFrame(clock);   
  }
  window.requestAnimationFrame(clock);
    //循环全景照片
    var img = new Image();

    // User Variables - customize these to change the image being scrolled, its
    // direction, and the speed.

    img.src = 'https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg';
    var CanvasXSize = 300;
    var CanvasYSize = 200;
    var speed = 30; //lower is faster
    var scale = 1.05;
    var y = -4.5; //vertical offset

    // Main program

    var dx = 0.75;
    var imgW;
    var imgH;
    var x = 0;
    var clearX;
    var clearY;
    var ctx;

    img.onload = function() {
        imgW = img.width*scale;
        imgH = img.height*scale;
        if (imgW > CanvasXSize) { x = CanvasXSize-imgW; } // image larger than canvas
        if (imgW > CanvasXSize) { clearX = imgW; } // image larger than canvas
        else { clearX = CanvasXSize; }
        if (imgH > CanvasYSize) { clearY = imgH; } // image larger than canvas
        else { clearY = CanvasYSize; }
        //Set Refresh Rate
        return setInterval(draw1, speed);
    }

    function draw1() {
        //Clear Canvas
        ctx3.clearRect(0,0,clearX,clearY);
        //If image is <= Canvas Size
        if (imgW <= CanvasXSize) {
            //reset, start from beginning
            if (x > (CanvasXSize)) { x = 0; }
            //draw aditional image
            if (x > (CanvasXSize-imgW)) { ctx3.drawImage(img,x-CanvasXSize+1,y,imgW,imgH); }
        }
        //If image is > Canvas Size
        else {
            //reset, start from beginning
            if (x > (CanvasXSize)) { x = CanvasXSize-imgW; }
            //draw aditional image
            if (x > (CanvasXSize-imgW)) { ctx3.drawImage(img,x-imgW+1,y,imgW,imgH); }
        }
        //draw image
        ctx3.drawImage(img,x,y,imgW,imgH);
        //amount to move
        x += dx;
    }
  
  
  
  
  }