App.controller('SinglePostController',function($scope, $routeParams, Posts){
    //make API call to get post by id
    $scope.post = Posts.findById({id: $routeParams.id}, function() {});
});