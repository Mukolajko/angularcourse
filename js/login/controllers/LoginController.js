App.controller('LoginController',function($scope, $http, $location, AuthService){
    $scope.name = "";
    $scope.password = "";
    $scope.allUsers = [];
    $scope.matchedUserId = null;
    $scope.error = null;
    //get all users
    $http({
        method: "GET",
        url: "http://angular.codeforges.com/api/wp-json/wp/v2/users"
    }).then(function(data){
        $scope.allUsers = data.data || [];
    }, (function(res){
        console.log("Error.");
        console.log(res);
    }));

    $scope.login = function() {
        //find user in all users and get id
        $scope.allUsers.forEach(function(user){
            if (user.name == $scope.name) {$scope.matchedUserId = user.id;}
        });

        if ($scope.matchedUserId) {
            $http({
                method: "GET",
                url: "http://angular.codeforges.com/api/wp-json/wp/v2/users/" + $scope.matchedUserId
            }).then(function(data){
                AuthService.login(data.data);
                $location.url("/");
            }, (function(res){
                console.log("Error.");
                console.log(res);
            }));
        }
        else {
            $scope.error = "User not found";
        }
    }
});
