(function() {
  'use strict';

  angular.module('myApp').controller('NewController', function ($scope, Post, $location, AuthService){
    $scope.user = AuthService.currentUser();

    $scope.save = function() {
      Post.save({title: $scope.title, content: $scope.content, status: 'publish'}, function(){
        $location.path("/");
      });
    }
  });
})();
