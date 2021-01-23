$(document).ready(function () {
  $(document).ready(function () {
    var $menu = $("#menu");

    $(window).scroll(function () {
      // if ($(this).scrollTop() > 30 && $menu.hasClass("default")) {
      //   $('.logo').attr('src', 'assets/img/main/logo-grey.png');
      //   $menu.fadeOut("fast", function () {
      //     $(this).removeClass("default").addClass("fixed").fadeIn("fast");
      //   });
      // } else if ($(this).scrollTop() <= 10 && $menu.hasClass("fixed")) {
      //   $('.logo').attr('src', 'assets/img/main/logo-white.png');
      //   $menu.fadeOut("fast", function () {
      //     $(this).removeClass("fixed").addClass("default").fadeIn("fast");
      //   });
      // }
    });
  });
  $('.hamburger1').click(function (e) {
    // e.preventDefault();
    $('nav ul.menu').toggleClass('active');
    $('body').toggleClass('lock');
    $('.bar1').addClass('bar-one');
    $('.bar2').addClass('bar-two');
    $('.bar3').addClass('bar-three');
    $('.bar4').addClass('bar-four');
    // Scroll animation
    $('nav .active li#link_wrap-one').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#about-section').offset().top }, 100);
      e.preventDefault();
    });
    $('nav .active li#link_wrap-two').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#reson-section').offset().top }, 100);
      e.preventDefault();
    });
    $('nav .active li#link_wrap-three').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#why_wrapper').offset().top }, 100);
      e.preventDefault();
    });
    $('nav .active li#link_wrap-four').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#services-section').offset().top }, 100);
      e.preventDefault();
    });
    $('nav .active li#link_wrap-five').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#location-section').offset().top }, 100);
      e.preventDefault();
    });
    $('nav .active li#link_wrap-six').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#tender-section').offset().top }, 100);
      e.preventDefault();
    });

    var c = $('.menu').hasClass('active');
    if (c) {
      $('.active li').click(function (e) { 
        e.preventDefault();
        $('.menu').removeClass('active');
        $('body').removeClass('lock');
        $('.bar1').removeClass('bar-one');
        $('.bar2').removeClass('bar-two');
        $('.bar3').removeClass('bar-three');
        $('.bar4').removeClass('bar-four');
      });
    }
  });
  var w = $('body').width();
  if (w <= 768) {
    $('.tender_text').slideUp();
    $('.tender__item-top .arrow-down_one').click(function (e) { 
      e.preventDefault();
      $('.tender_text-one').slideToggle();
    });
    $('.tender__item-top .arrow-down_two').click(function (e) { 
      e.preventDefault();
      $('.tender_text-two').slideToggle();
    });
    $('.tender__item-top .arrow-down_three').click(function (e) { 
      e.preventDefault();
      $('.tender_text-three').slideToggle();
    });
  }
  $('.number a.number_link').click(function (e) {
    e.preventDefault(); 
    $('.pop-up').addClass('pop-up_active');
    $('body').addClass('lock');
    $('.hum_wrapper').css('display', 'none');
  });
  var w = $('body').width();
  $('.close').click(function (e) {
    e.preventDefault(); 
    $('.pop-up').removeClass('pop-up_active');
    $('body').removeClass('lock');
    if (w < 1170) {
      $('.hum_wrapper').css('display', 'block');
    }
  });
  $('form textarea').focus(function (e) { 
    e.preventDefault();
    $('form label').css('display', 'none');
  });
  $('.fixed hamburger1').click(function (e) { 
    $('body').addClass('stop-scrolling')
    $('body').bind('touchmove', function(e){e.preventDefault()})
  });
});