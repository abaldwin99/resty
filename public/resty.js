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

    resty.getAllReviews = function () {
        var reviews = Review.query(function () {
            resty.reviews = reviews;
        });
    }

    //    var oneReview = Review.get({
    //        id: 2
    //    }, function () {
    //        console.log(oneReview.title);
    //    });

    resty.postNewReview = function (newReview) {
        //     newReview = {
        //        "title": "Awesome",
        //        "author": "Bob",
        //        "body": "Best product ever",
        //        "rating": 5
        //    };

        Review.save(newReview, function () {
            getAllReviews();
        });
    }


    resty.updateReview = function (review) {
        updateReview.$update(function () {
            getAllReviews();
        });
    }



    resty.deleteReview = function (review) {
        review.$delete(function () {
            resty.getAllReviews();
        });
    }

    //Init on page load
    resty.getAllReviews();

});
