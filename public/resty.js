var app = angular.module('restyApp', ['ngRoute', 'ngResource']);


app.controller('restyController', function () {
    var resty = this;
    resty.go = 5;
});
