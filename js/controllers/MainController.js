App.controller('MainController',function($scope, toaster) {
    //main users data
    this.users = [];
    //value to store form data
    this.user = {};
    //add user to data
    this.addUser = function() {
        if (!this.validate()) {return toaster.pop('error', "Form error", "Please fill all data");}
        //if all add user into users array
        this.users.push(this.user);
        //reset user form data
        this.user = {};
        toaster.pop('success', "OK", "User was added");
    };
    //remove user from data
    this.removeUser = function(userIndex) {
        //remove data from users array
        this.users.splice(userIndex, 1);
        toaster.pop('success', "DB OK", "User was removed");
    };

    this.validate = function() {
        if (!this.user.name) return false;
        if (!this.user.age) return false;
        if (!this.user.gender) return false;

        return true;
    };
});