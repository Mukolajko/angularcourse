App.controller('LoginController',function($scope, $http, $location, AuthService, $base64){
    $scope.name = "";
    $scope.password = "";
    $scope.error = null;

    var allUsers = [];
    var matchedUserId = null;
    //get all users
    $http({
        method: "GET",
        url: "http://angular.codeforges.com/api/wp-json/wp/v2/users/"
    }).then(function(data){
        allUsers = data.data || [];
    }, (function(res){
        console.log("Error getting all users");
        console.log(res);
    }));
    //login
    $scope.login = function() {
        //reset id of each try
        matchedUserId = null;
        //find user in all users and get id
        allUsers.forEach(function(user){
            if (user.name == $scope.name) {matchedUserId = user.id;}
        });

        if (matchedUserId) {
            var baseString = $base64.encode($scope.name + ":" +  $scope.password);
            $http({
                method: "POST",
                url: "http://angular.codeforges.com/api/wp-json/wp/v2/users/" + matchedUserId,
                headers: {
                    "authorization": "Basic " + baseString
                }
            }).then(function(data){
                AuthService.login(data.data);
                $location.url("/");
            }, (function(res){
                $scope.error = "Password incorrect or server problem";
            }));
        }
        else {
            $scope.error = "User not found";
        }
    };
});
