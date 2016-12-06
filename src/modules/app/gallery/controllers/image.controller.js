'use strict';

module.exports = /*@ngInject*/
    function imageController($scope, $routeParams, apiService) {
        console.log('imageController', $routeParams.id);


        apiService.getPhoto($routeParams.id).then(function(response) {
                $scope.image = response.data;
            })
            .catch(function(error) {
                console.log(error);
            });
    };
