App.controller('MainController',function($scope, $http, toaster) {
    var self = this;
    //main users data
    this.users = [];
    //value to store form data
    this.user = {};
    //load users from remote server
    $http({
        method: 'GET',
        url: 'http://angular.codeforges.com'
    }).then(function (response) {
        self.users = response.data || [];
    }, function (response) {
        toaster.pop('error', "Error load data from server", "Error load data from remote server");
    });

    $scope.sendData = function() {
        var inputData = {
            firstName: $scope.firstName,
            lastName: $scope.lastName,
            userName: $scope.userName
        };
        //send post request to server
        $http({
            method: "POST",
            url: 'http://angular.codeforges.com',
            data: inputData
        }).then(function(response){
            if (response.status != "200") {return toaster.pop('error', "Submit error", "Server error. Code: " + response.status);}
            //if valid response add data to users
            self.users.push(response.data.response);
            toaster.pop('success', "OK", "User was added");
        }, function (response) {
            toaster.pop('error', "Server Error", "Error load data to remote server. Code: " + response.status);
        });
    };

    //remove user from data
    this.removeUser = function(userIndex) {
        //remove data from users array
        this.users.splice(userIndex, 1);
        toaster.pop('success', "DB OK", "User was removed");
    };
});