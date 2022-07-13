$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
     navText: ["<img src='img/Group 22.svg'>", "<img src='img/Group 21.svg'>"],
    startPosition: 1,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.loops').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
     navText: ["<img src='img/left.svg'>", "<img src='img/'>"],
    // startPosition: 1,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

   