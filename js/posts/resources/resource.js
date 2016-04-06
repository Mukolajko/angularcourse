//resources to get data
App.factory('Posts', function($resource) {
    return $resource('http://angular.codeforges.com/api/wp-json/wp/v2/posts/', {}, {
        get: {isArray:true},
        findById: {url: "http://angular.codeforges.com/api/wp-json/wp/v2/posts/:id"}
    });
});