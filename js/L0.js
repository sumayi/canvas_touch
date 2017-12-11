	var isHuxi = 1;
	var showNum = 0;
	var JDopen =1;
	var isVideo = 0;
	var video = '';
	var video1 = '';
	var isT = 0;
	var pre=true;
	var info_is_show = 0;
	var WindowW = $(window).width();
	var WindowH = $(window).height();
	var p1_num=0;
	$(function(){
		$(".body,.P").css({"height":WindowH});
		if(WindowW <= WindowH){
			$(".HP_TS").css({zIndex:-1,opacity:0});
		}else{
			$(".HP_TS").css({opacity:1,zIndex:11001});
		}
		goLoading();
	});
	var logdingNum = 0;
	// 高度为100时停止
	var loadingStopNum = 70;
	// 速度越大越慢
	var loadSpeed = 150;
	var loa_num=0;
	function goLoading(){
		loading();
		var set=setInterval(function(){
			loa_num+=1;
			$('.oa1').find('img').eq(loa_num-1).attr("class"," ");
			$('.oa1').find('img').eq(loa_num).attr("class","show");
			if (loa_num==5) {
				clearInterval(set)
				// $('.oa1').transition({marginTop:370}, 2000, 'linear',function(){
				$("#loading,#loadingImg").transition({opacity:1}, 500, 'linear',function(){
					$("#loading,#loadingImg").css({"display":"none"});
					// go();

					// $(".p1_4").transition({marginTop: 0}, 800, 'linear',function(){
					// 	$('.p1_up').show();
					// 	$('.p1_up').addClass('DH_Rotate_3')
					// });
				})
			// })
			}
		},500)
	}
// #######################横竖屏
	var IsPC = 0;
	var system = { 
		win: false, 
		mac: false, 
		xll: false, 
		ipad:false 
	}; 
	//检测平台 
	var p = navigator.platform; 
	system.win = p.indexOf("Win") == 0; 
	system.mac = p.indexOf("Mac") == 0; 
	system.x11 = (p == "X11") || (p.indexOf("Linux") == 0); 
	system.ipad = (navigator.userAgent.match(/iPad/i) != null)?true:false; 
	//跳转语句，如果是手机访问就自动跳转到wap.baidu.com页面 
	if (system.win || system.mac || system.xll||system.ipad) { 
		IsPC = 1;
	}
function hengshuping(){
	// WindowW = $(window).width();
	// WindowH = $(window).height();
	// $("body").css({"width":WindowW});
    if(window.orientation==180||window.orientation==0){
    	pre=false;
    	$(".body").css({"height":WindowH});
       $(".HP_TS").css({zIndex:-1,opacity:0});
    }
    if(window.orientation==90||window.orientation==-90){
    	pre=true;
    	$(".body").css({"height":WindowH});
    	$("html,body").animate({scrollTop:$("body").offset().top},10);
        $(".HP_TS").css({opacity:1,zIndex:11001});
    }
}
//兼容写法
window.addEventListener("onorientationchange" in window ? "orientationchange": "resize", hengshuping, false); 

