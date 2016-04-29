App.factory('AuthService', function() {
    var currentUser = null;

    return {
        login: function(user) {currentUser = user; return user; },
        logout: function() {currentUser = null; return null; },
        isLoggedIn: function() { return currentUser != null },
        currentUser: function() { return currentUser; }
    };
});