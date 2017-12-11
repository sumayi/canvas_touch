
$(function(){
     $('.p2').on('touchstart',function(evt) {
        removeBindEvent();
        tch=true; 
        // drawFrame_0_2=false;
        drawFrame();
        evt.preventDefault();
        $(".p2").css("background","#000")
        $(".p2_i").removeClass('show')
        // if (p_n==2&&video.paused) {
        //     $('#video')[0].play();
        // }
        $('.can_go').hide();
    });
    $('.p2').on('touchend',function(){
        bindEvent();
        tch=false;
        $('.can_go').show();
    })
    // $('.p3').on('touchstart',function(evt) {
    //     alert(2)
    //     $('#vid_1')[0].play()
    // });
})
