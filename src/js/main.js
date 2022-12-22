// Snap scroll
// (function ($) {
//   var selector = ".section";

//   var $slides = $(selector);

//   var currentSlide = 0;
//   var isAnimating = false;

//   var stopAnimation = function () {
//     setTimeout(function () {
//       isAnimating = false;
//     }, 100);
//   };

//   var bottomIsReached = function ($elem) {
//     var rect = $elem[0].getBoundingClientRect();
//     return rect.bottom <= $(window).height();
//   };

//   var topIsReached = function ($elem) {
//     var rect = $elem[0].getBoundingClientRect();
//     return rect.top >= 0;
//   };

//   document.addEventListener(
//     "wheel",
//     function (event) {
//       var $currentSlide = $($slides[currentSlide]);

//       if (isAnimating) {
//         event.preventDefault();
//         return;
//       }

//       var direction = -event.deltaY;

//       if (direction < 0) {
//         // next
//         if (currentSlide + 1 >= $slides.length) return;
//         if (!bottomIsReached($currentSlide)) return;
//         event.preventDefault();
//         currentSlide++;
//         var $slide = $($slides[currentSlide]);
//         var offsetTop = $slide.offset().top;
//         isAnimating = true;
//         $("html, body").animate(
//           {
//             scrollTop: offsetTop,
//           },
//           1000,
//           stopAnimation
//         );
//       } else {
//         // back
//         if (currentSlide - 1 < 0) return;
//         if (!topIsReached($currentSlide)) return;
//         event.preventDefault();
//         currentSlide--;
//         var $slide = $($slides[currentSlide]);
//         var offsetTop = $slide.offset().top;
//         isAnimating = true;
//         $("html, body").animate(
//           {
//             scrollTop: offsetTop,
//           },
//           1000,
//           stopAnimation
//         );
//       }
//     },
//     { passive: false }
//   );
// })(jQuery);

let windows = $(window);

// Menu sticky & Scroll to top
let screenSize = windows.width();
let sticky = $(".header-sticky");
let $html = $("html");
let $body = $("body");

windows.on("scroll", function () {
  let scroll = windows.scrollTop();
  let headerHeight = sticky.height();
  let screenSize = windows.width();
  if (screenSize >= 320) {
    if (scroll < headerHeight) {
      sticky.removeClass("is-sticky");
    } else {
      sticky.addClass("is-sticky");
    }
  }
});
// Scroll to top
function scrollToTop() {
  let $scrollUp = $("#scroll-top");
  let $lastScrollTop = 0;
  let $window = $(window);

  $window.on("scroll", function () {
    let st = $(this).scrollTop();
    if (st > $lastScrollTop) {
      $scrollUp.removeClass("show");
    } else {
      if ($window.scrollTop() > 200) {
        $scrollUp.addClass("show");
      } else {
        $scrollUp.removeClass("show");
      }
    }
    $lastScrollTop = st;
  });

  $scrollUp.on("click", function (evt) {
    $("html, body").animate({ scrollTop: 0 }, 600);
    evt.preventDefault();
  });
}
scrollToTop();

/* Pre-Loader Active */
windows.on("load", function () {
  $(".preloader").removeClass("preloader-active");
});

jQuery(window).on("load", function () {
  jQuery(".preloader__main").addClass("d-none");
  jQuery(".open-preloader").addClass("loaded");
});
/*=============================================
    =            counter up active            =
    =============================================*/

const counters = document.querySelectorAll(".counter");
// console.log(counters);
const speed = 300; // The lower the slower

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    // Lower inc to slow and higher to slow
    const inc = target / speed;
    // Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter
      counter.innerText = Math.ceil(count + inc);
      // Call function every ms
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

const funCounters = document.querySelectorAll(".funCounter");
const funSpeed = 300; // The lower the slower

funCounters.forEach((funCounter) => {
  const updateCount = () => {
    const target = +funCounter.getAttribute("data-target");
    const count = +funCounter.innerText;

    // Lower inc to slow and higher to slow
    const inc = target / funSpeed;
    // Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter
      funCounter.innerText = Math.ceil(count + inc);
      // Call function every ms
      setTimeout(updateCount, 10);
    } else {
      funCounter.innerText = target;
    }
  };

  updateCount();
});

// Swiper slide

var swiper = new Swiper(".slider__container", {
  slidesPerView: 6,
  loop: true,
  speed: 1000,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    991: {
      slidesPerView: 6,
    },

    767: {
      slidesPerView: 4,
    },

    575: {
      slidesPerView: 3,
    },

    0: {
      slidesPerView: 2,
    },
  },
});

// Swiper Project
var swiper = new Swiper(".project__container", {
  slidesPerView: 3,
  loop: true,
  speed: 1000,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 2,
    },

    575: {
      slidesPerView: 1,
    },

    0: {
      slidesPerView: 1,
    },
  },
});

// Swiper testimonial
var swiper = new Swiper(".testimonial__container", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  centeredSlides: true,
  loop: true,
  speed: 1000,
  spaceBetween: 50,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 2,
    },

    575: {
      slidesPerView: 1,
    },

    0: {
      slidesPerView: 1,
    },
  },
});
// Wow JS
let wow = new WOW({
  boxClass: "wow",
  animateClass: "animated",
  offset: 0,
  mobile: true,
  live: true,
});
wow.init();

/*==========================================
    =            mobile menu active            =
    ============================================*/

$("#mobile-menu-trigger").on("click", () => {
  $("#mobile-menu-overlay").addClass("active");
  $body.addClass("no-overflow");
});

$("#mobile-menu-close-trigger").on("click", () => {
  $("#mobile-menu-overlay").removeClass("active");
  $body.removeClass("no-overflow");
});

$(".inner__body-navigation ul li a").on("click", () => {
  $("#mobile-menu-overlay").removeClass("active");
  $body.removeClass("no-overflow");
});

/*Close When Click Outside*/
$body.on("click", function (e) {
  let $target = e.target;
  if (
    !$($target).is(".mobile-menu-overlay__inner") &&
    !$($target).parents().is(".mobile-menu-overlay__inner") &&
    !$($target).is("#mobile-menu-trigger") &&
    !$($target).is("#mobile-menu-trigger i")
  ) {
    $("#mobile-menu-overlay").removeClass("active");
    $body.removeClass("no-overflow");
  }
});

// Menu Drop down use nextElementSibling

let listItem = Array.from(document.querySelectorAll(".list__item-icon"));
listItem.forEach((item) => {
  item.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("show-menu");
  });
});
