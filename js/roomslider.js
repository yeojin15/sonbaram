$(document).ready(function(){
  let roomSwiper = new Swiper('.room-slider',{
    observer: true,  
    observeParents: true,  
    watchSlidesVisibility: true,  
    watchSlidesProgress: true,
    watchSlidesProgress: true,
    // loop: true,
    pagination: {
        el: '.room-pager',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
        },
        formatFractionTotal: function (number) {
            return ('0' + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span> <span>/</span> <span class="' + totalClass + '"></span>';
        }
    },
    navigation: {
        prevEl: '.room-ctrl .prev',
        nextEl: '.room-ctrl .next',
    },
    initialSlide: 0,
    effect: 'fade',
  })

  let popSwiper = new Swiper('.pop-slider',{
    observer: true,  
    observeParents: true,  
    watchSlidesVisibility: true,  
    watchSlidesProgress: true,
    watchSlidesProgress: true,
    // loop: true,
    pagination: {
        el: '.pop-pager',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
        },
        formatFractionTotal: function (number) {
            return ('0' + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span> <span>/</span> <span class="' + totalClass + '"></span>';
        }
    },
    navigation: {
        prevEl: '.pop-ctrl .prev',
        nextEl: '.pop-ctrl .next',
    },
    initialSlide: 0,
    effect: 'fade',
  })
});