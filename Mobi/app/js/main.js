const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth", 
      block: "start",
    })
  })
}

$(function () {
  $(".slider").slick({
    slidesToShow: 1,
    dots: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
        },
      },
      {
        breakpoint: 320,
        settings: {
          prevArrow:
            '<button type="button" class= "slick-arrow slick-prev"></button>',
          nextArrow:
            '<button type="button" class= "slick-arrow slick-next"></button>',
        },
      },
    ],
    mobileFirst: true,
  });

  $(".video__popup-link").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });
});


