(function() {
    "use strict";
    angular.module("Giveindia").controller("SlotsController", ["$scope", "$http", function($scope, $http) {
        $scope.ui = {
            cars: [],
            filteredCars: [],
            colors: [{ id: 0, color: 'white' }, { id: 1, color: 'black' }, { id: 2, color: 'red' }, { id: 3, color: 'blue' }]
        };
        $scope.searchCriteria = {};

        !(function() {
            $http.get('model/data.json').then(function(response) {
                $scope.ui.cars = response.data;
            }).catch(function(e) {
                console.error("Error Occurred :", e.message || "Error Occurred!");
            });
        })();

        $scope.fetchCarByColor = function(id) {
            var color;
            if (id == 0) {
                color = 'white';
            }
            if (id == 1) {
                color = 'black';
            }
            if (id == 2) {
                color = 'red';
            }
            if (id == 3) {
                color = 'blue';
            }
            $scope.ui.filteredCars = $scope.ui.cars.filter(function(obj) {
                return obj.color === color;
            });
        };


    }]);
})();