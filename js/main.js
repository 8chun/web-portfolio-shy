$(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow"); 
    });

//이솝 동영상 재생
$('video').get(0).play();

//디자인 갤러리 사진 눌리면 view on
$('.item .pic a').on('click',function(e){
    e.preventDefault();

    $('.picview').fadeIn();
    $('.picview .vid').hide();
    $('.picview .pic').show();

    let pic = $(this).parents('.item').find('.show').html();
    $('.picview .pic').html(pic);

    let h3 = $(this).parents('.item').find('h3').text();
    $('.iteminfo h3').text(h3);

    let span = $(this).parents('.item').find('span').text();
    $('.iteminfo span').text(span);

})

$('.vid .pic a').on('click',function(e){
    e.preventDefault();

    $('.picview').fadeIn();
    $('.picview .pic').hide();
    $('.picview .vid').show();

    let h3 = $(this).parents('.vid').find('h3').text();
    $('.iteminfo h3').text(h3);

    let span = $(this).parents('.vid').find('p').text();
    $('.iteminfo span').text(span);

    let key = $(this).parents('.vid').find('.vidkey').text();
    $('.picview').find('.vid')
    .html(`<iframe width="1280" height="720" src="https://www.youtube.com/embed/${key}" title="daisy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
})

//디자인 갤러리 x, 빈화면 클릭시 view off
$('.btnclose, .viewclose').on('click',function(){
    $('.picview').fadeOut();
})

//top버튼
$('.top').on('click',function(){
    $("html, body").animate({scrollTop : 0}, 500);
})

$(window).on('scroll',function(){
    let whig = $(window).scrollTop();
    let hig = $('header').offset().top;

    if(whig >= 600){
        $('.top').show();
    }else{
        $('.top').hide();
    }

    if(whig >= 0 && whig < hig-700){
        $('.sb').css({
            'opacity' : 0,
            'transform' : 'translate(0,-200px)'
        })
    }

    
});

let scrPosition;
$(window).on('scroll',function(){
    
    scrPosition = $(window).scrollTop();

});

let sb = document.querySelectorAll('.sb');
    sb.forEach(function(tgt){
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(tgt, {
            scrollTrigger: {
                trigger: tgt,
                start: "-600px center",
                toggleActions: "restart pause resume pause",
              },
              y:0, duration: 0.5,
              opacity:1
            });
    });