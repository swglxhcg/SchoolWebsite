// 调用函数

navSubShow();
searchInputBoxShow();
fsnavShowSwitch();
scrollWindow();


// 调用函数END


// 定义函数
function navSubShow(){
	var oNav = $('.t-nav');
	var aLi = oNav.find('li.t-mainli');
	aLi.hover(function (){
		$(this).addClass('on');
		$(this).find('.t-navSub').addClass('flipInY');
	},function (){
		$(this).removeClass('on');
		$(this).find('.t-navSub').removeClass('flipInY');
	})
};

function searchInputBoxShow(){
	var scBtn = $('.t-sc-btn');
	//var aLi = oNav.find('li.t-mainli');
    var tscBox = $(".t-sc-box");
    var tscInput = $(".t-form-ctrl");
    // 搜索框弹出判断
	scBtn.hover(function (){
		tscBox.addClass('t-open');

	},function (){
        // 搜索框为空才收回
        if(tscInput.val()===""){
            tscBox.removeClass('t-open');
        }
	})
    // 搜索框失焦判断
    tscInput.blur(function(){
        if(tscInput.val()===""){
            if(tscBox.hasClass('t-open')){
                tscBox.removeClass('t-open');
            }
        }
    })
};

function fsnavShowSwitch(){
    var fsctrlA=$(".t-fsnav-btn a");
    fsctrlA.click(function(){
        if($('body').hasClass('fsnavShow')){
            $('.t-header').css('height', '110px');
            $('body').removeClass('fsnavShow');
        }else{
            $('.t-header').css('height', '60px');
            $('body').addClass('fsnavShow');
        }
    });
};

function scrollWindow(){
    $(window).scroll(function() {
        $(window).scrollTop() > $(".t-header").height() ? $(".t-header").addClass("t-scrtop") : $(".t-header").removeClass("t-scrtop");
    });
};

// function changeLogoArea(){
//     $(".t-top .t-logo1").resize(function(){
//         var t_logo_height=$(".t-logo1").height();
//         var t_logo_width=$(".t-logo1").height();
//         var t_w1=t_logo_width*0.38;
//         var t_w2=t_logo_width*0.42;
//         // var t_logo_coords1=`0, 0, $(t_w1), $(t_logo_height)`;
//         var t_logo_coords1="0, 0, "+t_w1+", "+t_logo_height;
//         // var t_logo_coords2=`$(t_w2), 0, $(t_logo_width), $(t_logo_height)`;
//         var t_logo_coords2=t_w2+", 0, "+t_logo_width+", "+t_logo_height;
//         $(".t-map-a-1").attr("coords", t_logo_coords1);
//         $(".t-map-a-2").attr("coords", t_logo_coords2);
//     });
// };

// function t_loaded_fun(){
//     var t_logo_height=$(".t-logo1").height();
//     var t_logo_width=$(".t-logo1").height();
//     console.log(t_logo_height);
//     console.log(t_logo_width);
//     var t_w1=t_logo_width*0.38;
//     var t_w2=t_logo_width*0.42;
//     // var t_logo_coords1=`0, 0, $(t_w1), $(t_logo_height)`;
//     var t_logo_coords1="0, 0, "+t_w1+", "+t_logo_height;
//     // var t_logo_coords2=`$(t_w2), 0, $(t_logo_width), $(t_logo_height)`;
//     var t_logo_coords2=t_w2+", 0, "+t_logo_width+", "+t_logo_height;
//     $(".t-map-a-1").attr("coords", t_logo_coords1);
//     $(".t-map-a-2").attr("coords", t_logo_coords2);
// }