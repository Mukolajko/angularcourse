App.controller('LoginController',function($scope, $http, $location, AuthService, $base64){
    $scope.name = "";
    $scope.password = "";
    $scope.error = null;

    //login
    $scope.login = function() {
        var baseString = $base64.encode($scope.name + ":" +  $scope.password);
        $http({
            method: "GET",
            url: "http://angular.codeforges.com/api/wp-json/wp/v2/users/me",
            headers: {
                Authorization: "Basic " + baseString
            }
        }).then(function(data){
            AuthService.login(data.data);
            $location.url("/");
        }, (function(res){
            console.log(res);
            $scope.error = "Username or Password incorrect.";
        }));
    };
});
