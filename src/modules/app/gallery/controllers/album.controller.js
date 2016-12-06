'use strict';

module.exports = /*@ngInject*/
    function albumController($scope, $routeParams, apiService) {
        console.log('albumController', $routeParams.id);

        apiService.getAlbum($routeParams.id).then(function(response) {
                $scope.images = response.data;
            })
            .catch(function(error) {
                console.log(error);
            });
    };
