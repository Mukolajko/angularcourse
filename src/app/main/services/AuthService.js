(function() {
  'use strict';

  angular.module('myApp').factory( 'AuthService', function($window, $base64, $http) {
    var currentUser;

    return {
      fetchUser: function(){
        if ($window.sessionStorage.user) {
          currentUser = JSON.parse($window.sessionStorage.user);
          $http.defaults.headers.common["Authorization"] = 'Basic ' + $base64.encode( currentUser.name + ':' + currentUser.password );
        }
      },
      login: function(user, pass) {
      currentUser = user.body;
      currentUser.password = pass;
      $window.sessionStorage.setItem('user', JSON.stringify(currentUser));
      },
      logout: function() {
      currentUser = null;
      $window.sessionStorage.user = null;
      },
      isLoggedIn: function() {
        return currentUser != null
      },
      currentUser: function() {
        return currentUser;
      }
    };
});

})();
