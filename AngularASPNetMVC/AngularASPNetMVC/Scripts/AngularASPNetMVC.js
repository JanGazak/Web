var AngularASPNetMVC = angular.module('AngularASPNetMVC', ['ngRoute']);

AngularASPNetMVC.controller('LandingPageController', LandingPageController);
AngularASPNetMVC.controller('LoginController', LoginController);
AngularASPNetMVC.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
AngularASPNetMVC.controller('RegisterController', RegisterController);

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        })
        .when('/login?returnUrl', {
            templateUrl: 'Account/Login',
            controller: LoginController
        })
        .when('/register', {
            templateUrl: '/Account/Register',
            controller: RegisterController
        });
}

$httpProvider.interceptors.push('AuthHttpResponseInterceptor');

configFunction.$inject = ['$routeProvider', '$httpProvider'];

AngularASPNetMVC.config(configFunction);

