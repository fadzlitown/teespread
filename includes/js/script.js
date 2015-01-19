
$(function(){


    /*
    * Bootstrap Components
    * */
    $(".dropdown-menu li a").click(function(){
        $(this).parents(".btn-group").find('.btnShow').text($(this).text());
        $(this).parents(".btn-group").find('.btnShow').val($(this).data('value'));
    });

    $(".dropdown-menu li a").hover(function() {
        $(this).parents(".btn-group").find('.btnShow').text($(this).text());
    });

    $('.collapse').collapse();
    $('#myCollapsible').collapse({
        toggle: false
    })

    /*End Bootstrap Component*/

    /*
    * JQUERY Components
    * */
    $('[data-toggle="popover"]').popover({trigger: 'hover','placement': 'bottom'});

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
    })

    $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show')
    })

    $('#searchItems').click(function(e){
        e.preventDefault();
        $('#successAlert').slideDown();
    });

    //This code is not belong to me
    // This script is an adaption of the following example:
    // http://www.simonbattersby.com/demos/vertical_scrollbar_demo.htm & http://jsfiddle.net/mitchmalone/XRnxL/

    $.fn.makeScroll = function() {
        $(this).each(function() {
            $(this).css('overflow', 'hidden');

            var difference = $(this).find('.scroll-content').height() - $(this).height();

            if (difference > 0) {
                var proportion = difference / $(this).find('.scroll-content').height();
                var handleHeight = Math.round((1 - proportion) * $(this).height());
                handleHeight -= handleHeight % 2;

                $(this).after('<\div class="slider-wrap"><\div class="slider-vertical"><\/div><\/div>');
                $(this).next('.slider-wrap').height($(this).height());

                $(this).next('.slider-wrap').find(".slider-vertical").slider({
                    orientation: 'vertical',
                    range: 'max',
                    min: 0,
                    max: 100,
                    value: 100,
                    slide: function(event, ui) {
                        var topValue = -((100 - ui.value) * difference / 100);
                        $(this).parents(".slider-wrap").prev(".scroll-pane").find('.scroll-content').css({
                            top: topValue
                        });
                    }
                });

                $(".ui-slider-handle").css({
                    height: handleHeight,
                    'margin-bottom': -0.5 * handleHeight
                });

                var origSliderHeight = $(this).next('.slider-wrap').find(".slider-vertical").height();
                var sliderHeight = origSliderHeight - handleHeight;
                var sliderMargin = (origSliderHeight - sliderHeight) * 0.5;
                $(".ui-slider").css({
                    height: sliderHeight,
                    'margin-top': sliderMargin
                });
                $(".ui-slider-range").css({
                    top: -sliderMargin
                });

                $(this).click(function() {
                    $(this).next('.slider-wrap').find(".slider-vertical").slider("value", 0);
                    $(this).find('.scroll-content').css({
                        top: -difference
                    });
                })
            }

            $(this).add($(this).find(".slider-wrap")).mousewheel(function(event, delta) {
                var speed = 5;
                var sliderVal = $(this).next('.slider-wrap').find(".slider-vertical").slider("value");

                sliderVal += (delta * speed);

                $(this).next('.slider-wrap').find(".slider-vertical").slider("value", sliderVal);

                var topValue = -((100 - sliderVal) * difference / 100);

                if (topValue > 0) topValue = 0;
                if (Math.abs(topValue) > difference) topValue = (-1) * difference;

                $(this).find(".scroll-content").css({
                    top: topValue
                });
                event.preventDefault();
            });
        });
    };

    /*End JQuery Components*/



 });
