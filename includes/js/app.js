$(function() {

    //Set up instafeed
    var feed = new Instafeed({
        clientId: '5c437863dd5d4b50b1db9e9786fb9fd4',
        target: 'instafeed',
        get: 'tagged',
        tagName: 'malaysiastreetwear',
        links: true,
        limit: 3,
        sortBy: 'most-recent',
        resolution: 'thumbnail',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">' +
            '       <div class="photo-box">' +
            '           <div class="image-wrap">' +
            '               <a href="{{link}}"><img src="{{image}}"></a>' +
            '           </div><div class="date"><strong>{{model.user.full_name}}</strong> via Instagram</div>' +
            '           <div class="testo-txt description">{{caption}}' +
            '           </div></div></div>'
    });
    feed.run();

});