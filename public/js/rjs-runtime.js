/* global require,angular,document */

(function () {
    'use strict';

    require.config({
        urlArgs: "build=16100601",
        paths: {
            angular: '/bower_components/angular/angular',
            angular_route: '/bower_components/angular-route/angular-route'
        },
        shim: {
            'angular': {
                exports: 'angular'
            },
            'angular_route': ['angular']
        }
    });

    require(['angular', 'app'], function () {
        angular.bootstrap(document, ['web-osc-control']);
    });

})();