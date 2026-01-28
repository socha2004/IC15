define([
    'jquery',
    'slick'
], function ($) {
    'use strict';

    return function () {
        $(window).on('load', function () {
            $('[data-role="slick-carousel"]').slick('setPosition');
        });
    };
});