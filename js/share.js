var shareTitle = '谁是《奔跑吧》给力新成员？';
var shareDesc = '《奔跑吧》开播，来与明星组队寻找新成员！';
var shareLink = 'http://2017svn.infogrworks.com/anmuxi_0/';
var shareImgUrl = shareLink+'images/shareImg.jpg';
var is_ajax_init=false;
function getInit(){
if(!is_ajax_init){
is_ajax_init=true;
	$.ajax({url : 'http://wxmhttt.infogrworks.com/share_common.php',
	type : 'POST',
	cache:false,
	data : { 
	  'ajax' : 1,
	  'fromUrl':encodeURIComponent(document.location)
	},
	dataType : 'jsonp',
	error : function(data){ },
	complete:function(data){is_ajax_init=false;},
	success : function(data){
		if(data){
			wx.config({
			//debug: true,
			appId: data.appId,
			timestamp: data.timestamp,
			nonceStr: data.nonceStr,
			signature: data.signature,
			jsApiList: [
			  'onMenuShareAppMessage',
			  'onMenuShareTimeline',
			  'onMenuShareQQ',
			  'onMenuShareWeibo',
			]
			});
			wx.ready(function () {
			shareInit();
			$("#video")[0].play();
      $("#video")[0].pause();
			});
		}
	}
	});                
}          
}
$(document).ready(function(e) {
    getInit();
});
 
 function shareInit(){
// 2. 分享接口
  // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
  //document.querySelector('#onMenuShareAppMessage').onclick = function () {
    wx.onMenuShareAppMessage({
      title: shareTitle,
      desc: shareDesc,
      link: shareLink,
      imgUrl: shareImgUrl,
      trigger: function (res) {
        //alert('用户点击发送给朋友');
      },
      success: function (res) {
		logShare(1,'朋友');
    	_hmt.push(['_trackEvent', '分享', 'Message','share','朋友']);
      },
      cancel: function (res) {
        //alert('已取消');
      },
      fail: function (res) {
        //alert(JSON.stringify(res));
      }
    });
    //alert('已注册获取“发送给朋友”状态事件');
  //};

  // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
  //document.querySelector('#onMenuShareTimeline').onclick = function () {
    wx.onMenuShareTimeline({
      title: shareDesc,
    //desc:shareDesc,
      link: shareLink,
      imgUrl: shareImgUrl,
      trigger: function (res) {
        //alert('用户点击分享到朋友圈');
      },
      success: function (res) { 
		logShare(2,'朋友圈');
    	_hmt.push(['_trackEvent', '分享','timeline', 'share','朋友圈']);
      },
      cancel: function (res) {
        //alert('已取消');
      },
      fail: function (res) {
        //alert(JSON.stringify(res));
      }
    });
    //alert('已注册获取“分享到朋友圈”状态事件');
  //};

  // 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
  //document.querySelector('#onMenuShareQQ').onclick = function () {
    wx.onMenuShareQQ({
     // title: shareTitle,
      desc: shareDesc,
      link: shareLink,
      imgUrl: shareImgUrl,
      trigger: function (res) {
        //alert('用户点击分享到QQ');
      },
      complete: function (res) {
        //alert(JSON.stringify(res));
      },
      success: function (res) {
		logShare(3,'QQ');
  		_hmt.push(['_trackEvent', '分享','QQ', 'share','QQ']);
      },
      cancel: function (res) {
        //alert('已取消');
      },
      fail: function (res) {
        //alert(JSON.stringify(res));
      }
    });
    //alert('已注册获取“分享到 QQ”状态事件');
  //};
  
  // 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
  //document.querySelector('#onMenuShareWeibo').onclick = function () {
    wx.onMenuShareWeibo({
      //title: shareTitle,
      desc: shareDesc,
      link: shareLink,
      imgUrl: shareImgUrl,
      trigger: function (res) {
        //alert('用户点击分享到微博');
      },
      complete: function (res) {
        //alert(JSON.stringify(res));
      },
      success: function (res) {       
		logShare(4,'微博');
    	_hmt.push(['_trackEvent', '分享','Weibo', 'share','微博']);
      },
      cancel: function (res) {
        //alert('已取消');
      },
      fail: function (res) {
        //alert(JSON.stringify(res));
      }
    });
    //alert('已注册获取“分享到微博”状态事件');
  //};
 }
 
   
/*  function resetShare(data){
    if(data){
    //  shareTitle=data.share_title;
     // shareDesc=data.share_desc;
      shareLink=data.share_link;
     // shareImgUrl=DOMAIN+data.share_picture;  
      shareInit();
  
    }   
  }*/
var is_ajax_logShare=false;
function logShare(class_id,note){
	if(!is_ajax_logShare){
		is_ajax_logShare=true;
	  $.ajax({url : 'index.php',
			type : 'POST',
			cache:false,
			data : {	'action':'share','note' : note,'class_id':class_id},
			dataType : 'json',
		   // jsonpCallback:"success_Callback",
			error : function(data){ },
			complete:function(data){is_ajax_logShare=false;},
			success : function(data){
				 
			}
	   });	
	}
}