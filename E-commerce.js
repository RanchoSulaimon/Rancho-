
var swiper = new Swiper(".section3_wear", {
    slidesPerView: 4,
    spaceBetween: 30,
    allowSlideNext: true,
    loop: true,
    scrollbar: {
        el: ".swiper-scrollbar",
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
var swiper = new Swiper(".new_arrival", {
    slidesPerView: 1,
    spaceBetween: 10,
    allowSlideNext: true,
    loop: true,
    scrollbar: {
        el: ".swiper-scrollbar",
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const popClose = document.getElementById('pop_close');
  const popUp = document.getElementById('pop_up');

  popClose.addEventListener('click', function(){
    popUp.classList.add('close_pop_up');
  });

  const mainPopClose = document.getElementById('close_btn');
  const mainPopUp = document.getElementById('main_pop_up');
  const containerMainPop = document.getElementById('container_pop_up');

  mainPopClose.addEventListener('click', function(){
    mainPopUp.classList.add('close_btn_main');
    containerMainPop.classList.add('active_overlay')
  });

  const showMenu = document.getElementById('show_list');
  const hideMenu = document.getElementById('hide_menu');
  const clothesIcon = document.getElementById('clothes_icon');


 
