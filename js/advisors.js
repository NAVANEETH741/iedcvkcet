$(document).ready(function(){
        $('.slick-eg').slick({
          infinite: true,
          dots: true,
          slidesToShow: 6,
          slidesToScroll: 6,
          autoplay: true,

          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 340,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }

          ]

        });
});