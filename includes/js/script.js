/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

$(function(){
    // With JQuery
    $("#ex2").slider({});

    $('#searchItems').click(function(e){
        e.preventDefault();
        $('#successAlert').slideDown();
    });


});