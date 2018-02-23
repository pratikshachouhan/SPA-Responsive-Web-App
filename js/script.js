/* On document load */
$(document).ready(function(){
   
    /* Section - Frame Hover Effect */
    $(".bg-frame").mouseenter(function(){
        $('img', this).css("opacity", 1);
        $('.text-bottom', this).hide("medium");
        $('.bottom-link', this).css('visibility','visible');
    });
    $(".bg-frame").mouseleave(function(){
        $('img', this).css("opacity", .75);
        $('.text-bottom', this).show("medium");
        $('.bottom-link', this).css('visibility','hidden');
    });
    
    /* Shopping - Carousel Hover Effect */
    $(".carousel-change-img").mouseenter(function(){
        $(".carousel-info", this).css('background-color','#000000');
        $(".visible-img", this).css('display','none');
        $(".hidden-img", this).css('display','block');
    });
    $(".carousel-change-img").mouseleave(function(){
        $(".carousel-info", this).css('background-color','');
        $(".hidden-img", this).css('display','none');
        $(".visible-img", this).css('display','block');
    });
    
    /* Section - photos Click Effect */
    $(document).on('click', ".change-frame .is_active", function(){
        $(this).addClass("is_inactive");
        $(this).removeClass("is_active");
        if($(this).next().length > 0){
            $(this).next().removeClass("is_inactive");
            $(this).next().addClass("is_active");
        }else{
            $(this).parent().children(":first-child").addClass("is_active");
            $(this).parent().children(":first-child").removeClass("is_inactive");
        }
    });
    
    
    /* Section - Magazine Hover Effect */
    $(".footer-carousel").mouseenter(function(){
        $(".footer-carousel-text", this).css('display','block'); 
        $( this ).parent().animate({
          top: "-20px",
        }, 250 );
        $(".footer-frame").css("background-color", $(this).attr("color-code"));
    });
    $(".footer-carousel").mouseleave(function(){
        $(".footer-carousel-text", this).css('display','none'); 
        $( this ).parent().animate({
          top: 0,
        }, 250 );
    });
});

