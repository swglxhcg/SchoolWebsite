// 调用函数

tNavSubShow();
tSearchInputBoxShow();
tFsnavShowSwitch();
tScrollWindow();
tResizeWindow();
tRotpicPlay();
tSpanClick();
tScrollToTopBtn();

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
        $(".t-rotpic-ct").css("height", window.innerHeight-60+"px");
        // $(".t-center-logo-bg").css("height", window.innerWidth / 9+"%");
    });
};



const t_rotpic_item = document.querySelectorAll('.t-rotpic-item');
const t_rotpic_btn = document.querySelectorAll('.t-rotpic-btn');
let t_curPic = 0;
function showPic(index) {
    t_rotpic_item.forEach((t_pic_item, i) => {
      if (i === index) {
        t_pic_item.classList.add('t-rotpic-active');
      } else {
        t_pic_item.classList.remove('t-rotpic-active');
      }
    });
    t_rotpic_btn.forEach((t_pic_btn, i) => {
      if (i === index) {
        t_pic_btn.classList.add('t-rotpic-active');
      } else {
        t_pic_btn.classList.remove('t-rotpic-active');
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

function tScrollToTopBtn() {
    document.querySelector(".t-btn-top").addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    });
  }
  

function tRotpicPlay() { 
    document.addEventListener("DOMContentLoaded", function(event) {
        // 设置轮播图高度以适合屏幕
        $(".t-rotpic-ct").css("height", window.innerHeight-60+"px");
        // 以下计算轮播图
      
        tAutoSwitchTimer=setInterval(nextPic, 3000);
        window.tGlobalAutoSwitchTimer=tAutoSwitchTimer;
        
        showPic(t_curPic); 
      });
};

// 轮播图小点的点击效果
function tSpanClick(){
    document.addEventListener("DOMContentLoaded", function(event) {
        const tSpanElements = document.querySelectorAll('.t-rotpic-btn');
        tSpanElements.forEach((tSpan, i) => {
            tSpan.addEventListener('click', () => {
                console.log(i);
                t_curPic=i;
                clearInterval(tGlobalAutoSwitchTimer);
                showPic(t_curPic);
                tGlobalAutoSwitchTimer=setInterval(nextPic, 3000);
            });
        });
    });
};