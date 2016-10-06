'use strict';

var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express(),
    osc = require("osc"),
    udp = new osc.UDPPort({
        localAddress: "0.0.0.0",
        localPort: 7878,
        remoteAddress: "127.0.0.1",
        remotePort: 7676
    }),
    WebSocket = require("ws"),
    wss = new WebSocket.Server({
        port: 8081
    });

udp.on("ready", function () { /* do nothing... */ });
udp.open();

wss.on("connection", function (socket) {
    var socketPort = new osc.WebSocketPort({ socket: socket }),
        relay = new osc.Relay(udp, socketPort, { raw: true });
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use('/favicon.ico', function(req, res) { res.send(404); });
app.use('/partials/:partial', function(req, res) { res.render('partials/' + req.params.partial); });
app.use('/', function(req, res) { res.render('index'); });

// send index on 404s for angular html5 mode
app.use(function(req, res) { res.render('index'); });

module.exports = app;