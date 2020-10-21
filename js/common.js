$(function () {
  $(window).on('load resize', function() {
    if ($(this).width() > 1024) {
      $('.header__burger-menu').children().removeClass('active');
      $('.header__menu-list').removeClass('active');
    }
  });
  
  $('.header__burger-menu').on('click', function() {
    $(this).toggleClass('active').children().toggleClass('active');
    $('.header__menu-list').toggleClass('active');
  });
  
  $(window).on('load', function() {
    $('.projects__tab-item').fadeOut(0).each(function() {
      if ($(this).hasClass('active')) {
        $(this).fadeIn(0);
      }
    });
  });
  
  $('.projects__tab-btn').on('click', function(e) {
    e.preventDefault();
    $('.projects__tab-btn').removeClass('active');
    $(this).addClass('active');
    $('.projects__tab-item').fadeOut(0);
    var hash = $(this).attr('href');
    var target = $(hash);
    target.addClass('active');
    if (target.hasClass('active')) {
      target.fadeIn(400);
    }
  });

  /* Sliders */
  $('.header__slider').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900
  });

  $('.partners__slider').slick({
    arrows: false,
    slidesToShow: 5,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
    responsive: [
      {
        breakpoint: 1033,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 886,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 396,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.reviews__photos-slider').slick({
    arrows: false,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: 60,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
    asNavFor: '.reviews__review-slider',
    responsive: [
      {
        breakpoint: 467,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 384,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.reviews__review-slider').slick({
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
    asNavFor: '.reviews__photos-slider'
  });
});