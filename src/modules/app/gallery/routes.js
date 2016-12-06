'use strict';

module.exports = /*ngInject*/
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/gallery/templates/gallery.html',
                controller: 'galleryController'
            })
            .when('/album/:id', {
                templateUrl: 'app/gallery/templates/album.html',
                controller: 'albumController'
            })
            .when('/image/:id', {
                templateUrl: 'app/gallery/templates/image.html',
                controller: 'imageController'
            })
            .otherwise({
                redirectTo: '/'
            });
    };