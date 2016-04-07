App.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/posts', {
            templateUrl: 'js/posts/partials/index.html',
            controller: 'AllPostsController'
        })
        .when('/posts/:id', {
            templateUrl: 'js/posts/partials/show.html',
            controller: 'SinglePostController'
        })
        .otherwise('/posts');
});