const modal1 = $('#modal1')
const modal2 = $('#modal2')
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // toggle menu/navbar script

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        if(modal1.css('display') == 'block'){
            modal2.css('display', 'block')
            modal1.css('display', 'none')
        } else{
            modal1.css('display', 'block')
            modal2.css('display', 'none')
        }
    });
    
});
