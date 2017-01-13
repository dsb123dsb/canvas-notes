var canvas=document.getElementById('canvas');
if(canvas.getContext){
	var ctx=canvas.getContext('2d');
  //fillStyle实例
  for(var i=0;i<6;i++){
  	for(var j=0;j<6;j++){
    	ctx.fillStyle='rgb('+Math.floor(255-42.5*i)+','+Math.floor(255-42.5*j)+',0)';
      ctx.fillRect(j*25,i*25,25,25);
    }
  }
  //strokeStyle实例
  for (var i=0;i<6;i++){
    for (var j=0;j<6;j++){
        ctx.strokeStyle = 'rgb(0,' + Math.floor(255-42.5*i) + ',' + 
                         Math.floor(255-42.5*j) + ')';
        ctx.beginPath();
        ctx.arc(162.5+j*25,12.5+i*25,10,0,Math.PI*2,true);
        ctx.stroke();
      }
    }
    //透明度Transparency(rgba)
    ctx.fillStyle = 'rgb(255,221,0)';
    ctx.fillRect(450,0,150,37.5);
    ctx.fillStyle = 'rgb(102,204,0)';
    ctx.fillRect(450,37.5,150,37.5);
    ctx.fillStyle = 'rgb(0,0,255)';
    ctx.fillRect(450,75,150,37.5);
    ctx.fillStyle = 'rgb(255,0,0)';
    ctx.fillRect(450,112.5,150,37.5);
		for(var i=0;i<10;i++){
    	ctx.fillStyle="rgba(255,255,255,"+(i+1)/10+')';
      for(var j=0;j<4;j++){
      		ctx.fillRect(455+i*14,5+j*37.5,14,27.5);
      }
    }
    //透明度Transparency(全局globalAlpha，会叠加)
    ctx.fillStyle='#FD0';
    ctx.fillRect(300,0,75,75);
    ctx.fillStyle='#6C0';
    ctx.fillRect(375,0,75,75);
    ctx.fillStyle='#09F';
    ctx.fillRect(300,75,75,75);
    ctx.fillStyle='#F30';
    ctx.fillRect(375,75,75,75);
    ctx.fillStyle='#FFF';
    //ctx.globalAlpha=0.2;
    for(var i=0;i<7;i++){
    	ctx.beginPath();
      ctx.arc(375,75,10+10*i,0,Math.PI*2,true);
      ctx.fill();
    }
  //设置线条宽度,设置线条末端样式。两线段连接处所显示
  var lineCap = ['butt','round','square'];
  ctx.strokeStyle = '#09f';
  ctx.beginPath();
  ctx.moveTo(10,160);
  ctx.lineTo(140,160);
  ctx.moveTo(10,290);
  ctx.lineTo(140,290);
  ctx.stroke();

  // 画线条
  ctx.strokeStyle = 'black';
  for (var i=0;i<lineCap.length;i++){
    ctx.lineWidth = 15;
    ctx.lineCap = lineCap[i];
    ctx.beginPath();
    ctx.moveTo(25+i*50,160);
    ctx.lineTo(25+i*50,290);
    ctx.stroke();
  }
  var lineJoin = ['round','bevel','miter'];
  ctx.lineWidth = 10;
  for (var i=0;i<lineJoin.length;i++){
    ctx.lineJoin = lineJoin[i];
    ctx.beginPath();
    ctx.moveTo(150,155+i*40);
    ctx.lineTo(180,195+i*40);
    ctx.lineTo(220,155+i*40);
    ctx.lineTo(260,195+i*40);
    ctx.lineTo(300,155+i*40);
    ctx.stroke();
  } 
  //蚂蚁行军图 setLineDash 方法和 lineDashOffset 
   ctx.lineWidth=1;
   var offset=0;
   function draw(){
   	ctx.clearRect(300,150,150,150);
    ctx.setLineDash([4,2]);
    ctx.lineDashOffset= -offset;
    ctx.strokeRect(310,160,130,130);
   }
   function march(){
   	offset++;
    if(offset>16){
    offset=0;console.log(offset)
    }
    draw();
    setTimeout(march,2000)
   }
    march();//无效，，直接粘贴代码也不行(要重新设置线宽)
  // Create gradients渐变
  var lingrad = ctx.createLinearGradient(450,150,450,300);
  lingrad.addColorStop(0, '#00ABEB');
  lingrad.addColorStop(0.5, '#fff');
  lingrad.addColorStop(0.5, '#26C000');
  lingrad.addColorStop(1, '#fff');

  var lingrad2 = ctx.createLinearGradient(450,500,450,545);
  lingrad2.addColorStop(0.5, '#000');
  lingrad2.addColorStop(1, 'rgba(0,0,0,0)');

  // assign gradients to fill and stroke styles
  ctx.fillStyle = lingrad;
  ctx.strokeStyle = lingrad2;
  
  // draw shapes
  ctx.fillRect(460,160,130,130);
  ctx.strokeRect(490,190,50,50);

  // 创建径向渐变
  var radgrad=ctx.createRadialGradient(45,345,10,52,350,30);
  radgrad.addColorStop(0,'#A7D30C');
  radgrad.addColorStop(0.9,'#019F62');
  radgrad.addColorStop(1,'rgba(1,158,98,0)');
  var radgrad2=ctx.createRadialGradient(105,405,20,112,420,50);
  radgrad2.addColorStop(0,'#FF5F98');
  radgrad2.addColorStop(0.9,'#FF0188');
  radgrad2.addColorStop(1,'rgba(255,1,136,0)');
  var radgrad3 = ctx.createRadialGradient(95,315,15,102,320,40);
  radgrad3.addColorStop(0,'#00C9FF');
  radgrad3.addColorStop(0.9,'#00E5F2');
  radgrad3.addColorStop(1,'rgba(0,201,255,0)');
  var radgrad4 = ctx.createRadialGradient(0,450,50,0,440,90);
  radgrad4.addColorStop(0, '#F4F201');
  radgrad4.addColorStop(0.8, '#E4C700');
  radgrad4.addColorStop(1, 'rgba(228,199,0,0)');
  // 画图形
  ctx.fillStyle = radgrad4;
  ctx.fillRect(0,300,150,150);
  ctx.fillStyle = radgrad3;
  ctx.fillRect(0,300,150,150);
  ctx.fillStyle = radgrad2;
  ctx.fillRect(0,300,150,150);
  ctx.fillStyle = radgrad;
  ctx.fillRect(0,300,150,150);
  //图案样式Patterns， createPattern(image, type)，Type 必须是下面的字符串值之一：repeat，repeat-x，repeat-y 和 no-repeat。
  //创建新image对象，用图案
  var img=new Image();
  img.src='http://img1.imgtn.bdimg.com/it/u=1267666025,3670390813&fm=214&gp=0.jpg';
  img.onload=function(){//用 Image 对象的 onload handler 来确保设置图案之前图像已经装载完毕
  //创建图案
  var ptrn=ctx.createPattern(img,'repeat');
  ctx.fillStyle=ptrn;
  ctx.fillRect(150,300,300,300); 
   //阴影Shadows
  ctx.shadowOffsetX=2;
  ctx.shadowOffsetY=2;
  ctx.shadowBlur=2;
  ctx.shadowColor="rgba(0,0,0,0.5)";
  ctx.font="20px sans-serif";
  ctx.fillStyle='blue';
  ctx.fillText("荏苒",225,395);
  //Canvas填充规则,"nonzero"  默认值."evenodd"
  ctx.beginPath();
  ctx.arc(525,375,30,0,Math.PI*2,true);
  ctx.arc(525,375,15,0,Math.PI*2,true);
  ctx.arc(525,375,45,0,Math.PI*2,true);
  ctx.fill("evenodd");
   } 
    
    
    
    
    
    
}
