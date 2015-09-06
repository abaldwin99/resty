var app = angular.module('restyApp', ['ngRoute', 'ngResource']);


app.factory('Post', function ($resource) {
    return $resource('/posts/:id');
});


app.controller('restyController', function ($scope, Post) {
    var resty = this;
    resty.go = 5;

    var posts = Post.query(function () {
        console.log(posts);
        resty.go = posts;
    });



});
