var app = angular.module('restyApp', ['ngRoute', 'ngResource']);


app.factory('Review', function ($resource) {
    return $resource('/reviews/:id', {
        id: '@id'
    }, {
        update: {
            method: 'PUT'
        }
    });
});


app.controller('restyController', function ($scope, Review) {
    var resty = this;
    resty.go = 5;

    var reviews = Review.query(function () {
        resty.go = reviews;
    });

    var oneReview = Review.get({
        id: 2
    }, function () {
        console.log(oneReview.title);
    });

    newReview = {
        "title": "Awesome",
        "author": "Bob",
        "body": "Best product ever",
        "rating": 5
    };
    Review.save(newReview, function () {
        console.log('saved');
    });

    var updateReview = Review.get({
        id: 4
    }, function () {
        updateReview.title = 'something else';
        updateReview.$update(function () {
            console.log('updated id 1');
        });
    });

    var deleteReview = Review.get({
        id: 2
    }, function () {
        deleteReview.$delete(function () {
            console.log('id 3 is deleted');
        });
    });


});
