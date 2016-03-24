App.controller('MainController',function($http, toaster) {
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
    //add user to data
    this.addUser = function() {
        if (!this.validate()) {return toaster.pop('error', "Form error", "Please fill all fields");}
        //send post request to server
        $http({
            method: "POST",
            url: 'http://angular.codeforges.com',
            data: self.user
        }).then(function(response){
            if (response.status != "200") {return toaster.pop('error', "Submit error", "Server error. Code: " + response.status);}
            //if valid response add data to users
            self.users.push(self.user);
            //reset user form data
            self.user = {};
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

    this.validate = function() {
        if (!this.user.userName) return false;
        if (!this.user.email) return false;
        if (!this.user.hash) return false;

        return true;
    };
});