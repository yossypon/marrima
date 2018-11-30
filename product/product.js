// --- gnavの動き ------------------------------------------------------------------------------------ //
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


// --- member_menuの動き --------------------------------------------------------------------------------- //
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
        $(this).css("display","none");
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



// イメージギャラリー
$(function(){
    $('.thumbnails li').on('click',function(){
        $('.thumbnails li').removeClass('selected');
        $(this).addClass('selected');

        $('.mainimage img').attr('src',$('a',this).attr('href'));
        return false;    	
    })
})


// 続きを読む、閉じる
$(function(){
    $("#section_detail_show").on("click",function(){
        $(this).after("<span><p>100均のものです。3,4枚目参照。(不要であれば廃棄していただいてOKです)</p><br><p>③ドライフラワー</P><p>基本的には写真の状態のままお送りします。梱包すると花の厚みは押しつぶされてしまう可能性が高く、ドライフラワーは【おまけ】としてお考えください。お好きなお花に変えていただいても問題ありません✨<br>※ただし糸と釘の強度に気をつけてください。素人作品ですので強度は保証いたしかねます。発送後(輸送時含む)に糸や釘が取れてしまった場合は、ご自身で修復をお願いいたします。</p><br><p>その他、挙式後に修正を加えた箇所や傷がついている箇所の説明など、写真付きでInstagramに投稿してますので、詳細確認の上ご検討ください*</p></span>");
        $(this).css("display","none");
        $("#section_detail_hide").css("display","block");
    })
    $("#section_detail_hide").on("click",function(){
        $(".section_detail span p").remove();
        $("#section_detail_show").css("display","block");
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


// 購入リクエスト --------------------------------------------------

// 購入ボタンクリックでリクエスト画面出てくる
$(function(){
    $(".square_btn").click(function(){
        $(".request_wrap").css("display","block");
    })
})

// グレーレイヤーかける、クリックしたら消す、ハンバーガー戻すなど
$(function(){
    $("body").append("<div id='glayLayer'></div>");
    $("#glayLayer").click(function(){
        $(this).hide()
        $(".request_wrap").css("display","none");
    });
    $(".request_button_cancel").click(function(){
        $("#glayLayer").hide()
        $(".request_wrap").css("display","none");
    });
    $(".square_btn").click(function(){
        setTimeout(function(){
            $("#glayLayer").fadeIn(); 
        },300);
    })
})