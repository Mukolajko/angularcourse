(function() {
  'use strict';

  angular.module('myApp', ['ngResource', 'ngRoute', 'base64']).filter('sanitize', function($sce) { return $sce.trustAsHtml; });

})();
