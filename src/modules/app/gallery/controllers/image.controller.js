'use strict';

module.exports = /*@ngInject*/
    function imageController($scope, $routeParams, apiService) {
        console.log('imageController', $routeParams.id);


        // apiService.getAlbumPhotos(1).then(function(data) {
        //         console.log(data);
        //     })
        //     .catch(function(error) {
        //         console.log(error);
        //     });
    };
