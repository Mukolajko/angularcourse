App.controller('MainController',function(Posts){
    this.posts = [];
    //make API call to get all posts
    this.posts = Posts.get({}, function() {});
});