App.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/posts', {
            templateUrl: 'js/posts/partials/allposts.html',
            controller: 'AllPostsController'
        })
        .when('/posts/:id', {
            templateUrl: 'js/posts/partials/singlepost.html',
            controller: 'SinglePostController'
        })
        .otherwise('/posts');
});