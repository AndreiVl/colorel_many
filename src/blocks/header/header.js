$(document).ready(function() {
  $('.header__btn').click(function() {
    if($('body .header__btn--opened').length) {
      $('.header__body').fadeOut(500);
    } else {
      $('.header__body').fadeIn(500);
    }

    $('.header__body').toggleClass('header__mobile');
    $('.header__btn').toggleClass('header__btn--opened');
    $('body').toggleClass('overflow-heidden ');
  });

  let scrolled = 0;

  changeScrolled();
});

$(window).scroll(function(){
  let $this = $(this),
       st = $this.scrollTop();

  menuScrollDesktop(st);
});

$(window).resize(function(){
  let st = $(window).width();

  menuDesktopShow(st);
  changeScrolled();
});

function menuScrollDesktop(st) {
  if(st > scrolled){
    $('body').addClass('scrolled');
  }else{
    $('body').removeClass('scrolled');
  }
};

function menuDesktopShow(st) {
  if(st > 1199) {
    $('.header__body').attr('style', '');
    
    if($('.overflow-heidden').length) {
      $('body').removeClass('overflow-heidden');
    }
  }
};

function changeScrolled() {
  if($(window).width() < 768){
    scrolled = 0;
  }      
  else if($(window).width() > 767 && $(window).width() < 1200) {
    scrolled = 95;
  } else {
    scrolled = 129;
  }
};

