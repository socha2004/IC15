var config = {
    paths: {
        slick: 'js/slick/slicker'
    },
    shim: {
        slick: {
            deps: ['jquery']
        }
    },
    deps: [],
    map: {
       '*': {
           'Avanti_Theme/js/qty-stepper': 'js/qty-stepper',
           'Avanti_Theme/js/product-share': 'js/product-share'
          }
    }
};
