define(['jquery'], function ($) {
    'use strict';

    function updateCheckoutSteps() {
        const path = window.location.pathname;
        const hash = window.location.hash;

        console.log("Header Customizado: módulo funcionando!");

        // Reset
        $('#step-carrinho, #step-entrega, #step-pagamento')
            .removeClass('enabled-progress');

        // Carrinho
        if (path == '/checkout/cart/') {
            $('#step-carrinho').removeClass('disabled-progress');
            $('#step-carrinho').addClass('enabled-progress');
            console.log('tela de carrinho');
        }

        // Checkout
        if (path.indexOf('/checkout') !== -1) {

            // Entrega
            if (hash === '#shipping') {
                $('#step-pagamento').addClass('disabled-progress');
                $('#step-entrega').removeClass('disabled-progress');
                $('#step-entrega').addClass('enabled-progress');
            }

            // Pagamento
            if (hash === '#payment') {
                $('#step-entrega').addClass('disabled-progress');
                $('#step-pagamento').removeClass('disabled-progress');
                $('#step-pagamento').addClass('enabled-progress');
            }
        }
    }

    // Inicializa ao carregar
    $(document).ready(function () {
        updateCheckoutSteps();
    });

    // Escuta mudança de etapa (hash)
    $(window).on('hashchange', function () {
        updateCheckoutSteps();
    });
});