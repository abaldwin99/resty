var app = angular.module('restyApp', ['ngRoute', 'ngResource']);


app.factory('Post', function ($resource) {
    return $resource('/posts/:id');
});


app.controller('restyController', function ($scope, Post) {
    var resty = this;
    resty.go = 5;

    var posts = Post.query(function () {
        resty.go = posts;
    });

    var onePost = Post.get({id: 1}, function () {
        console.log(onePost.title)
    });

    var newPost = new Post();
    newPost.data = {
      "title": "asdf",
      "author": "asdf",
    }
    Post.save(newPost, function() {
        console.log('saved')
    });


});
