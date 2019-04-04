(function() {
    "use strict";


    var app = angular.module('Giveindia', ['ngRoute']);

    app.config(["$routeProvider", function($routeProvider) {
        $routeProvider.when("/home", {
            controller: "HomeController",
            templateUrl: "modules/Home/Views/home.view.html"
        }).when("/slots", {
            controller: "SlotsController",
            templateUrl: "modules/Slots/Views/slots-view.html"
        }).otherwise({ redirectTo: '/home' });
    }]);
})();