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

// --- ここから -------------------------------------------------------------------------------------------------- //

// タブ
$(function(){
    $("#tab li a").click(function(){
        $("#tab li a").removeClass();
        $(this).addClass("selected");
    });

    // ぴったりのところに飛べるようにコントロールしたい → オフセットで動いた長さを測って、その数値からヘッダーの長さを引くことで、位置調整。
    $('#tab li a').click(function(){
        var myOffset = $($(this).attr('href')).offset().top;
        var space = -80;
        $('html,body').animate({ scrollTop:myOffset + space}, 500);
        return false;
    });
    
    // 現在地をタブに色付けしてわかるようにしたい → 付いた色を自動で消えるように　setTimeout使った → 🔥 スマホで効かない
    $(window).scroll(function () {
        setTimeout(function(){
        if ($(this).scrollTop() > 0) {
            $("#tab li a").removeClass();
        }
    },1500);
    });
});


// 商品をもっと表示
$(function(){
    $(".list_more").css("display","none");
    $(".list_more_btn").click(function(){
        $(".list_more").css("display","flex");
        $(this).css("display","none");
    })
})



// レビューを表示①②
$(function(){
    $(".review_more_2").css("display","none");
    $(".review_more_1").click(function(){
        $(".review_second").css("display","block");
        $(".review_more_1").css("display","none");
        $(".review_more_2").css("display","block");
    })
    $(".review_more_2").click(function(){
        $(".review_third").css("display","block");
        $(".review_more_2").css("display","none");
    })
})