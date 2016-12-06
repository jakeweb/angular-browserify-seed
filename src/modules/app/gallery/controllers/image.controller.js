'use strict';

module.exports = /*@ngInject*/
    function imageController($scope, $routeParams, apiService) {

        apiService.getPhoto($routeParams.id).then(function(response) {
                $scope.image = response.data;
            })
            .catch(function(error) {
                console.log(error);
            });
    };
