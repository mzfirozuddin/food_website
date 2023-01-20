$(document).ready(function(){
    $('.food-slider').slick({
        autoplay:true,
        slidesToShow:3,
        slidesToScroll:1,
        prevArrow:".prev-btn",
        nextArrow:".next-btn",

        // Here we have a break point for responsive code
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2, 
                }
            },

            {
                breakpoint:768,
                settings:{
                    slidesToShow:1, 
                }
            }
        ]

    });

    // $('.nav-trigger').click(function(){
    //     $('.site-content-wrapper').toggleClass('scaled');
    // })
});


const nav_trigger = document.querySelector(".nav-trigger");
const site_content_wrapper = document.querySelector(".site-content-wrapper");

nav_trigger.addEventListener("click", function(){
    site_content_wrapper.classList.toggle("scaled");
});

/*  // It is another way to do the same work

nav_trigger.addEventListener("click", myMenu);

function myMenu() {
    site_content_wrapper.classList.toggle("scaled");
} 
*/