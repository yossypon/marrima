// --- top_partsの動き(スクロールイベント) ---------------------------------------------------------------------------- //
   // 上から30px以下の間は何もしない、30px以上進んだらposition:fixed;でtop:0;固定にする
$(function(){
    $(".top_parts").css({"position": "relative"});
    $(window).scroll(function(){        
        if($(this).scrollTop() < 30){
            $(".top_parts").css({"position": "relative"});
        }else{
            $(".top_parts").css({"position":"fixed","top":0});
        }
    })
})


// --- gnavの動き --------------------------------------------------------------------------------------------------- //
    // リサイズでやる
    $(window).on('load resize', function(){
        $(".gnav_2nd").hide();
        var w = $(window).width();
        var x = 801; // 800pxがFireHD8の画面サイズ
        if(w >= x){
            $(".gnav_1st_stage > li").mouseenter(function(){
                $("ul:not(:animated)",this).show();
            }).mouseleave(function(){
                $("ul",this).slideUp("fast");
            })
        }else{
            $(".gnav_1st_stage > li").mouseenter(function(){
                $("ul:not(:animated)",this).hide();
        })
        }
    })


// --- member_menuの動き ----------------------------------------------------------------------------------------------- //
// ハンバーガーをクリックしたら１秒後にバツ印になる
$(function(){
    $(".head_face_hamburger_menu").click(function(){
        $(".head_face_hamburger_menu .middle").css("background","rgba(51, 51, 51, 0)");
        $(".head_face_hamburger_menu .middle").css("transition-delay","1s");
        $(".head_face_hamburger_menu .top").css("transform","rotate(-45deg) translateY(0px)");
        $(".head_face_hamburger_menu .top").css("transition-delay","1s");
        $(".head_face_hamburger_menu .bottom").css("transform","rotate(45deg) translateY(0px)");
        $(".head_face_hamburger_menu .bottom").css("transition-delay","1s");
    })
})

// ハンバーガーをクリックしたら左からメニューを持ってくる
$(function(){
    $(".head_face_hamburger_menu").click(function(){
        $(".top_parts").css("margin-left","280px"); // margin-rightはだめ（自分が動きたいときはmargin-left）
        $(".top_parts").css("transition",".5s");
        $("#glayLayer").css("margin-left","280px");
    })
})

// グレーレイヤーかける、クリックしたら消す、ハンバーガー戻すなど
$(function(){
    $("body").append("<div id='glayLayer'></div>");
    $("#glayLayer").click(function(){
        $(this).hide()
        $(".top_parts").css("margin-left","0px");
        $(".head_face_hamburger_menu .middle").css("background","#5BBAC7");
        $(".head_face_hamburger_menu .top").css("transform","rotate(0deg) translateY(-1.2rem)");
        $(".head_face_hamburger_menu .bottom").css("transform","rotate(0deg) translateY(1.2rem)");
    });
    $(".head_face_hamburger_menu").click(function(){
        setTimeout(function(){
            $("#glayLayer").fadeIn();
        },500);
    })
})

//上から30pxの間は、メニューを上に30px上にあげる
$(function(){
    $(".member_menu").css("top","-30px");
    $(window).scroll(function(){        
        if($(this).scrollTop() < 30){
            $(".member_menu").css("top","-30px");
        }else{
            $(".member_menu").css("top","0px");
        }
    })
})


// いま出品者の画面だけになってるから会員登録と通常会員のページ展開は別途作る必要あり。

// --- new_itemのスライドショー （画像）------------------------------------------------------------------------------------ //
$(window).on('load resize', function(){
    var timer = false;
        if (timer !== false){
            clearTimeout(timer);
        }
    timer = setTimeout(function(){
        $(".slideshow_pic").each(function(){

            $("img",this).each(function(){
                $(this).css("margin-left",-1*(parseInt($(this).width()/2)));
                //console.log(parseInt($(this).width()/2));
            })
        })
    },200);
})
    // 上の方法で幅の半分の長さを取得しているが、パソコン画面でリサイズした際に値を新しく取得するわけではないので、自動で新しく値を取得させるには専用の記述が必要。（これはかなりCPU喰うらしい）スマホの画面、タブレットの画面などそれぞれの端末で開いた際の表示は問題ない。問題なのは、PCで閲覧中に画面をリサイズされた場合。

$(window).on('load', function(){
	var interval = 3500; 
	$('.slideshow_pic').each(function(){

        var container = $(this);  // このthisは、slideshow_pic
		function switchImg(){
			var images = container.find('img');
			var first = images.eq(0);
			var second = images.eq(1);
			first.appendTo(container).fadeOut(800); 
			second.fadeIn(800);
		}
		setInterval(switchImg, interval);
	})
})


// --- new_itemのスライドショー （文字）------------------------------------------------------ //
$(function(){
    var interval = 3500; 
	$('.slideshow_p').each(function(){

        var paragraph = $(this);
		function switchText(){
			var images1 = paragraph.find('p');
			var first1 = images1.eq(0);
			var second1 = images1.eq(1);
			first1.appendTo(paragraph).fadeOut(800); 
			second1.fadeIn(800);
		}
		setInterval(switchText, interval);
	})
})