App.controller('LoginController',function($scope, $http, $location, AuthService){
    $scope.name = "";
    $scope.password = "";
    $scope.error = null;

    var allUsers = [];
    var matchedUserId = null;
    //get all users
    requestAPI(null, function(err, data){
        if (err) {console.log(err); return;}
        allUsers = data.data || [];
    });
    //login
    $scope.login = function() {
        //find user in all users and get id
        allUsers.forEach(function(user){
            if (user.name == $scope.name) {matchedUserId = user.id;}
        });

        if (matchedUserId) {
            requestAPI(matchedUserId, function(err, user){
                if (err) {
                    $scope.error = err;
                }
                else {
                    AuthService.login(user.data);
                    $location.url("/");
                }
            });
        }
        else {
            $scope.error = "User not found";
        }
    };
    //method to handle all api requests
    function requestAPI(userId, callback) {
        var user = userId ? userId : "";
        $http({
            method: "GET",
            url: "http://angular.codeforges.com/api/wp-json/wp/v2/users/" + user
        }).then(function(data){
            callback(null, data);
        }, (function(res){
            callback(res, null);
        }));
    };
});
