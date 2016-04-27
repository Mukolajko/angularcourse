App.controller('MainController',function($scope, $location, AuthService){
    $scope.user = AuthService.currentUser();
    //logout method
    $scope.logout = function() {
        AuthService.logout();
        $location.url("/login");
    }
});
