define([
    'jquery',
    'slick'
], function ($) {
    'use strict';

    function toggleSlider($slider) {
    if (window.innerWidth <= 768) {
        if ($slider.hasClass('slick-initialized')) {
            $slider.slick('unslick');
        }
    } else {
        if (!$slider.hasClass('slick-initialized')) {
            $slider.slick({
                arrows: true,
                dots: false,
                slidesToShow: 6
            });
        }
    }
}

function init(context) {
    $('.slider-marcas', context).each(function () {
        var $slider = $(this);

        toggleSlider($slider);

        $(window).on('resize', function () {
            toggleSlider($slider);
        });
    });
}

    return function () {
        init(document);

        $(document).on('contentUpdated', function (e) {
            init(e.target);
        });
    };
});

