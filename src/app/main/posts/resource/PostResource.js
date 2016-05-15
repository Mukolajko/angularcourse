(function() {
  'use strict';
  angular.module('myApp').factory('Post', function($resource) {
    return $resource('http://angular.codeforges.com/api/wp-json/wp/v2/posts/:id');
  });
})();
