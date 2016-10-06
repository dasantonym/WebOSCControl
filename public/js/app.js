/* global angular,define */

define([
    'angular_route',
    'controllers/presets'
], function () {
    'use strict';
    return angular.module('web-osc-control', ['ngRoute', 'woc.controllers.presets'])
        .config([
            '$routeProvider',
            '$locationProvider',
            function ($routeProvider, $locationProvider) {
                $locationProvider.html5Mode({
                    enabled: true
                });
                $routeProvider.when('/presets', { templateUrl: '/partials/presets', controller: 'WOC.Presets.Select' });
                $routeProvider.otherwise({redirectTo: '/'});
            }]);
});