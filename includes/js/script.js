/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

$(function(){

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


    /*not working yet, smooth scrolling */
    $("ul li <a href='#'>").on('click', function(e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 300, function(){

            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
        });

    });
 });
