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


// --- gnavの動き --------------------------------- //
$(function(){
    $(".gnav_2nd").hide();
    $(".gnav_1st_stage > li").mouseenter(function(){
        $("ul:not(:animated)",this).show();
    }).mouseleave(function(){
        $("ul",this).slideUp("fast");
    })
})


// --- new_itemのスライドショー --------------------- //
$(function(){
    
	var interval = 3500; 
	$('.slideshow_pic').each(function(){

        $('.slideshow_pic').each(function(){
            $("img",".slideshow_pic").css("margin-left",-1*(parseInt($("img",".slideshow_pic").width()/2)));
        console.log(parseInt($("img",".slideshow_pic").width()/2));
        })

        var container = $(this);  // このthisは、slideshow_pic
		function switchImg(){
			var images = container.find('img');
			var first = images.eq(0);
			var second = images.eq(1);
			first.appendTo(container).fadeOut(800); 
			second.fadeIn(800);
		}
		setInterval(switchImg, interval);
	});
});