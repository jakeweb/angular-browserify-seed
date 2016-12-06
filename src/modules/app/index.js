'use strict';

module.exports =
    angular.module('expressly', [
        'ngRoute',
        'ngAnimate',
        'ngAria',
        'ngMaterial',
        'pascalprecht.translate',
        'infinite-scroll',

        // html templates in $templateCache
        require('../../../tmp/templates').name,

        // common directives, filters, services
        require('../common').name,

        // modules
        require('./gallery').name
    ])
    .config( /*@ngInject*/ function($translateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $translateProvider.preferredLanguage('en');
    });
