//common.js
$(function(){
var topBtn=$('#pageTop');
topBtn.hide();

$(window).scroll(function(){
  if($(this).scrollTop()>80){
    topBtn.fadeIn();
  }else{
    topBtn.fadeOut();
  }
});

topBtn.click(function(){
  $('body,html').animate({
  scrollTop: 0},500);
  return false;

});
});

var headerHeight = jQuery('header').outerHeight() + 20;
jQuery('a[href*="#"]:not(#menuButton)').click(function () {
  var target = jQuery(this.hash === '' ? 'html' : this.hash);
  var position = target.offset().top - headerHeight;
  if (target.length) {
    jQuery('html, body').animate({scrollTop:position}, 500, 'swing');
    return false;
  }
});
var urlHash = location.hash;
if (urlHash) {
  var target = jQuery(urlHash);
  if (target.length) {
    history.replaceState(null, '', window.location.pathname);
    jQuery("html,body").stop().scrollTop(0);

    jQuery(window).on("load", function () {
      var headerHeight = jQuery("header").outerHeight();
      var position = target.offset().top - headerHeight - 20;
      jQuery("html, body").animate({ scrollTop: position }, 500, "swing");
      history.replaceState(null, '', window.location.pathname + urlHash);
    });
  }
}
document.getElementById('modalView').addEventListener('click', () => {
const modalbtn = document.getElementById('firstTimeModal');
     modalbtn.classList.add('is-show');
});

document.getElementById('js-black-bg').addEventListener('click', () => {
const modalClose = document.getElementById('firstTimeModal');
     modalClose.classList.remove('is-show');
});
document.getElementById('modalCloseCloss').addEventListener('click', () => {
const modalClose = document.getElementById('firstTimeModal');
     modalClose.classList.remove('is-show');
});
$(function () {
  $(".more-link").each(function (v_n) {
    $(this).after('<div class="more-link-after"></div>');
    f_lessText(v_n);
  });
});

function f_moreText(v_n) {
  var e_text = $(".more-link").eq(v_n);
  var v_closeHeight = e_text.height();
  var v_poenHeight = e_text.css("height", "auto").height();
  e_text.height(v_closeHeight).animate({ height: v_poenHeight }, 30);
  $(".more-link-after:eq(" + v_n + ")").html(
    '<a class="closeLinkBt" href="javascript:void(0)" onclick="f_lessText(' + v_n + ')"><span>é–‰ã˜ã‚‹</span></a>'
  );
}
function f_lessText(v_n) {
    var e_more = $(".more-link:eq(" + v_n + ")");
    var e_moreAfter = $(".more-link-after:eq(" + v_n + ")");

    var v_max = 3;
    if (e_more.data("max")) {
        v_max = e_more.data("max");
    }
    var e_text = e_more;
    var v_textHeight = parseFloat(e_more.css("height"));
    var v_fontHeight = parseFloat(e_more.css("line-height"));
    
    if (!v_fontHeight) {
        v_fontHeight = parseFloat(e_more.css("font-size")) * 1.5;
    }
    var v_moreMaxHeight = v_fontHeight * v_max;
    if (v_moreMaxHeight < v_textHeight) {
    
    e_more.css({ overflow: "hidden", "margin-bottom": "0" });
    e_more.height(v_moreMaxHeight);
    
    e_moreAfter.css({
      "font-size": e_text.css("font-size"),
      "line-height": e_text.css("line-height")
    });
    e_moreAfter.html(
      '<div class="gradation"><a class="moreLinkBt" href="javascript:void(0)" onclick="f_moreText(' +
        v_n +
        ')"><span>ç¶šãã‚’èª­ã‚€</span></a></div>'
    );
  }
}
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('closebt');
    
    if (!btn) {
        return false;
    }
    
    btn.addEventListener('click', function () {
        $('.noticeboard').slideToggle(300);
    });
});



// ACCORDION
document.addEventListener("DOMContentLoaded",() => {
        const title = document.querySelectorAll('.js-acc-tit');
            for (let i = 0; i < title.length; i++){
            let titleEach = title[i];
            let content = titleEach.nextElementSibling;
            titleEach.addEventListener('click', () => {
            titleEach.classList.toggle('is-active');
            content.classList.toggle('is-open');
            });
        }
    });
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('close_bt_s');
    if (!btn) {
        return false;
    }
    btn.addEventListener('click', function () {
        $('.cmInfoWrap').slideToggle(300);
    });
});




//SideLinkBt
$(function() {
  var topBtn = $('.sidelinks');

  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      topBtn.stop().animate({
        'right': '0'
      }, 200, 'linear');
    } else {
      topBtn.stop().animate({
        'right': '-160px'
      }, 200, 'linear');
    }
  });

});



//FooterLink01
$(function(){
  var pos = 0;
  var header = $('.btmlinks');
  
  $(window).on('scroll', function(){
    if($(this).scrollTop() < pos ){
      header.removeClass('hide');
    }else{
      header.addClass('hide');
    }
    pos = $(this).scrollTop();
  });
});


//FooterLink02
$(window).bind("scroll", function() {
	scrollHeight = $(document).height();
	scrollPosition = $(window).height() + $(window).scrollTop();
	if ( (scrollHeight - scrollPosition) / scrollHeight <= 0.05) {
		$('.btmlinks').addClass("fixed");
        $('.copy_right').addClass("fixed");
	} else {
		$('.btmlinks').removeClass("fixed");
        $('.copy_right').removeClass("fixed");
	}
});




$(function(){
  $(".inview_act").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});





