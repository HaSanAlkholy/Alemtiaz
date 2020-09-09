$(window).on('load', function () {

  //nava toggle
  $('#nava-icon').click(function (e) {
    $('#nava').toggleClass('nava-active');
    $('html').toggleClass('overflow');
  });

  $('#nava').click(function (e) {
    if (e.target.id == 'nava' || e.target.id == 'close-nava' || e.target.parentNode.id == "close-nava") {
      $(this).removeClass('nava-active');
      $('html').removeClass('overflow');
    }
  });

  //search toggle
  $('#search-btn').click(function (e) {
    $('#search-form').toggleClass('search-form-active');
    $('html').toggleClass('overflow');
  });

  $('#search-form').click(function (e) {
    if (e.target.id == 'search-form' || e.target.id == 'close-search' || e.target.parentNode.id == "close-search") {
      $(this).removeClass('search-form-active');
      $('html').removeClass('overflow');
    }
  });


  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,
    autoplay: {
      delay: 5000,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //categories slider
  var mySwiper = new Swiper('.categories-swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 4,
    spaceBetween: 27,
    autoplay: {
      delay: 4000,
    },

    breakpoints: {
      // when window width is >= 480px
      1200: {
        slidesPerView: 4,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 2,
      },
      // when window width is >= 250px
      0: {
        slidesPerView: 1,
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '#categories .swiper-pagination',
      clickable: true,
    },
  });

  // sliders

  let sliders = document.getElementById('sliders');

  sliders.addEventListener('click', slidersChange);


  function slidersChange(e) {
    let name = e.target.dataset.name;
    if (name) {
      let sliders = document.getElementById('sliders-body').children;
      let tags = document.getElementById('sliders-head').children[1].children;
      removeActiveTag(tags);
      addActiveTag(e.target);
      removeActiveSlider(sliders);
      addActiveSlider(sliders, name);
    }
  }

  function removeActiveTag(list) {
    for (let i = 0; i < list.length; i++) {
      console.log(list[i]);
      if (list[i].classList.contains('active')) {
        list[i].classList.remove('active');
      }
    }
  }

  function addActiveTag(e) {
    e.classList.add('active');
  }

  function removeActiveSlider(list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].classList.contains('active')) {
        list[i].classList.remove('active');
      }
    }
  }
  function addActiveSlider(list, name) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].dataset.name == name) {
        list[i].classList.add('active');
      }
    }
  }


  // animate on scroll

  AOS.init({
    duration: 900,
    mirror: true,
    once: true,
    disable: function () {
      var maxWidth = 769;
      return window.innerWidth < maxWidth;
    },
    easing: 'ease-in-out'
  });



});
