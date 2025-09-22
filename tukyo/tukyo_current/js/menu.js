
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



document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn-menu');
  const nav = document.querySelector('nav');
  const header = document.querySelector('#sidemenu');

  function handleMenuToggle() {
    if (window.innerWidth <= 1000) {
      const isOpen = nav.classList.toggle('open-menu');
      header.classList.toggle('open');
      //btn.textContent = isOpen ? '閉じる' : 'メニュー';
    }
  }

  btn.addEventListener('click', handleMenuToggle);
});