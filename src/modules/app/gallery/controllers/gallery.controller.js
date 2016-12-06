'use strict';

module.exports = /*@ngInject*/
    function galleryController($scope, apiService, allImages) {

        $scope.start = 0;
        $scope.step = 6;
        $scope.end = 15;

        $scope.images = [];

        $scope.showMore = function() {
            $scope.images = $scope.images.concat(allImages.data.slice($scope.start, $scope.end));
            $scope.start = $scope.end;
            $scope.end += $scope.step;
        };

    };
