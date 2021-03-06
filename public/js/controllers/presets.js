/* global angular,define,console */

define([
    'services/osc'
], function () {
    'use strict';
    return angular.module('woc.controllers.presets', ['woc.services.osc'])
        .controller('WOC.Presets.Select', ['$scope', 'oscService', function ($scope, oscService) {
            oscService.registerCallback(function (msg) {
                console.log('preset cb msg', msg);
            });
            $scope.selectedPreset = null;
            $scope.selectedFps = 50;
            $scope.onPresetSelect = function () {
                oscService.sendMessage('/presets', [parseInt($scope.selectedPreset), parseInt($scope.selectedFps)]);
            };
        }]);
});