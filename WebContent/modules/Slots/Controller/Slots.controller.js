(function() {
    "use strict";
    angular.module("Giveindia").controller("SlotsController", ["$scope", "$http", "$timeout", function($scope, $http, $timeout) {
        $scope.ui = {
            cars: [],
            filteredCars: [],
            colors: [{ id: 0, color: 'White' }, { id: 1, color: 'Black' }, { id: 2, color: 'Red' }, { id: 3, color: 'Blue' }],
            slotNum: 0,
            registeredMsg: false,
            errorMsg: ""
        };
        $scope.searchCriteria = {},
            $scope.registrationCriteria = {},
            $scope.findCarCriteria = {};

        !(function() {
            /*$http.get('model/data.json').then(function(response) {
                $scope.ui.cars = response.data;
            }).catch(function(e) {
                console.error("Error Occurred :", e.message || "Error Occurred!");
            });*/
            var cars = [{
                    "regno": "KA-01-HH-1234",
                    "color": "black",
                    "slot": 1
                },
                {
                    "regno": "KA-01-HH-0147",
                    "color": "white",
                    "slot": 2
                },
                {
                    "regno": "KA-01-HH-0000",
                    "color": "white",
                    "slot": 3
                },
                {
                    "regno": "KA-01-HH-4557",
                    "color": "red",
                    "slot": 4
                },
                {
                    "regno": "KA-01-HH-3421",
                    "color": "red",
                    "slot": 5
                },
                {
                    "regno": "KA-01-HH-5544",
                    "color": "red",
                    "slot": 6
                },
                {
                    "regno": "KA-01-HH-4455",
                    "color": "red",
                    "slot": 7
                },
                {
                    "regno": "KA-01-HH-1122",
                    "color": "red",
                    "slot": 8
                },
                {
                    "regno": "KA-01-HH-2211",
                    "color": "red",
                    "slot": 9
                },
                {
                    "regno": "KA-01-HH-4545",
                    "color": "red",
                    "slot": 10
                },
                {
                    "regno": "KA-01-HH-5454",
                    "color": "red",
                    "slot": 11
                },
                {
                    "regno": "KA-01-HH-6565",
                    "color": "white",
                    "slot": 12
                },
                {
                    "regno": "KA-01-HH-5656",
                    "color": "blue",
                    "slot": 13
                },
                {
                    "regno": "KA-01-HH-8484",
                    "color": "white",
                    "slot": 14
                },
                {
                    "regno": "KA-01-HH-4848",
                    "color": "red",
                    "slot": 15
                },
                {
                    "regno": "KA-01-HH-0202",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-2200",
                    "color": "white",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-4761",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-0017",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-5748",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-2541",
                    "color": "white",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-5415",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-5915",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-6530",
                    "color": "white",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-1234",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-5256",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-7001",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-5047",
                    "color": "white",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-6810",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-3500",
                    "color": "red",
                    "slot": null
                }, {
                    "regno": "KA-01-HH-2020",
                    "color": "black",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-3030",
                    "color": "blue",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-4040",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-5050",
                    "color": "blue",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-6006",
                    "color": "black",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-6060",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-7070",
                    "color": "white",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-7007",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-8080",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-8008",
                    "color": "black",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-4100",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-4111",
                    "color": "black",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-9801",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-7200",
                    "color": "white",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-6887",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-0978",
                    "color": "blue",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-3221",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-5980",
                    "color": "white",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-8012",
                    "color": "blue",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-8055",
                    "color": "white",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-7485",
                    "color": "blue",
                    "slot": null
                }, {
                    "regno": "KA-01-HH-7001",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-5047",
                    "color": "white",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-6810",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-3500",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-4500",
                    "color": "white",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-6504",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-7604",
                    "color": "white",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-9804",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-6599",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-5400",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-1141",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-9680",
                    "color": "white",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-5203",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-2101",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-2016",
                    "color": "black",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-2017",
                    "color": "white",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-2018",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-5407",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-9866",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-4493",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-0485",
                    "color": "white",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-0457",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-9874",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-6533",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-4141",
                    "color": "black",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-3131",
                    "color": "black",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-2121",
                    "color": "black",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-1010",
                    "color": "black",
                    "slot": null
                }, {
                    "regno": "KA-01-HH-2211",
                    "color": "blue",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-4545",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-5454",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-6565",
                    "color": "white",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-5656",
                    "color": "blue",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-8484",
                    "color": "white",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-4848",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-0202",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-2200",
                    "color": "white",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-4761",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-0017",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-5748",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-2541",
                    "color": "white",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-5415",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-5915",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-6530",
                    "color": "white",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-1234",
                    "color": "red",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-5256",
                    "color": "red",
                    "slot": null
                }, {
                    "regno": "KA-01-HH-5544",
                    "color": "black",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-4455",
                    "color": "black",
                    "slot": null
                },
                {
                    "regno": "KA-01-HH-1122",
                    "color": "red",
                    "slot": null
                }
            ]
            $scope.ui.cars = cars.filter(function(row) {
                return row.slot !== null;
            });

        })();

        $scope.fetchCarByColor = function(carsArray, id) {
            var color;
            // if (id == 0) {
            //     color = 'white';
            // }
            // if (id == 1) {
            //     color = 'black';
            // }
            // if (id == 2) {
            //     color = 'red';
            // }
            // if (id == 3) {
            //     color = 'blue';
            // }
            $scope.ui.filteredCars = carsArray.filter(function(obj) {
                color = (id == 0) ? 'white' : (id == 1) ? 'black' : (id == 2) ? 'red' : 'blue';
                return obj.color === color;
            });
        };

        function checkIfCarExists(arg, flag) {
            for (var i = 0; i < $scope.ui.cars.length; i++) {
                if (flag === "NEAREST_SLOT") {
                    if ($scope.ui.cars[i].slot == null) {
                        return { index: i, obj: $scope.ui.cars[i] };
                        break;
                    }
                }
                if ($scope.ui.cars[i].regno === arg) {
                    if (flag === "GET_SLOT") {
                        $scope.ui.slotNum = $scope.ui.cars[i].slot;
                        break;
                    } else if (flag === "CAR_BY_COLOUR") {
                        alertHandler("Car with this number is already parked in slot " + $scope.ui.cars[i].slot);
                        $scope.registrationCriteria = {};
                        return false;
                    }
                }
            }
            return true;
        }

        function checkFormat(num) {
            if (/(KA)-[0-9]{2}-[A-Z]{2}-[0-9]{4}$/.test(num)) return true;
            return false;
        }

        function alertHandler(text) {
            alert(text);
        }

        function successHandler() {
            $(".alert-info").show('slow');
            $timeout(function() {
                $(".alert-info").hide('slow');
            }, 4000);
        }

        $scope.registerCar = function(criteria) {
            if (checkFormat(criteria.regno)) {
                // if (checkIfCarExists(criteria.regno, "CAR_BY_COLOUR")) {
                var nearestSlotObj = checkIfCarExists(criteria.regno, "NEAREST_SLOT");
                $scope.ui.cars[nearestSlotObj.index].regno = criteria.regno;
                $scope.ui.cars[nearestSlotObj.index].color = criteria.color.toLowerCase();
                $scope.ui.cars[nearestSlotObj.index].slot = nearestSlotObj.index + 1;
                // $scope.ui.cars.splice(newslotIndex, 0, { regno: criteria.regno, color: criteria.color, slot: newslotIndex + 1 });
                // $scope.ui.cars.push({ regno: criteria.regno, color: criteria.color, slot: $scope.ui.cars.length + 1 });
                $scope.registrationCriteria = {};
                $scope.ui.registeredMsg = true;
                $scope.ui.newSlotAllocated = nearestSlotObj.index + 1;
                successHandler();
                // }
            } else {
                alertHandler("Invalid Registration Number Format!");
            }
        };

        $scope.findCar = function(num) {
            if (checkFormat(num)) {
                checkIfCarExists(num, "GET_SLOT");
                successHandler();
            } else {
                alertHandler("Invalid Registration Number Format!");
            }
        };

        $scope.depart = function(cars, ind) {
            $scope.ui.cars[ind].slot = null;
            $scope.ui.cars[ind].regno = null;
            $scope.ui.cars[ind].color = null;
            // cars.splice(ind, 1);
        };

    }]);
})();