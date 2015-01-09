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
});