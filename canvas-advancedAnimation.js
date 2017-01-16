  var canvas = document.getElementById("canvas"),
    canvas1 = document.getElementById("canvas1"),
    canvas2 = document.getElementById("canvas2"),
    canvas3 = document.getElementById("canvas3"),
    canvas4 = document.getElementById("canvas4"),
    canvas5 = document.getElementById("canvas5"),
    canvas6 = document.getElementById("canvas6"),
    canvas7 = document.getElementById("canvas7"),
    canvas8 = document.getElementById("canvas8");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d"),
      ctx1 = canvas1.getContext("2d"),
      ctx2 = canvas2.getContext("2d"),
      ctx3 = canvas3.getContext("2d"),
      ctx4 = canvas4.getContext("2d"),
      ctx5 = canvas5.getContext("2d"),
      ctx6 = canvas6.getContext("2d"),
      ctx7 = canvas7.getContext("2d"),
      ctx8 = canvas8.getContext("2d");
    var running = false;
    //运动小球
    var ball = {
      x: 100,
      y: 100,
      radius: 25,
      color: 'blue',
      vx: 5,
      vy: 2,
      draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    };

    function clear() {
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function draw() {
      clear(); //画一次原来的模糊加倍
      ball.draw();
      ball.vy *= .99; //控制垂直加速度，更逼真
      ball.vy += .25;
      ball.x += ball.vx;
      ball.y += ball.vy;
      if (ball.y + ball.vy > canvas.height-25 || ball.y + ball.vy < 25) { //碰壁弹回
        ball.vy = -ball.vy;
      }
      if(ball.y + ball.vy > canvas.height-24.9){
        ball.y =canvas.height-24.9;
      }
      if (ball.x + ball.vx > canvas.width-12.5 || ball.x + ball.vx < 25) {
        ball.vx = -ball.vx;
      }
      raf = window.requestAnimationFrame(draw);
    }

    canvas.addEventListener('mousemove', function(e) {
      if (!running) {
        clear();
        ball.x = e.clientX;
        ball.y = e.clientY;
        ball.draw();
      }
    });

    canvas.addEventListener("click", function(e) {
      if (!running) {
        raf = window.requestAnimationFrame(draw);
        running = true;
      }
    });

    canvas.addEventListener("mouseout", function(e) {
      window.cancelAnimationFrame(raf);
      running = false;
    });

    ball.draw();



  }