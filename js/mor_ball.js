  var canvas;
  var context;
  var scale;
  var balls=[];
  var sma=[];
  var cloud;
  var big_ball;
  var starNum = 0;
  var num=0;
  var nowT;
  var lastT;
  var now;
  var pipeline=new Image();
  var bgr_0 =new Image();
  var cloud_1 =new Image();
    pipeline.src='src/2_p.png';
    bgr_0.src='src/1_0.jpg';
    cloud_1.src='src/p2b_c.png';
  var date_0=0;
  var date_1=-1;
  var tch=false;
  var p_n=2;
  var fr_src=['src/f1_03.png','src/f2_03.png','src/f3_03.png'];
  var pipeline_1=new Image();
    pipeline_1.src='src/2_p_1.png'

  function go(){
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    canvas.width = 640;
    canvas.height = 1040;
    for (var i = 0; i < 5; i++) {
      var obj=new Ball();
        sma.push(obj);
        sma[i].sma_init();
    }
    clearInterval(set);
    var set=setInterval(function(){
      num += 1;
      for (var i = starNum; i < num; i++) {
        var obj=new Ball();
        balls.push(obj);
        balls[i].init();
      }
      if (num==10){
        clearInterval(set)
      }else{
        starNum = num;
      }  
    },100)
    big_ball=new Ball();
    big_ball.big_init();
    cloud=new Ball();
    cloud.cloud_init();
    lastT=Date.now();
    drawFrame();
  }

  function drawFrame(){
    if (tch||date_1<0) {
      window.requestAnimationFrame(drawFrame)
    }
    var now=Date.now();
    nowT=now-lastT;
    balls.sort(function(a,b){
    return Math.abs(a.width)-Math.abs(b.width)});
    if (nowT>30) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      if (p_n==2) {
        drawball();
      }
      if (p_n==3) {
        draw_0();
      }
      lastT=now;
      date_1=0;
    }
  }

            
              