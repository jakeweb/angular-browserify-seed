'use strict';

module.exports = /*@ngInject*/
    function albumController($scope, $routeParams, apiService) {

        apiService.getAlbum($routeParams.id).then(function(response) {
                $scope.images = response.data;
            })
            .catch(function(error) {
                console.log(error);
            });
    };
