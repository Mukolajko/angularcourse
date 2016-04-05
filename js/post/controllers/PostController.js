App.controller('PostController',function($routeParams, Post){
    //make API call to get post by id
    this.post = Post.get({id: $routeParams.id}, function() {});
});