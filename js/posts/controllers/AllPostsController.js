App.controller('AllPostsController',function($scope, Posts) {
    //make API call to get all posts
    $scope.posts = Posts.query(function(posts){
        console.log(posts);
    });
});