`use strict`

// For the sevices image
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '#swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className} h-1 w-1 lg:w-[4.59px] lg:h-[6px] bg-[#333] rounded-full"></button>`;
      }
    },
    navigation: {
      nextEl: '#swiperNext',
      prevEl: '#swiperPrev',
    },
  });

  // Hide next/prev buttons on mobile
  function handleResize() {
    const nextBtn = document.getElementById('swiperNext');
    const prevBtn = document.getElementById('swiperPrev');

    if (window.innerWidth < 1024) {
      nextBtn.parentElement.classList.add('hidden');
    } else {
      nextBtn.parentElement.classList.remove('hidden');
    }
  }

  window.addEventListener('resize', handleResize);
  window.addEventListener('load', handleResize);


//  For the product type 
const productSwiper = new Swiper('#productTypesSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  freeMode: {
    enabled: true,
    momentum: true,
  },
  navigation: {
    nextEl: '#productTypesSwiper .swiper-button-next',
    prevEl: '#productTypesSwiper .swiper-button-prev',
  },
  mousewheel: {
    forceToAxis: true,
  },
  grabCursor: true,
});

// 👇 Kill swiper's after-arrows and force proper button and svg size
const style = document.createElement('style');
style.innerHTML = `
  #productTypesSwiper .swiper-button-next::after,
  #productTypesSwiper .swiper-button-prev::after {
    display: none !important;
  }
  
  #productTypesSwiper .swiper-button-next,
  #productTypesSwiper .swiper-button-prev {
    width: 1.5rem !important; /* Matches your 'size-6' (1.5rem = 24px) */
    height: 1.5rem !important;
  }
  
  #productTypesSwiper .swiper-button-next svg,
  #productTypesSwiper .swiper-button-prev svg {
    width: 1rem !important;
    height: 1rem !important;
  }
`;
document.head.appendChild(style);


// The swiper for technoOff (Updated for the sale section)
const bargainSaleSwiper = new Swiper('.bargain-sale-swiper', {
  slidesPerView: 'auto', 
  spaceBetween: 16, 
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  loop: true, 
  breakpoints: {
      640: {
          slidesPerView: 'auto',
          spaceBetween: 10,
      },
  }
});

// The swiper for computer accessories
// Initialize Swiper instance on .computer_swiper
// Initialize Swiper
const computerSwiper = new Swiper('.computer_swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16, // Default space for very small screens (< 425px)

  freeMode: {
    enabled: true,
    momentum: true,
    momentumRatio: 1,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Set breakpoints to adjust spaceBetween at different screen widths
  breakpoints: {
    425: {
      spaceBetween: 32, // 2rem = 32px at 425px width
    },
    1024: {
      spaceBetween: 24, // 1.5rem = 24px at 1024px width and above
    },
  },
});

// Manually update swiper when resizing window
window.addEventListener('resize', () => {
  const width = window.innerWidth;

  if (width >= 1024) {
    computerSwiper.params.spaceBetween = 24; // 1.5rem
  } else if (width >= 425) {
    computerSwiper.params.spaceBetween = 32; // 2rem
  } else {
    computerSwiper.params.spaceBetween = 16; // default
  }

  computerSwiper.update(); // Refresh Swiper with new settings
});








