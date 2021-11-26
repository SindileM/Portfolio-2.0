// Skills Section
$(document).ready(function () {
  $('.skill-icons').children('.active').each(function(i) {
    var row = $(this);
    setTimeout(function() {
      row.css('background','#c0392b');
    }, 100*i);
  });
});

// Contact Form
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

  // var timelineSwiper = new Swiper ('.timeline .swiper-container', {
  //   direction: 'vertical',
  //   loop: false,
  //   speed: 1600,
  //   pagination: '.swiper-pagination',
  //   paginationBulletRender: function (swiper, index, className) {
  //     var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
  //     return '<span class="' + className + '">' + year + '</span>';
  //   },
  //   paginationClickable: true,
  //   nextButton: '.swiper-button-next',
  //   prevButton: '.swiper-button-prev',
  //   breakpoints: {
  //     768: {
  //       direction: 'horizontal',
  //     }
  //   }
  // });