'use strict';

module.exports = /*@ngInject*/
    function galleryController($scope, apiService) {
    	console.log('galleryController');

        var all = null;

        apiService.getAll().then(function(response) {
                all = response.data;
                console.log(all.length);
                $scope.images = all;
            })
            .catch(function(error) {
                console.log(error);
            });

        $scope.showMore = function() {
            $scope.images = all.slice($scope.start, $scope.end);
            $scope.start += $scope.end;
            $scope.end += $scope.end;
        };

    };
