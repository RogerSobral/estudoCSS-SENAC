

$(document).ready(function(){
    $(".testimonial .tabs li").click(function(){
        var i = $(this).index();
        var targetElement = $(".testimonial .tabs li");

        // Ativa o indicador clicado
        targetElement.eq(i).addClass('active');
        targetElement.not(targetElement[i]).removeClass('active');

        // Muda o slide do carrossel
        $('#carouselExampleIndicators').carousel(i);
    });

    $(".slider .swiper-pagination span").each(function(i){
        $(this).text(i+1).prepend("0");
    });
});
