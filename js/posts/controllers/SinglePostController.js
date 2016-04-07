App.controller('SinglePostController',function($scope, $routeParams, Posts){
    //make API call to get post by id
    $scope.post = Posts.get({id: $routeParams.id}, function(post){
        console.log(post)
    });
});