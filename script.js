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
        };
    });

    // Owl Carousel Script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });


    var typed = new Typed(".typing", {
        strings: ["Developer", "Front-end", "Back-end", "Full Stack", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Front-end", "Back-end", "Full Stack", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
});

//Português
// $(function() {
//     $(".br").click(function() {
//         //cabeçalho
//         $(".menu").children(0).eq(0).text("Início");
//         $(".menu").children(1).eq(1).text("Sobre");
//         $(".menu").children(2).eq(2).text("Serviços");
//         $(".menu").children(3).eq(3).text("Contato");
//         $(".language-selected").text("pt-BR");
//         $(".language-selected").removeClass("change-en");
//         $(".language-selected").removeClass("change-es");
//         $(".language-selected").addClass("change-br");
//         //seção Home
//         $(".text1").text("Olá, meu nome é");
//         $(".text2").text("Maycon Morais");
//         $(".text3").text("e eu sou Developer");
//         $(".text4").text("Contato");
//     });
// });

// $(function() {
//     $(".en").click(function() {
//         //header
//         $(".menu").children(0).eq(0).text("Home");
//         $(".menu").children(1).eq(1).text("About");
//         $(".menu").children(2).eq(2).text("Services");
//         $(".menu").children(3).eq(3).text("Contact");
//         $(".language-selected").text("en-US");
//         $(".language-selected").removeClass("change-es");
//         $(".language-selected").removeClass("change-br");
//         $(".language-selected").addClass("change-en");
//         //section Home
//         $(".text1").text("Hello, my name is");
//         $(".text2").text("Maycon Morais");
//         $(".text3").text("and I'm a Developer");
//         $(".text4").text("Contact");
//     });
// });

// //Espanõl
// $(function() {
//     $(".es").click(function() {
//         //encabezamiento
//         $(".menu").children(0).eq(0).text("Inicio");
//         $(".menu").children(1).eq(1).text("Sobre");
//         $(".menu").children(2).eq(2).text("Servicios");
//         $(".menu").children(3).eq(3).text("Contacto");
//         $(".language-selected").text("es-UE");
//         $(".language-selected").removeClass("change-br");
//         $(".language-selected").removeClass("change-en");
//         $(".language-selected").addClass("change-es");
//         //sección Home
//         $(".text1").text("Hola, mi nombre es");
//         $(".text2").text("Maycon Morais");
//         $(".text3").text("e yo soy Developer");
//         $(".text4").text("Contacto");
//     });
// });
