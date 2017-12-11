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

            var draw_2_11=new Image();
            draw_2_11.src='src/yun.png';
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
            var draw_5_d1=1,draw_5_d2=1,draw_5_d3=0,draw_5_d4=1;//3线透明度
            var draw_6_d1=1,draw_6_d2=1;
            function draw_0(){
              if (draw_0_d4==1) {
                $("#canvas").css("opacity",1);
                $(".p2").css("background",'#fff');
                $(".p2_i").css("opacity",0.5);   
              }
                 

                
                if (draw_4_d4) {
                   // 背景云
                context.drawImage(draw_2_1,0,0,draw_2_1.width,draw_2_1.height,canvas.width/2-draw_2_1.width*draw_4_d10/2,canvas.height/2-draw_2_1.height*draw_4_d10/2,draw_2_1.width*draw_4_d10,draw_2_1.height*draw_4_d10);
                          // 光
                  context.save();
                  context.globalAlpha=draw_2_0_a;
                  context.drawImage(draw_2_11,0,0,draw_2_11.width,draw_2_11.height,canvas.width/2-draw_2_11.width/2,canvas.height/2-draw_2_11.height/2,draw_2_11.width,draw_2_11.height);
                  context.restore();
                // 三奶瓶
                  context.save();
                  context.globalAlpha=draw_5_d3;
                  context.drawImage(draw_2_10,0,0,draw_2_10.width,draw_2_10.height,canvas.width/2-draw_2_10.width/2*draw_2_1_a,canvas.height/2-draw_2_10.height/2*draw_2_1_a-draw_2_1_b,draw_2_10.width*draw_2_1_a,draw_2_10.height*draw_2_1_a);
                  context.restore();
                  // 小转轮
                  context.save();
                  context.globalAlpha=Math.abs(draw_5_d2);
                  context.drawImage(draw_2_6,0,0,draw_2_6.width,draw_2_6.height,(canvas.width/2-draw_2_6.width/2*draw_4_d6),canvas.height-draw_2_6.height-450,draw_2_6.width*draw_4_d6*1.1,draw_2_6.height*draw_4_d6*1.1);
                  for (var i = 0; i < 5; i++) {
                      sma[i].sma_draw();
                  }
                  // 中转轮
                  
                  context.drawImage(draw_2_5,0,0,draw_2_5.width,draw_2_5.height,canvas.width/2-draw_2_5.width/2*draw_4_d5,canvas.height-draw_2_5.height-250-draw_4_d3,draw_2_5.width*draw_4_d5,draw_2_5.height*draw_4_d5);
                  // 中奶瓶
                  context.drawImage(draw_2_8,0,0,draw_2_8.width,draw_2_8.height,canvas.width/2-draw_2_8.width/2*draw_4_d5-110,canvas.height-draw_2_8.height-365+draw_4_d3*0.099,draw_2_8.width*draw_4_d5,draw_2_8.height*draw_4_d5);
                  // 中到大间云
                  context.drawImage(draw_2_4,0,0,draw_2_4.width,draw_2_4.height,(canvas.width/2-draw_2_4.width/2)*draw_2_d1,(canvas.height-draw_2_4.height-150-draw_4_d2*5),draw_2_4.width*draw_4_d5,draw_2_4.height*draw_4_d5);
                  context.restore();

                  // 大转轮
                  context.save();
                  context.globalAlpha=draw_5_d1;
                  context.drawImage(draw_2_3,0,0,draw_2_3.width,draw_2_3.height,canvas.width/2-draw_2_3.width/2,(canvas.height-draw_2_3.height-100*draw_4_d2),draw_2_3.width*draw_4_d1,draw_2_3.height*draw_4_d1);
                  // 大奶瓶
                  context.drawImage(draw_2_7,0,0,draw_2_7.width,draw_2_7.height,(canvas.width/2-draw_2_7.width/2+100),(canvas.height-draw_2_7.height-190-draw_4_d3),draw_2_7.width*draw_4_d1,draw_2_7.height*draw_4_d1);
                  // 大转轮前云
                  context.drawImage(draw_2_2,0,0,draw_2_2.width,draw_2_2.height,canvas.width/2-draw_2_2.width/2,(canvas.height-draw_2_2.height),draw_2_2.width*draw_4_d1,draw_2_2.height*draw_4_d1);
                  context.restore();
                }

                if(draw_0_3f==false&&draw_4_d4){
                  draw_4_d10=draw_4_d10*1.002
                  draw_2()
                  for (var i = 0; i < 5; i++) {
                      sma[i].sma_update();
                  }
                  if (draw_4_d1<3) {
                    draw_4_d1=draw_4_d1*1.02
                    draw_4_d2=draw_4_d2*1.021
                    draw_5_d4<0?draw_5_d4=0:draw_5_d4-=0.03;
                  }else{
                    draw_5_d1=0;
                  }
                  if (draw_4_d3>=90) {
                    draw_5_d2<0?draw_5_d2=0:draw_5_d2-=0.03;
                  }else{
                    draw_4_d3+=1;
                    draw_4_d5=draw_4_d5*1.01
                  }
                  draw_4_d6=draw_4_d6*1.01;
                  draw_4_d7=draw_4_d7*0.997;
                }

                // 间隔遮挡云
                context.save();
                  context.globalAlpha=Math.abs(draw_5_d4);
                context.drawImage(draw_2_11,0,0,draw_2_11.width,draw_2_11.height,canvas.width/2-draw_2_11.width/2,canvas.height/2-draw_2_11.height/2,draw_2_11.width*draw_4_d8,draw_2_11.height*draw_4_d8);
                context.restore();
                

                if (draw_0_3f) {
                  // 2燕麦托盘
                  context.save();
                  context.globalAlpha=draw_0_3g;
                  context.drawImage(draw_0_4,0,0,draw_0_4.width,draw_0_4.height,canvas.width/2-draw_0_3a/2*draw_0_3c,canvas.height/2-draw_0_3b/2*draw_0_3c,draw_0_3a*draw_0_3c*1.02,draw_0_3b*draw_0_3c*1.02);
                  // 燕麦瓶
                  context.drawImage(draw_0_5,0,0,draw_0_5.width,draw_0_5.height,canvas.width/2-draw_0_5.width*0.7/2*draw_0_3c,canvas.height/2-draw_0_5.height*0.7/2*draw_0_3c-30,draw_0_5.width*draw_0_3c*0.7,draw_0_5.height*0.7*draw_0_3c);
                  context.restore();
                  // 夹层云
                  context.save();
                  context.globalAlpha=draw_0_3i;
                  context.drawImage(draw_0_3,0,0,draw_0_3a,draw_0_3b,canvas.width/2-draw_0_3a/2*draw_0_3e,canvas.height/2-draw_0_3b/2*draw_0_3e,draw_0_3a*draw_0_3e,draw_0_3b*draw_0_3e);
                  context.restore();

                  // 夹层云$$$$$$$$$$$$$$$
                  context.save();
                  context.globalAlpha=Math.abs(draw_6_d2);
                  context.drawImage(draw_2_11,0,0,draw_0_3a,draw_0_3b,canvas.width/2-draw_0_3a/2*draw_6_d1,canvas.height/2-draw_0_3b/2*draw_6_d1,draw_0_3a*draw_6_d1,draw_0_3b*draw_6_d1);
                  context.restore();

                }
                if (draw_0_d7==false&&draw_0_3f) {
                  if (draw_6_d2<1) {
                    draw_6_d2<0?draw_6_d2=0:draw_6_d2-=0.02;
                    draw_2_d1=draw_2_d1*1.01;
                    draw_2_d2=draw_2_d1*1.02;

                    draw_4_d8=draw_4_d8*1.01

                    draw_0_3j=draw_0_3j*1.001
                    draw_0_3c=draw_0_3c*draw_0_3j;
                    draw_0_3e=draw_0_3e*1.02;
                    
                    if (draw_0_3b*draw_0_3e>1800) {
                      draw_0_3i<0?draw_0_3i=0:draw_0_3i-=0.03;
                    }
                  }
                  draw_0_3h>3?draw_0_3h=0:draw_0_3h=Math.floor(draw_0_3h * 100) / 100 +0.2;
                  console.log(draw_0_3h)
                  if (draw_0_3h%1 == 0) {
                      draw_0_4.src='src/p2a0_'+draw_0_3h+'.png';
                  }
                  draw_6_d1=draw_6_d1*1.02
                  draw_6_d2-=0.02;
                }
                if (draw_0_3i<=0) {
                  draw_0_3f=false;
                }
                

              if (draw_0_d7) {
                 //1 灌奶器
                context.save();
                context.globalAlpha=Math.abs(draw_0_d9);
                context.drawImage(draw_0_1,0,0,draw_0_1.width,draw_0_1.height,canvas.width/2-draw_0_d2/2,canvas.height/2-draw_0_d3/2,draw_0_d2,draw_0_d3);
                // 奶——奶瓶
                context.drawImage(draw_0_2,0,0,640,draw_0_2.height,canvas.width/2-308*draw_0_d4,canvas.height/2-draw_0_2.height*draw_0_d4/2+50-draw_0_d6,640*draw_0_d4,439*draw_0_d4);
                // 下云
                context.drawImage(cloud_1,0,0,640,cloud_1.height,-1*draw_0_d4,(canvas.height-cloud_1.height)*draw_0_d4,cloud_1.width*draw_0_d4,cloud_1.height*draw_0_d4);
                context.restore();
              }
              if (draw_0_d1>=2&&draw_0_d7){
                draw_0_d8=draw_0_d8*1.002
                draw_0_d4=draw_0_d4*draw_0_d8;
                draw_0_d6-=draw_0_d4*2;
                draw_0_d2=640*draw_0_d4;
                draw_0_d3=1040*draw_0_d4;

                draw_6_d1=draw_6_d1*1.02
              }             
              if (draw_0_d1>35) {
                draw_0_d9<0?draw_0_d7=false:draw_0_d9-=0.2;
              }
              draw_0_d5>3?draw_0_d5=0:draw_0_d5=Math.floor(draw_0_d5 * 100) / 100 +0.5;
              // 罐牛奶
              draw_0_d1+=1;
              
              if (draw_0_d5%1 == 0) {
                draw_0_1.src='src/p2a_'+draw_0_d5+'.png';
              }
            }


            // 三奶瓶
             function draw_2(){
                // draw_2_a();
                if (tre<=0) {
                  draw_2_b();draw_5_d3+=0.2;
                  draw_5_d3<0?draw_5_d3=0:draw_5_d3-=0.006;
                }
            }
            // 三奶瓶
             var draw_2_1_a=0.2,draw_2_1_b=100,draw_2_1_c=0.001;
            function draw_2_b(){
              draw_2_1_c=draw_2_1_c*1.03;
              draw_2_1_a+=draw_2_1_c;
              draw_2_1_b<=0?draw_2_1_b=0:draw_2_1_b-=1;
              
              if (draw_2_10.width*draw_2_1_a>=960||draw_2_10.height*draw_2_1_a>=1560) {
                draw_2_1_a=1.5;
                
                draw_2_0_a+=0.05;
                if (draw_2_0_a>=1) {
                  p_n=0;
                  draw_4_d4=false;
                  go_p3();
                }
              }
            }
            var draw_2_0_a=0;
