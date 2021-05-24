$(document).ready(function() {
    var nav = $('.navbar-fixed-top');
    var distancia = $('.navbar-fixed-top').offset();
    if (distancia.top >= 0) {
        nav.removeClass('normal').addClass('efecto');
    }
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 300) {
            nav.removeClass('normal').addClass('efecto');
        } else {
            nav.removeClass('efecto').addClass('normal');
        }
    });

    $('section#diseño a').on('click', function() {
        $('#modal img').attr('src', $(this).attr('data-image-url'));
    });

    /** animacion */

    /////////////////////ANIMACION 1///////////////////////////
    $('section#cell .anima1').waypoint(function() {
        $('section#cell .anima1').addClass('animated fadeInUp');

    }, {
        offset: '60%'
    });
    ///////////////////// ANIMACION 2///////////////////////////
    $('section#cell .anima2').waypoint(function() {
        $('section#cell .anima2').addClass('animated fadeInUp');

    }, {
        offset: '60%'
    });
    //////////////////////ANIMACION 3//////////////////////////
    $('section#cell .anima3').waypoint(function() {
        $('section#cell .anima3').addClass('animated fadeInUp');

    }, {
        offset: '60%'
    });

    /** ANIMACION CARACTERISTICAS**/
    $('section#caracteristicas #appCentral').waypoint(function() {
        $('section#caracteristicas #appCentral').addClass('animated fadeInDownBig');

    }, {
        offset: '60%'
    });
    /**this */
    ///////////////////// ANIMACION 1///////////////////////////
    $('section#caracteristicas .anima11').waypoint(function() {
        $('section#caracteristicas .anima11').addClass('animated fadeInLeft');
    }, {
        offset: '80%'
    });
    $('section#caracteristicas .anima12').waypoint(function() {
        $('section#caracteristicas .anima12').addClass('animated fadeInLeft');
    }, {
        offset: '80%'
    });
    $('section#caracteristicas .anima13').waypoint(function() {
        $('section#caracteristicas .anima13').addClass('animated fadeInLeft');
    }, {
        offset: '80%'
    });
    $('section#caracteristicas .anima4').waypoint(function() {
        $('section#caracteristicas .anima4').addClass('animated fadeInLeft');
    }, {
        offset: '80%'
    });
    $('section#caracteristicas .anima5').waypoint(function() {
        $('section#caracteristicas .anima5').addClass('animated fadeInLeft');
    }, {
        offset: '80%'
    });
    ///////////////////// ANIMACION 2///////////////////////////
    $('section#caracteristicas .anima6').waypoint(function() {
        $('section#caracteristicas .anima6').addClass('animated fadeInRight');

    }, {
        offset: '80%'
    });
    $('section#caracteristicas .anima7').waypoint(function() {
        $('section#caracteristicas .anima7').addClass('animated fadeInRight');
    }, {
        offset: '80%'
    });
    $('section#caracteristicas .anima8').waypoint(function() {
        $('section#caracteristicas .anima8').addClass('animated fadeInRight');
    }, {
        offset: '80%'
    });
    $('section#caracteristicas .anima9').waypoint(function() {
        $('section#caracteristicas .anima9').addClass('animated fadeInRight');
    }, {
        offset: '80%'
    });
    $('section#caracteristicas .anima10').waypoint(function() {
        $('section#caracteristicas .anima10').addClass('animated fadeInRight');
    }, {
        offset: '80%'
    });
    /**animacion pantalla */

    $('section#diseño .anima1').waypoint(function() {
        $('section#diseño .anima1').addClass('animated fadeInRight');

    }, {
        offset: '60%'
    });

    $('section#diseño .anima2').waypoint(function() {
        $('section#diseño .anima2').addClass('animated fadeInRight');

    }, {
        offset: '60%'
    });
    $('section#diseño .anima3').waypoint(function() {
        $('section#diseño .anima3').addClass('animated fadeInRight');

    }, {
        offset: '60%'
    });
    /**animacion decarga */

    $('section#fotografia .anima1').waypoint(function() {
        $('section#fotografia .anima1').addClass('animated fadeInRight');

    }, {
        offset: '90%'
    });

    $('section#fotografia .anima2').waypoint(function() {
        $('section#fotografia .anima2').addClass('animated fadeInRight');

    }, {
        offset: '90%'
    });

    $('section#fotografia .anima3').waypoint(function() {
        $('section#fotografia .anima3').addClass('animated fadeInRight');

    }, {
        offset: '90%'
    });

    $('#soporteForm').bootstrapValidator({
        message: "Esto no es Válido",
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nombre: {
                validators: {
                    notEmpty: {
                        message: "Este es un campo obligatorio"
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: "Este es un campo obligatorio"
                    },
                    emailAddress: {
                        message: "Esto no parece un correo electrónico "
                    }
                }
            },
            mensaje: {
                validators: {
                    notEmpty: {
                        message: "El mensaje no puede ir vacío"
                    }
                }
            }
        }
    }).on('success.form.bv', function(e) {
        e.preventDefault();
        var $form = $(e.target);

        var bv = $form.data('bootstrapValidator');
        $.post($form.attr('action'), $form.serialize(), function(result) {
            $('#correcto').fadeIn();
            console.log(result);
        }, 'jason');

    })
});


smoothScroll.init({
    speed: 700, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutQuad', // Easing pattern to use
    updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callbackBefore: function(toggle, anchor) {}, // Function to run before scrolling
    callbackAfter: function(toggle, anchor) {} // Function to run after scrolling
});