var Ball= function(){
    this.r;
    this.a;
    this.img_width;
    this.img_height;
    this.width;
    this.height;
    this.x;
    this.y;
    this.intx;
    this.inty;
    this.vr;
    this.nr;
    this.rotation;
    this.scaleX;
    this.scaleY;
    this.drawx;
    this.drawy;
    this.xpos;
    this.ypos;
    this.zpos;
    this.vx;
    this.vy;
    this.vt;
    this.vsw;
    this.vsh;
    this.time;
    this.snum;
    this.img;
    this.remove;
}
Ball.prototype.init=function(){
    this.img = new Image();
    this.img.src=fr_src[Math.floor(Math.random()*5)];
    // this.img_width = this.img.width/3;
    // this.img_height = this.img.height/3;
    this.img_width = 100;
    this.img_height =100;
    this.r =Math.ceil(Math.sqrt(Math.pow(canvas.width/2,2)+Math.pow(canvas.height/2,2)));
    this.r = Math.random()*9999+ 200;
    this.a = Math.random()*360;
    this.rotation= this.a*Math.PI/180;
    if(this.a == 0 || this.a == 90 || this.a == 180 || this.a == 270 || this.a == 360){
        this.a = Math.random()*360;
    }
    this.width = this.img_width * (canvas.width/2/this.r*5);
    this.height = this.img_height * (canvas.height/2/this.r*5);
    this.intx = Math.cos(this.a*Math.PI / 180) * this.r;
    this.inty = Math.sin(this.a*Math.PI / 180) * this.r;
    this.x = canvas.width/2+this.intx;
    this.y = canvas.height/2+this.inty;
    this.drawx = 0;
    this.drawy = 0;
    this.scaleX = 0;
    this.scaleY = 0;
    this.xpos = 0;
    this.ypos = 0;
    this.zpos = 0;
    this.time = 0;
    this.remove=1;
    this.vr = 1;
    this.nr = this.r;
    this.vt = Math.floor(this.r/this.vr);
    this.vsw = this.width/Math.floor(this.vt);
    this.vsh = this.height/Math.floor(this.vt);
}
var D_width=0;
Ball.prototype.update=function(){
    this.vr = this.width/15; 
    this.width = Math.abs((this.nr-this.vr)*Math.sin(this.a*Math.PI / 180)*0.9);
    this.height = this.width/this.img_width*this.img_height;
    //this.vr = this.vr*0.99;
    this.nr -= this.vr; 
    this.remove=D_width;
    if (this.nr<70) {
        date_0=1;
    }

    if(this.nr < this.remove || this.nr<1){
        this.init();
        return false;
    }else{
        this.x = Math.floor(canvas.width/2 + Math.cos(this.a*Math.PI / 180) * (this.nr));
        this.y = Math.floor(canvas.height/2 + Math.sin(this.a*Math.PI / 180) * (this.nr));
        this.drawx = this.x - this.width/2;
        this.drawy = this.y - this.height/2;
    }
    //if (this.x>canvas.width/2-1&&this.x<canvas.width/2+1) {this.init();return false;}
    //if (this.y>canvas.height/2-1&&this.y<canvas.height/2+1) {this.init();return false;}
    this.draw();
}
Ball.prototype.draw = function(){
    context.save();
    context.translate(this.x,this.y);
    context.rotate(this.rotation);
    context.translate(-this.x,-this.y)
    context.drawImage(this.img,0,0,this.img.width,this.img.height,this.drawx,this.drawy,this.width,this.height);
    context.restore();
    context.beginPath();
}
Ball.prototype.big_init= function(){
    this.img_width = 8;
    this.img_height = 8.89;
    this.width = 8;
    this.height = 8.89;
    this.vr = 1.1;
    this.time=0;
    this.snum=1;
    this.vt=0;
    this.vr =1;
    this.nr =1;
    this.vsw = 1.1;
    this.vsh = 0;

}
Ball.prototype.big_update=function(){
    
    this.vsh>1?this.vsh=1:this.vsh+=0.1;
    this.vsw<1.07?this.vsw=1.07:this.vsw-=0.05;
    this.snum=this.snum*this.vsw;
    
    if (this.width>=100) {
        this.vt<1?this.vt+=0.5:this.vt=1;
        this.nr=this.nr*1.06;
            
    }
    if (this.width>=2490||this.height>=2767) {
        if (this.vr<0) {
            // $(".p2").hide();
            p_n=3;
            // tch=false;
        }else{
            this.vr-=0.03;
        }
        $("#canvas").css("opacity",this.vr);
        date_0=2;
    }
    this.width+=this.snum;
    D_width = this.width/60;
    this.height=this.width/this.img_width*this.img_height;
    big_ball.big_draw();   
}
Ball.prototype.big_draw = function(){
    // 牛
    context.save();
    context.globalAlpha=Math.abs(this.vt);
    context.drawImage(pipeline_1,0,0,pipeline_1.width,pipeline_1.height,canvas.width/2-(39.1/2)*this.nr,canvas.height/2-13.6-30/2*this.nr,39.1*this.nr,13.6*this.nr);
    context.restore();

    // 管道
     context.save();
    context.globalAlpha=Math.abs(this.vsh);
    context.drawImage(pipeline,0,0,pipeline.width,pipeline.height,canvas.width/2-this.width/2,canvas.height/2-this.height/2,this.width,this.height);
    context.restore();
    
}
Ball.prototype.cloud_init=function(){
    this.img_width = 6.4;
    this.img_height = 10.4;
    this.width = 640;
    this.height = 1040;
    this.vr = 1.1;
    this.time=0;
    this.snum=2;
    this.vt=0.2;
}
Ball.prototype.cloud_update=function(){
    this.vt+=0.005;
    this.snum=this.snum*1.01;
    this.width+=1*this.snum;
    this.height=this.width/this.img_width*this.img_height;
    cloud.cloud_draw();    
}
Ball.prototype.cloud_draw=function(){
    context.drawImage(bgr_0,0,0,bgr_0.width,bgr_0.height,canvas.width/2-this.width/2,canvas.height/2-this.height/2,this.width,this.height);
}
Ball.prototype.sma_init=function(){
    this.img = new Image();
    this.img.src='src/draw_2_c.png';
    this.x = canvas.width/2-this.img.width/2+290;
    this.y = canvas.height-this.img.height-490;
    this.width = 31;
    this.height = 81;
    this.time=0;
    this.snum=1;
    this.vt=arr_sma[num_a];
    gave_num();
    this.time=380;
}
var arr_sma=[190,290,390];
var num_a=-1;
var tre;
function gave_num(){
    num_a++;
}
Ball.prototype.sma_update=function(){
    this.time+=1.5
    this.sma_draw();
    if (this.x>this.time) {
        this.x = (canvas.width/2-31/2*draw_4_d6+this.vt)*draw_4_d7;
        this.y = (canvas.height-75*draw_4_d7-490);
    }else{
        this.img.src='src/draw_2_c1.png'
        this.y-=1
        this.x-=2
        this.snum<=0?this.snum=0:this.snum-=draw_5_d5;
        tre=this.snum;
    }
    this.width=31*draw_4_d7;
    this.height=81*draw_4_d7;
}
Ball.prototype.sma_draw=function(){
    context.save();
    context.globalAlpha=Math.abs(this.snum);
    context.drawImage(this.img,0,0,this.img.width,this.img.height,this.x,this.y,this.width,this.height);
    context.restore();
}


function drawball() { 
   cloud.cloud_update();
    date_0>0?big_ball.big_update():big_ball.big_draw();
    for (var i = 0; i < num; i++) {
        balls[i].update();
    }
}