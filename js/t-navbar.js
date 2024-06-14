// 调用函数

tNavSubShow();
tSearchInputBoxShow();
tFsnavShowSwitch();
tScrollWindow();
tRotpicPlay();

// 调用函数END


// 定义函数
function tNavSubShow(){
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

function tSearchInputBoxShow(){
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

function tFsnavShowSwitch(){
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

function tScrollWindow(){
    $(window).scroll(function() {
        $(window).scrollTop() > $(".t-header").height() ? $(".t-header").addClass("t-scrtop") : $(".t-header").removeClass("t-scrtop");
    });
};

function tResizeWindow(){
    $(window).resize(function () { 
        
    });
};

function tRotpicPlay() { 
    document.addEventListener("DOMContentLoaded", function(event) {
        const t_rotpic_item = document.querySelectorAll('.t-rotpic-item');
        let t_curPic = 0;
      
        function showPic(index) {
          t_rotpic_item.forEach((t_pic_item, i) => {
            if (i === index) {
              t_pic_item.classList.add('t-rotpic-active');
            } else {
              t_pic_item.classList.remove('t-rotpic-active');
            }
          });
        }
      
        function nextPic() {
          t_curPic++;
          if (t_curPic >= t_rotpic_item.length) {
            t_curPic = 0;
          }
          showPic(t_curPic);
        }
      
        setInterval(nextPic, 3000); // 每 2 秒切换一张幻灯片
      
        showPic(t_curPic); // 显示第一张幻灯片
      });
};