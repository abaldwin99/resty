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

    resty.newReview = {};

    resty.getAllReviews = function () {
        var reviews = Review.query(function () {
            resty.reviews = reviews;
        });
    }

    resty.postNewReview = function (review) {
        Review.save(review, function () {
            resty.getAllReviews();
            resty.newReview = {}
        });
    }

    resty.updateReview = function (review) {
        updateReview.$update(function () {
            resty.getAllReviews();
        });
    }

    resty.deleteReview = function (review) {
        review.$delete(function () {
            resty.getAllReviews();
        });
    }

    //Init on app load
    resty.getAllReviews();

});
