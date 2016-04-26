App.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    //resolve
    $routeProvider
        .when('/', {
            templateUrl: 'js/main/partials/main.html',
            controller: 'MainController'
        })
        .when('/login', {
            templateUrl: 'js/login/partials/login.html',
            controller: 'LoginController'
        })

}).run( function($rootScope, $location, AuthService) {
    // register listener to watch route changes
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        if ( !AuthService.isLoggedIn() ) {
            $location.path( "/login" );
        }
        else {
            $location.path( "/" );
        }
    });
});
