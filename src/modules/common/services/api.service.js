'use strict';

module.exports = /*@ngInject*/
    function apiService($rootScope, $http) {
        var api = {
            all: 'http://jsonplaceholder.typicode.com/photos',
            albumPrefix: 'http://jsonplaceholder.typicode.com/albums/',
            albumPostfix: '/photos',
            photo: 'http://jsonplaceholder.typicode.com/photos/'
        };

        var service = {
            getAll: getAll,
            getAlbum: getAlbum,
            getPhoto: getPhoto
        };

        return service;

        function getAll() {
            return get(api.all);
        }

        function getAlbum(id) {
            var url = api.albumPrefix + id + api.albumPostfix;
            console.log('getAlbum', id);
            return get(url);
        }

        function getPhoto(id) {
            var url = api.photo + id;
            console.log('getPhoto', url);
            return get(url);
        }

        function get(url) {
            return $http.get(url);
        }
    };
