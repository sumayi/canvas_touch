            var canvas;
            var context;
                vpX = 0,
                vpY = 0,
                vz = 60,
                fl = 700,
                fl_big = 1000;
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
            var two_bottle=new Image();
            var date_0=0;
            var date_1=-1;
            var tch=false;
            var p_n=2;
            var fr_src=['src/f1_03.png','src/f2_03.png','src/f3_03.png','src/f3_04.png','src/f3_05.png'];
            var pipeline_1=new Image();
              pipeline_1.src='src/2_p_1.png'
            function go(){
              canvas = document.getElementById('canvas');
              context = canvas.getContext('2d');
              canvas.width = 640;
              canvas.height = 1040;
              // fruits.src=fr_src[Math.floor(Math.random()*3)];
              pipeline.src='src/2_p.png';
              bgr_0.src='src/1_0.jpg';
              
              cloud_1.src='src/p2_1_02.png';
              
              for (var i = 0; i <4; i++) {
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
                if (num==20){
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
              // drawFrame_0();
              context.drawImage(bgr_0,0,0,bgr_0.width,bgr_0.height,canvas.width/2-bgr_0.width/2,canvas.height/2-bgr_0.height/2,bgr_0.width,bgr_0.height);
            }

            // var drawFrame_0_1=1,drawFrame_0_2=true;
            // function drawFrame_0(){
            //   console.log(drawFrame_0_1)
            //     if (drawFrame_0_2) {
            //       window.requestAnimationFrame(drawFrame_0)
            //     }
            //     if (drawFrame_0_1>200) {
            //       drawFrame_0_1-=1
            //     }
            //     if (drawFrame_0_1<0) {
            //         drawFrame_0_1+=1
            //       }
            //     var now=Date.now();
            //     nowT=now-lastT;
            //     if (nowT>30) {
            //       context.drawImage(bgr_0,0,0,bgr_0.width,bgr_0.height,canvas.width/2-bgr_0.width+drawFrame_0_1/2,canvas.height/2-bgr_0.height+drawFrame_0_1/2,bgr_0.width+drawFrame_0_1,bgr_0.height+drawFrame_0_1);
            //       lastT=now;
            //     }
            // }

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
                    draw_0_d5>5?draw_0_d5=0:Math.floor(draw_0_d5 * 100) / 100 +0.2;
                    if(draw_0_d5%1 == 0) {
                      draw_0_1.src='src/p2a_'+draw_0_d5+'.png';
                    }
                  }
                  if (p_n==3) {
                    draw_0();
                  }
                  lastT=now;
                  date_1=0;
                  
                }
            }

          
            var draw_0_1=new Image();
            var draw_0_2=new Image();
            var draw_0_3=new Image();
            var draw_0_4=new Image();
            var draw_0_5=new Image();
            draw_0_1.src='src/p2a_0.png'//灌奶
            draw_0_2.src='src/p2a_a.png'//奶瓶
            draw_0_3.src='src/p2_b.png'
            draw_0_4.src='src/p2a0_0.png'
            draw_0_5.src='src/p2a0_p.png';
            var draw_2_1=new Image();
            var draw_2_2=new Image();
            var draw_2_3=new Image();
            var draw_2_4=new Image();
            var draw_2_5=new Image();
            var draw_2_6=new Image();
            var draw_2_7=new Image();
            var draw_2_8=new Image();
            var draw_2_9=new Image();
            var draw_2_10=new Image();
            var draw_2_11=new Image();
            var draw_2_12=new Image();
            
            draw_2_1.src='src/1_0.jpg';
            draw_2_2.src='src/draw_2_2.png';
            draw_2_3.src='src/draw_2_3.png';
            draw_2_4.src='src/draw_2_4.png';
            draw_2_5.src='src/draw_2_5.png';
            draw_2_6.src='src/draw_2_6.png';
            draw_2_7.src='src/draw_2_a.png';
            draw_2_8.src='src/draw_2_b.png';
            draw_2_9.src='src/draw_2_c.png';
            draw_2_10.src='src/draw_3.png';
            draw_2_11.src='src/yun.png';
            draw_2_12.src='src/draw_3_0.jpg';

            var draw_0_3a=640,
              draw_0_3b=1040,
              draw_0_3c=1,
              draw_0_3d=0,
              draw_0_3e=1,
              draw_0_3f=true,
              draw_0_3g=1,
              draw_0_3h=0,
              draw_0_3i=1,
              draw_0_3j=1;//麦片

            var draw_0_d1=0,draw_0_d2=640,draw_0_d3=1040,draw_0_d4=1,draw_0_d5=0,draw_0_d6=0,draw_0_d7=true,draw_0_d8=1,draw_0_d9=1;
            var draw_2_d1=1,draw_2_d2=1,draw_2_d3=1,draw_2_d4=true,draw_2_d5=1;
            var draw_3_d1=1,draw_3_d2=1,draw_3_d3=1,draw_3_d4=true,draw_3_d5=1;

            var draw_4_d4=true,draw_4_d1=1,draw_4_d2=1,draw_4_d3=1,draw_4_d5=1,draw_4_d6=1,draw_4_d7=1,draw_4_d8=1,draw_4_d9=1,draw_4_d10=1;
            var draw_5_d1=1,draw_5_d2=1,draw_5_d3=0,draw_5_d4=1;draw_5_d5=0.02;//3线透明度
            function draw_0(){
              if (draw_0_d4==1) {
                $("#canvas").css("opacity",1);
                $(".p2").css("background",'#fff');
                $(".p2_i").css("opacity",0.5);   
              }
                  // 背景云
                context.drawImage(draw_2_1,0,0,draw_2_1.width,draw_2_1.height,canvas.width/2-draw_2_1.width*draw_4_d10/2,canvas.height/2-draw_2_1.height*draw_4_d10/2,draw_2_1.width*draw_4_d10,draw_2_1.height*draw_4_d10);
                if (draw_4_d4) {
                          // 光
                  context.save();
                  context.globalAlpha=draw_2_0_a;
                  context.drawImage(draw_2_12,0,0,draw_2_12.width,draw_2_12.height,canvas.width/2-draw_2_12.width/2,canvas.height/2-draw_2_12.height/2,draw_2_12.width,draw_2_12.height);
                  context.restore();
                // 三奶瓶
                  context.save();
                  context.globalAlpha=Math.abs(draw_5_d3);
                  context.drawImage(draw_2_10,0,0,draw_2_10.width,draw_2_10.height,canvas.width/2-draw_2_10.width/2*draw_2_1_a,canvas.height/2-draw_2_10.height/2*draw_2_1_a-draw_2_1_b,draw_2_10.width*draw_2_1_a,draw_2_10.height*draw_2_1_a);
                  context.restore();
                  
                  for (var i = 0; i <4; i++) {
                      sma[i].sma_draw();
                  }
                  // 中转轮
                  context.save();
                  context.globalAlpha= Math.abs(draw_5_d2) ;
                  // 小转轮
                  context.drawImage(draw_2_6,0,0,draw_2_6.width,draw_2_6.height,(canvas.width/2-draw_2_6.width/2*draw_4_d6),canvas.height-draw_2_6.height-450,draw_2_6.width*draw_4_d6*1.1,draw_2_6.height*draw_4_d6*1.1);
                  context.drawImage(draw_2_5,0,0,draw_2_5.width,draw_2_5.height,canvas.width/2-draw_2_5.width/2*draw_4_d5,canvas.height-draw_2_5.height-250-draw_4_d3,draw_2_5.width*draw_4_d5,draw_2_5.height*draw_4_d5);
                  // 中奶瓶
                  context.drawImage(draw_2_8,0,0,draw_2_8.width,draw_2_8.height,canvas.width/2-draw_2_8.width/2*draw_4_d5-110-draw_4_d9*0.1,canvas.height-draw_2_8.height-365+draw_4_d3*0.8,draw_2_8.width*draw_4_d5,draw_2_8.height*draw_4_d5);
                  // 中到大间云
                  context.drawImage(draw_2_4,0,0,draw_2_4.width,draw_2_4.height,(canvas.width/2-draw_2_4.width/2)*draw_2_d1,(canvas.height-draw_2_4.height-150-draw_4_d2*5),draw_2_4.width*draw_4_d5,draw_2_4.height*draw_4_d5);
                  context.restore();

                  // 大转轮
                  context.save();
                  context.globalAlpha=draw_5_d1;
                  context.drawImage(draw_2_3,0,0,draw_2_3.width,draw_2_3.height,canvas.width/2-draw_2_3.width/2,(canvas.height-draw_2_3.height-100*draw_4_d2),draw_2_3.width*draw_4_d1,draw_2_3.height*draw_4_d1);
                  // 大奶瓶
                  context.drawImage(draw_2_7,0,0,draw_2_7.width,draw_2_7.height,(canvas.width/2-draw_2_7.width/2+100)+draw_4_d9*1.01,(canvas.height-draw_2_7.height-190-draw_4_d3),draw_2_7.width*draw_4_d1,draw_2_7.height*draw_4_d1);
                  // 大转轮前云
                  context.drawImage(draw_2_2,0,0,draw_2_2.width,draw_2_2.height,canvas.width/2-draw_2_2.width/2,(canvas.height-draw_2_2.height),draw_2_2.width*draw_4_d1,draw_2_2.height*draw_4_d1);
                  context.restore();
                }
                if (draw_0_3f==false) {
                    draw_4_d9-=5;
                    draw_5_d4<0?draw_5_d4=0:draw_5_d4-=0.02;
                    draw_4_d8=draw_4_d8*1.01
                    for (var i = 0; i < 4; i++) {
                      sma[i].sma_update();
                  }
                }
                

                //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
                if(draw_0_3f==false&&draw_4_d4&&draw_4_d9<-100){
                  draw_4_d10=draw_4_d10*1.002
                  draw_4_d9=draw_4_d9*1.02;
                  if (draw_4_d9<-700) {draw_2()}
                  
                  if (draw_4_d1<3) {
                    draw_4_d1=draw_4_d1*1.02
                    draw_4_d2=draw_4_d2*1.021
                    draw_5_d4<0?draw_5_d4=0:draw_5_d4-=0.03;
                  }else{
                    draw_5_d1=0;
                  }
                  if (draw_4_d3>=85) {
                    draw_5_d2<=0?draw_5_d2=0:draw_5_d2-=0.5;
                    draw_5_d5=0.5;
                  }else{
                    draw_4_d3+=1;
                    draw_4_d5=draw_4_d5*1.015
                  }
                  draw_4_d6=draw_4_d6*1.01;
                  draw_4_d7=draw_4_d7*0.997;
                }
                // 间隔遮挡云
                context.save();
                  context.globalAlpha=Math.abs(draw_5_d4);
                context.drawImage(draw_2_11,0,0,draw_2_11.width,draw_2_11.height,canvas.width/2-draw_2_11.width*draw_4_d8/2,canvas.height/2-draw_2_11.height*draw_4_d8/2,draw_2_11.width*draw_4_d8,draw_2_11.height*draw_4_d8);
                context.restore();
                

                if (draw_0_3f) {
                  // 2燕麦托盘
                  context.save();
                  context.globalAlpha=draw_0_3g;
                  context.drawImage(draw_0_4,0,0,draw_0_4.width,draw_0_4.height,canvas.width/2-draw_0_3a/2*draw_0_3c,canvas.height/2-draw_0_3b/2*draw_0_3c,draw_0_3a*draw_0_3c*1.02,draw_0_3b*draw_0_3c*1.02);
                  // 燕麦奶瓶
                  context.drawImage(draw_0_5,0,0,draw_0_5.width,draw_0_5.height,canvas.width/2-draw_0_5.width*0.7/2*draw_0_3c+5+draw_0_3d*6.5,canvas.height/2-draw_0_5.height*0.7/2*draw_0_3c-30,draw_0_5.width*draw_0_3c*0.7,draw_0_5.height*0.7*draw_0_3c);
                  context.restore();
                  // 夹层云
                  context.save();
                  context.globalAlpha=draw_0_3i;
                  context.drawImage(draw_0_3,0,0,draw_0_3a,draw_0_3b,canvas.width/2-draw_0_3a/2*draw_0_3e,canvas.height/2-draw_0_3b/2*draw_0_3e,draw_0_3a*draw_0_3e,draw_0_3b*draw_0_3e);
                  context.restore();
                }
                if (draw_0_d7==false&&draw_0_3f) {
                  draw_2_d1=draw_2_d1*1.01;
                  draw_2_d2=draw_2_d1*1.02;

                  draw_4_d8=draw_4_d8*1.005

                  draw_0_3j=draw_0_3j*1.001
                  draw_0_3c=draw_0_3c*draw_0_3j;

                  draw_0_3d-=draw_0_3c*0.9;
                  draw_0_3e=draw_0_3e*1.02;
                  draw_0_3h>4?draw_0_3h=0:draw_0_3h=Math.floor(draw_0_3h * 100) / 100 +0.2;
                  if (draw_0_3b*draw_0_3e>1800) {
                    draw_0_3i<0?draw_0_3i=0:draw_0_3i-=0.02;
                  }
                  if (draw_0_3d<=-270) {
                    draw_0_3g-=0.03;
                    if (draw_0_3h%1 == 0) {
                      draw_0_4.src='src/p2a0_'+draw_0_3h+'.png';
                    }
                  }
                }
                if (draw_0_3i<=0) {
                  draw_0_3g=0;
                  draw_0_3f=false;
                }

              if (draw_0_d7) {
                 //1 灌奶器
                context.save();
                context.globalAlpha=draw_0_d9;
                context.drawImage(draw_0_1,0,0,draw_0_1.width,draw_0_1.height,canvas.width/2-draw_0_d2/2,canvas.height/2-draw_0_d3/2,draw_0_d2,draw_0_d3);
                // 奶——奶瓶
                context.drawImage(draw_0_2,0,0,713,draw_0_2.height,canvas.width/2-320*draw_0_d4+draw_0_d6*8,canvas.height/2-draw_0_2.height*draw_0_d4/2+70-draw_0_d6,713*draw_0_d4,395*draw_0_d4);
                // 下云
                context.drawImage(cloud_1,0,0,640,cloud_1.height,-1*draw_0_d4,(canvas.height-cloud_1.height)*draw_0_d4,cloud_1.width*draw_0_d4,cloud_1.height*draw_0_d4);
                context.restore();
              }
              if (draw_0_d1>=2&&draw_0_d7){
                draw_0_d8=draw_0_d8*1.002
                draw_0_d4=draw_0_d4*draw_0_d8;
                
                draw_0_d2=640*draw_0_d4;
                draw_0_d3=1040*draw_0_d4;
                draw_0_d6-=draw_0_d4*0.9;
                draw_0_3e=draw_0_3c=draw_0_3c*1.01;
                draw_0_3h>3?draw_0_3h=0:draw_0_3h=Math.floor(draw_0_3h * 100) / 100 +0.2;
              }            
              if (draw_0_d1>40) {
                draw_0_d1=0;
                draw_0_d1=0;
                draw_0_d7=false;
                draw_0_4.src='src/p2a0_0.png';
              }
            
              
              // 罐牛奶
              if (draw_0_d5<5&&draw_0_d1<2) {
                draw_0_d5=Math.floor(draw_0_d5 * 100) / 100 +0.2;
              }else{
                draw_0_d5=0;
                draw_0_d1+=1;
              }
              if (draw_0_d5%1 == 0) {
                draw_0_1.src='src/p2a_'+draw_0_d5+'.png';
              }
              if (draw_0_3h%1 == 0) {
                if (draw_0_d7)draw_0_4.src='src/p2a0_'+draw_0_3h+'.png';
              }
            }


            // 三奶瓶
             function draw_2(){
                // draw_2_a();

                if (sma[0].snum<=0) {
                  draw_2_b();
                  draw_5_d3+=0.05;
                  // draw_5_d3<0?draw_5_d3=0:draw_5_d3-=0.01;
                }
            }
            // 三奶瓶
             var draw_2_1_a=0.05,draw_2_1_b=100,draw_2_1_c=0.001;
            function draw_2_b(){
              draw_2_1_c=draw_2_1_c*1.03;
              draw_2_1_a+=draw_2_1_c;
              draw_2_1_b<=0?draw_2_1_b=0:draw_2_1_b-=1;

              if (draw_2_10.width*draw_2_1_a>=640||draw_2_10.height*draw_2_1_a>=1040) {
                draw_2_1_a=1;
                draw_2_0_a+=0.02;
                if (draw_2_0_a>=1) {
                  
                  draw_2_0_a=1;
                  p_n=0;
                  draw_4_d4=false;
                }if (draw_2_0_a>0.8) {go_p3();}
              }else{

              }
            }
            var draw_2_0_a=0;
