// show and hide menu

$(document).ready(function(){
  'use strict';

  $(window).scroll(function(){
    if ($(window).scrollTop() < 80) {
      $(".navbar").css({
        'margin-top':'-100px',
        'opacity':'0'
      });

      $(".navbar-default").css({
        'background-color':'rgba(59,59,59,0)'
      });
    }
    else{
      $(".navbar").css({
        'margin-top':'0px',
        'opacity':'1'
      });
      $(".navbar-default").css({
        'background-color':'rgba(59,59,59,0.8)',
        'border-color':'#fff'
      });
    }
  })
})

// activate item on click

var allNavItems = document.querySelectorAll('.nav-item');

for(var i =0 ; i<allNavItems.length; i++){
  allNavItems[i].addEventListener("click",function(e){

    for(var i =0 ; i<allNavItems.length; i++){
      if(allNavItems[i].classList.contains("active")){
        allNavItems[i].classList.remove("active");
      }
    }

    e.srcElement.classList.add("active");
    console.log(e.srcElement.classList);})
}


$(document).ready(function(){
  'use strict';
  $(window).scroll(function(){

    $("section").each(function(){
      "use strict";
      var bb = $(this).attr("id");
      var hei = $(this).outerHeight();
      var grttop = $(this).offset().top-70;

      if($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei){
        $(".navbar-nav li a[href='#"+ bb +"']").addClass("active");

      }
      else{
        $(".navbar-nav li a[href='#"+ bb +"']").removeClass("active");
      }

  });

});

});

// add padding to header

$(document).ready(function(){

  setInterval(function(){
    var winhei = $(window).height();
    var containerhei = $(".header-container").height;

    var paddTop = winhei-containerhei;
    $(".header-container").css({
      'padding-top' :  Math.round(paddTop/2)+"px",
      'padding-bottom' :  Math.round(paddTop/2)+"px"
     })
  })
});

$(document).ready(function(){
    $('.bxslider').bxSlider({
      slideWidth:900,
      auto:true,
      minSlides:1,
      maxSlides:5,
      slideMargin:20
    });
  });

$(document).ready(function(){

  $('.counter-number').counterUp({
    delay: 10,
    time: 2000
});
});
