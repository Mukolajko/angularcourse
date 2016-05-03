App.controller('LoginController',function($scope, $http, $location, AuthService, $base64){
    $scope.name = "";
    $scope.password = "";
    $scope.error = null;

    //login
    $scope.login = function() {
        var baseString = $base64.encode($scope.name + ":" +  $scope.password);
        $http({
            method: "GET",
            url: "http://angular.codeforges.com/api/wp-json/wp/v2/users/me?_envelope",
            headers: {
                Authorization: "Basic " + baseString
            }
        }).then(function(data){
            if (data.data.status != 302) {
                $scope.error = "Incorrect username or password";
            }
            else {
                AuthService.login(data.data.body);
                $location.url("/");
            }

        }, (function(res){
            console.log(res);
            $scope.error = "Sorry we have some server problem";
        }));
    };
});
