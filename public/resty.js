var app = angular.module('restyApp', ['ngRoute', 'ngResource']);


app.factory('Post', function ($resource) {
    return $resource('/posts/:id', {
        id: '@id'
    }, {
        update: {
            method: 'PUT' // this method issues a PUT request
        }
    });
});


app.controller('restyController', function ($scope, Post) {
    var resty = this;
    resty.go = 5;

    var posts = Post.query(function () {
        resty.go = posts;
    });

    var onePost = Post.get({
        id: 2
    }, function () {
        console.log(onePost.title)
    });

    newPost = {
        "title": "asdf",
        "author": "asdf",
    }
    Post.save(newPost, function () {
        console.log('saved')
    });

    var updatePost = Post.get({
        id: 4
    }, function () {
        updatePost.title = 'something else';
        updatePost.$update(function () {
            console.log('updated id 1')
        });
    });

    var deletePost = Post.get({
        id: 8
    }, function () {
        deletePost.$delete(function () {
            console.log('id 3 is deleted')
        });
    });


});
