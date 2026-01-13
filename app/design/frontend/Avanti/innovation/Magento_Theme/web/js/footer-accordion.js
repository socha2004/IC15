define([
    'jquery',
    'matchMedia'
], function ($, mediaCheck) {
    'use strict';

    console.log("footer-accordion: módulo carregado");

    // Só aplica o comportamento em mobile
    mediaCheck({
        media: '(max-width: 767px)',
        entry: function () {
            $(function () {
                applyFooterAccordionClass();
                initAccordion();
                resolveBorda();
            });
        },
        exit: function () {
            $('.footer-accordion')
                .removeClass('is-open is-closed')
                .find('ul')
                .attr('style', '');
        }
    });

    function initAccordion() {
        var $accordions = $('.footer-accordion');

        if (!$accordions.length) {
            console.log("footer-accordion: nenhum bloco encontrado");
            return;
        }

        $accordions.each(function () {
            var $block = $(this);
            var $title = $block.find('h4').first();
            var $list = $title.next('ul');
            $list.addClass("borda-titulo");
            // $title.addClass("borda-titulo");

            if (!$list.length) {
                console.log("footer-accordion: bloco sem <ul> logo após o <h4>");
                return;
            }

            // Estado inicial: fechado
            $block.removeClass('is-open');
            $block.addClass('is-closed');
            $list.hide();

            // Evitar duplicar eventos
            $title
                .off('click.footerAccordion')
                .on('click.footerAccordion', function () {

                    // Fecha todos os outros
                    $accordions
                        .not($block)
                        .removeClass('is-open')
                        .addClass('is-closed')
                        .find('ul')
                        .slideUp();

                    // Alterna o atual
                    $block.toggleClass('is-open is-closed');
                    $list.slideToggle(200);
                });
        });
    }

    function resolveBorda() {
        // $('.is-closed')
        //     .find('h4')
        //     .addClass('borda-titulo')
        if ($('.is-open').get(0)) {
            console.log('accordion aberto')
        }
    }

    function applyFooterAccordionClass() {
        $('ul').each(function () {
            var $ul = $(this);
            var $parent = $ul.parent();

            // Evita aplicar em elementos errados
            if ($parent.find('div').length && !$parent.hasClass('footer-accordion')) {
                $parent.addClass('footer-accordion');
            }
        });
    }
});
