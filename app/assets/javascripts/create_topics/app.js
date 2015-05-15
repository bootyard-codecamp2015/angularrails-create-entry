( function() {
  'use strict';

  angular.module('create_topics', [
    // Libraries
    'templates',
    'ngRoute', 

    // Resource
    'public.resource.topic',

    // Controllers
    'public.ctrl.createTopic'
  ])
  .config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'create_topics/public/create/create_topic.html'
        });
    }
  ]);
})();