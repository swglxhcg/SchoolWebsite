// 调用函数
navSubShow();
searchInputBoxShow();
fsnavShowSwitch();
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