// #######################
var load_img = [];
for (var i = 0; i < 7; i++) {
	console.log(i)
	if (0<i&&i<4) {
		load_img.push('./images/p1_'+i+'_0.png');
		load_img.push('./images/p1_r'+i+'.png');
		load_img.push('./src/f'+i+'_03.png');
		load_img.push('./images/p1_'+i+'('+i+').png');
	}
	if(i<4){
		load_img.push('./src/p2a_'+i+'.png');
	}
	if (i>0&&i<6) {
		load_img.push('./images/'+i+'_03.png');
	}
	if (i>1) {
		load_img.push('./src/draw_2_'+i+'.png');
	}
}
load_img.push('./images/p4_0.png');
load_img.push('./images/p4_1.png');
load_img.push('./src/1_0.jpg');
load_img.push('./src/draw_2_1.jpg');
load_img.push('./src/draw_3_0.jpg');
load_img.push('./src/2_p.png');
load_img.push('./src/draw_2_a.png');
load_img.push('./src/draw_2_b.png');
load_img.push('./src/draw_2_c.png');
load_img.push('./src/draw_3.png');
load_img.push('./src/p2_1_02.png');
load_img.push('./src/p2a_a.png');
load_img.push('./src/p2_1.jpg');
var load_img_total = load_img.length;
var load_img_progress=0;
function loading() {
    jQuery.imgpreload(load_img, {
        each: function () {
                load_img_progress++;
                // Math.ceil(x) -- 返回大于等于数字参数的最小整数(取整函数)，对数字进行上舍入
                // Math.floor(x)--返回小于等于数字参数的最大整数，对数字进行下舍入
                var percent = Math.ceil(load_img_progress / load_img_total * 100);  
                // $('.load-w').html(percent + '%');
        },
        all: function () {
        	$('.p1_1').append(' <img src="images/p1_1(2).png" class="p1_i1 p1_i_1" /><img src="images/p1_1(3).png" class="p1_i1 p1_i_1" /><img src="images/p1_1_0.png" style="width: 100%;opacity: 0;" class="p1_i2"/>')
            $('.p1_2').append(' <img src="images/p1_2(2).png" class="p1_i1 p1_i_2" /><img src="images/p1_2(3).png" class="p1_i1 p1_i_2" /><img src="images/p1_2_0.png" style="width: 100%;opacity: 0;" class="p1_i2"/>')
            $('.p1_3').append('<img src="images/p1_3(2).png" class="p1_i1 p1_i_3" /><img src="images/p1_3(3).png" class="p1_i1 p1_i_3" /><img src="images/p1_3_0.png" style="width: 100%;opacity: 0;" class="p1_i2"/>')
            $('.p1').append('<div class="p1_r1"><img src="images/p1_r1.png" style="opacity: 0;" /></div><div class="p1_r2"><img src="images/p1_r2.png" style="opacity: 0;" /></div><div class="p1_r3"><img src="images/p1_r3.png" style="opacity: 0;" /></div><div class="p1_5" onclick="p1_5()"><img src="images/p2_4_01.png" style="opacity: 1;" /></div>')
            // $('.p3').append(' <video id="vid_1" x5-video-player-type="h5" x5-video-player-fullscreen="true" playsinline webkit-playsinline style="width: 100%;height: 1100px;object-fit: fill; object-position:0px 0px;"><source src="images/v1.mp4" type="video/mp4"></video>')
            $('.p4').append('<img src="images/p4.jpg" class="show"/><img src="images/p4_0.png" class="p4_0"/><img src="images/p4_1.png" class="show" style="z-index: 2" /><div class="p4_1"><img src="images/p4_a.png" class="show"/></div><div class="p4_2"><img src="images/p4_b.png" class="show"/></div><div class="p4_3"><img src="images/p4_c.png" class="show"/></div><div class="p4_4"><img src="images/p4_d.png" class="show"/></div><div class="p4_5"><img src="images/p4_e.png" class="show"/></div>')
            clearInterval(set1)
            set1=setInterval(function(){
            	if (set_num>2){
            		set_num=0;
            	}
            	$('.p1_i_3').eq(set_num).addClass('show');
            	$('.p1_i_1').eq(set_num).addClass('show');
            	$('.p1_i_2').eq(set_num).addClass('show');
            	set_num2=set_num-1;
            	if(set_num2==-1){
            		set_num2=2;
            	}
            	$('.p1_i_3').eq(set_num2).removeClass('show');
            	$('.p1_i_1').eq(set_num2).removeClass('show');
            	$('.p1_i_2').eq(set_num2).removeClass('show');
            	set_num+=1;
            },700)
        	
        }
    });
}
var set_num=0;
var set_num2;
var set1;
	function videoK(){
		video = document.getElementById('video');
		if (video.paused){
			$("#videoM").html('<img src="images/sound.png" class="show"/>');
			$("#videoM").addClass("DH_Rotate_4");
			video.play();
			isVideo = 1;
		}else{
			$("#videoM").html('<img src="images/sound_off.png" class="show"/>');
			$("#videoM").removeClass("DH_Rotate_4");
			video.pause();
			isVideo = 0;
		}
	}
	function p1_4(){
		$(".p1_4").transition({marginTop: -460}, 800, 'linear',function(){
			p1_num=1;
			$('.yun').find('img').addClass('show')
			$('.p1_up').hide();
		})
	}
	var p1_go=false;
	function show_r(a,n,abj){
		if (p1_num>0) {
			p1_num+=n;
			abj.hide();
			$(".p1_"+a+"").find('.p1_i2').transition({opacity:1}, 300, 'linear',function(){
				$(".p1_r"+a+"").find('img').transition({opacity:1}, 800, 'linear');
				$(".p1_"+a+"").attr('data-1','1')
			});
			$(".p1_"+a+"").find('.p1_i1').transition({opacity:0}, 300, 'linear',function(){
				if ($(".p1_1").attr('data-1')==1&&$(".p1_2").attr('data-1')==1&&$(".p1_3").attr('data-1')==1) {
					$(".p1_5").transition({marginTop: 0}, 800, 'linear')
					clearInterval(set1);
					p1_go=true;
					$('.p1_up').show();
				}
			});
		}
	}
	function p1_5(){
		if (p1_go) {
			$(".p1").css({zIndex:999});
			$(".p2").css({zIndex:1000});
			$(".p2").transition({opacity: 1}, 800, 'linear')
			// draw_p1()
			$(".p1").transition({'opacity':0}, 800, 'linear',function(){
				go();
				$('#video').attr('src','./images/bgm2.mp3');
				$('#video')[0].play();
				$('.p1').hide();
			})
		}
	}
	function go_p3(){
		$('#vid_1').css({opacity:1,zIndex:5})
        $('#vid_1')[0].play();
        $("#vid_1")[0].addEventListener('play',function(){
        	videoK();
        	$('.can_go').hide();
        	$("#canvas").transition({opacity:0}, 500, 'easeInQuad');
        	$(".p2_i").css("opacity",0); 
        })
        $("#vid_1")[0].addEventListener('ended',function(){
        	$("#vid_1").remove();
        	$(".p2_i").css("opacity",1);
			go_p4()
		})
	}
	function go_p4(){
		$(".p2").css({zIndex:999});
        $(".p4").css({zIndex:1000});
        $(".p2").transition({opacity:0}, 800, 'easeInQuad',function(){

        });
        $(".p4").transition({opacity:1}, 800, 'easeInQuad',function(){
        	$(".p4_3").addClass('DH_Rotate')
			$(".p4_3").animate({marginTop: 405}, 1200, 'easeOutBounce',function(){
				$(".p4_4").transition({'transform': 'scale(1)'}, 800, 'linear',function(){
					$('.p4_2').transition({'transform': 'scale(1)'}, 800, 'easeOutBack',function(){})
					$('.p4_0').transition({opacity: 1}, 1000, 'linear',function(){})
				});
			});
        });
	}
	
		/*touch*/
				var startY = 0;
				var startX = 0;
				var endY = 0; 
				var endX = 0; 
                var yStart = 0; 
                var XStart = 0; 
                var yEnd = 0; 
                var xEnd = 0; 
				var Move = 0;
                //touchstart事件  
                function touchSatrtFunc(evt) {  
                    try  
                    {  
                        var touch = evt.touches[0]; 
                        xStart = Number(touch.pageX); 
                        yStart = Number(touch.pageY);   
                        startX = xStart;  
                        startY = yStart;  
                    }  
                    catch (e) {  
                        // alert('touchSatrtFunc：' + e.message);  
                    }  
                }  

                //touchmove事件，这个事件无法获取坐标  
                function touchMoveFunc(evt) {  
                    try  
                    {  
                       var touch = evt.touches[0]; 
                        yEnd = Number(touch.pageY); 
                        xEnd = Number(touch.pageX);
                        if (pre==true) {
                        	evt.preventDefault();
                        } 
						endX = xEnd;
						endY = yEnd;
						Move = 1;
                    } 
                    catch (e) {  
                        // alert('touchMoveFunc：' + e.message);  
                    }  
                }  
                //touchend事件  
                function touchEndFunc(evt) {  
               	try { 
						d = startY - endY;
						if(d < 0 && Math.abs(d) > 200 && Move != 0) {
							console.log(1)
							
						}
						if(d > 0 && Math.abs(d) > 200 && Move != 0){
							p1_4();
							p1_5()
						}
						startY = 0;
						endY = 0;
						startX = 0;
						endX = 0;
						Move = 0;
                    } 
                    catch (e) {  
                        // alert('touchEndFunc：' + e.message);  
                    }  
                }  
      
                //绑定事件  
                function bindEvent() {  
                    document.addEventListener('touchstart', touchSatrtFunc, false);  
                    document.addEventListener('touchmove', touchMoveFunc, false);  
                    document.addEventListener('touchend', touchEndFunc, false);  
                }  
				
				//解除绑定事件  
                function removeBindEvent() {  
                    document.removeEventListener('touchstart', touchSatrtFunc, false);  
                    document.removeEventListener('touchmove', touchMoveFunc, false);  
                    document.removeEventListener('touchend', touchEndFunc, false);  
                } 
                //判断是否支持触摸事件  
                function isTouchDevice() {
                	$(".videoM").click(function(){
                		videoK();
                	})
                	videoK();
                    try {  
                        document.createEvent("TouchEvent");  
                       // alert("支持TouchEvent事件！");  
      
                        bindEvent(); //绑定事件  
						
                    }  
                    catch (e) {  
                        //alert("不支持TouchEvent事件！" + e.message);  
						//alert(e.message);  
                    }  
                }  
      
                window.onload = isTouchDevice; 


