var AngularASPNetMVC = angular.module('AngularASPNetMVC', ['ngRoute']);

AngularASPNetMVC.controller('LandingPageController', LandingPageController);

var configFunction = function ($routeProvider) {
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        });
}
configFunction.$inject = ['$routeProvider'];

AngularASPNetMVC.config(configFunction);

