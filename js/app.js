var App = angular.module('myApp',['ngResource', 'ngRoute']);

//filter to use html strings in views
App.filter("sanitize", ['$sce', function($sce) {
    return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
    }
}]);

//resources to get data
App.factory('Posts', function($resource) {
    return $resource('http://angular.codeforges.com/api/wp-json/wp/v2/posts/', {}, {get: {isArray:true}});
});

App.factory('Post', function($resource) {
    return $resource('http://angular.codeforges.com/api/wp-json/wp/v2/posts/:id');
});