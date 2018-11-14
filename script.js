// --- top_partsの動き(スクロールイベント) ---------- //
// 上から30px以下の間は何もしない、30px以上進んだらposition:fixed;でtop:0;固定にする
$(function(){
    $(window).scroll(function(){        
        if($(this).scrollTop() < 30){
            $(".top_parts").css({"position": "static"});
        }else{
            $(".top_parts").css({"position":"fixed","top":0});
        }
    })
})


// --- gnavの動き --------------- //
$(function(){
    $(".gnav_2nd").hide();
    $(".gnav_1st_stage > li").mouseenter(function(){
        $("ul:not(:animated)",this).show();
    }).mouseleave(function(){
        $("ul",this).slideUp("fast");
    })
})


