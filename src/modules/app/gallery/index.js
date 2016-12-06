'use strict';

module.exports =
    angular.module('expressly.gallery', [])
        .config(require('./routes.js'))
        // .config(require('./i18n/en.js'))
        .controller('galleryController', require('./controllers/gallery.controller'))
        .controller('albumController', require('./controllers/album.controller'))
        .controller('imageController', require('./controllers/image.controller'));
