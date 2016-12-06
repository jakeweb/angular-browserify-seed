'use strict';

module.exports =
    angular.module('expressly.gallery', [])
        .config(require('./routes.js'))
        .controller('galleryController', require('./controllers/gallery.controller'))
        .controller('albumController', require('./controllers/album.controller'))
        .controller('imageController', require('./controllers/image.controller'));
