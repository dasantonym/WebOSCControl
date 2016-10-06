/* global angular,define,osc,console */

define(['angular'], function () {
    'use strict';
    return angular.module('woc.services.osc', []).
        factory('oscService', function () {
            var port = new osc.WebSocketPort({
                url: "ws://localhost:8081"
            });
            port.open();
            return {
                sendMessage: function (addr, args) {
                    port.send({
                        address: addr,
                        args: args
                    });
                },
                registerCallback: function (cb) {
                    port.on("message", function (msg) {
                        cb(msg);
                    });
                }
            };
        });
});