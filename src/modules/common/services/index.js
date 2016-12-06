'use strict';

module.exports =
    angular.module('expressly.common.services', [])
        .factory('apiService', require('./api.service'));
