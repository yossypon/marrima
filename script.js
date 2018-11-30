// --- top_partsの動き(スクロールイベント) -------------------------------------------------------------- //
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


// --- gnavの動き -------------------------------------------------------------------------------------- //
    // リサイズでやる
    $(window).on('load resize', function(){
        $(".gnav_2nd").hide();
        var w = $(window).width();
        var x = 801;
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


// --- member_menuの動き ----------------------------------------------------------------------------- //
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
        $(".top_parts").css("margin-left","280px"); 
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


// --- Instagram_Itemsのカルーセル --------------------------------------------------------------------- //
$(function(){
    //ページングの設定
    $("#slide li").each(function(){
        $("#paging").append($("<li></li>").attr("data-img",$("img",this).attr("src")));
    });
    $("#paging li:first-child").addClass("active");
    
    //自動スライドの実行
    var timerId = setInterval(function(){
        $("#nav .next").click();
    },3500);
    
    //自動スライドの制御
    
    $("#slideGalley").hover(function(){
        $("#nav").show();
        clearInterval(timerId);
    },function(){
        timerId = setInterval(function(){
            $("#nav .next").click();
        },3500);
    });
    
    
    
    //右矢印ボタンが押された際の挙動
    $("#nav .next").click(function(){
        $("#slide:not(:animated)").animate({
            "margin-left" : -1*$("#slide li").width()
        },function(){
            $("#slide").css("margin-left","0");
            $("#slide li:first-child").appendTo('#slide');
            $("#paging li.active").removeClass("active");
            $("#paging li[data-img='"+$("#slide li:first-child img").attr("src")+"']").addClass("active")
        });
    });
    
    //左矢印ボタンが押された際の挙動
    $("#nav .prev").click(function(){
        $("#slide:not(:animated)")
            .css("margin-left",-1*$("#slide li").width());
            $("#slide li:last-child").prependTo('#slide');
        $("#slide:not(:animated)")
            .animate({
            "margin-left" : 0
        },function(){
            $("#paging li.active").removeClass("active");
            $("#paging li[data-img='"+$("#slide li:first-child img").attr("src")+"']").addClass("active")
        });
    });
    });



// --- new_itemのスライドショー （画像）------------------------------------------------------------------ //
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


$(window).on('load', function(){
	var interval = 3500; 
	$('.slideshow_pic').each(function(){

        var container = $(this); 
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


// ---- logout --------------------------------------------
$(function(){
    $("#glayLayer").click(function(){
        $(this).hide()
        $(".logout").css("display","none");
    });
    $(".member_logout").click(function(){
        setTimeout(function(){
            $(".logout").css("display","block");
        },200);
    })
})