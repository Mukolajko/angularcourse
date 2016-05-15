(function() {
  'use strict';

  angular.module('myApp').controller('PostManageController', function ($scope, Post, $routeParams, $location, AuthService){
    $scope.user = AuthService.currentUser();
    $scope.editMode = $routeParams.edit;

    $scope.post = Post.get({id: $routeParams.id}, function(){
      $scope.title = $scope.post.title.rendered;
      $scope.content = $scope.post.content.rendered;
    });

    $scope.save = function() {
      Post.save({id: $scope.id}, {title: $scope.title, content: $scope.content}, function(){
        $location.path("/");
      });
    }
  });
})();
