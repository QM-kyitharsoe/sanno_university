
//const btn = document.querySelector('.btn-menu');
//const nav = document.querySelector('nav');
//
//btn.addEventListener('click', () => {
//    nav.classList.toggle('open-menu')
//    if (btn.innerHTML === 'メニュー') {
//        btn.innerHTML = '閉じる';
//    } else {
//        btn.innerHTML = 'メニュー';
//    }
//  
//});



//const btn = document.querySelector('.btn-menu');
//const nav = document.querySelector('nav');
//
//function handleMenuToggle() {
//  if (window.innerWidth <= 1170) {
//    nav.classList.toggle('open-menu');
//    if (btn.innerHTML === 'メニュー') {
//      btn.innerHTML = '閉じる';
//    } else {
//      btn.innerHTML = 'メニュー';
//    }
//  }
//}
//
//btn.addEventListener('click', handleMenuToggle);

$(document).ready(function(){
  $('.sub-menu > .sub-menu-head').click(function(e){
    e.preventDefault();
    $(this).siblings('.sub-menu-nav').toggle();
    $('.sub-menu-head_ic').toggleClass('minus-on');
  });
  $('.sub-menu-nav-ttl').click(function(e){
    e.preventDefault();
    $('.sub-menu-nav-ul').toggle();
  });
});


