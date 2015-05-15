( function() {
  'use strict';

  angular.module('public.ctrl.createTopic', [])
  .controller('createTopicController', [ '$scope', 'Topic',
  	function($scope, Topic) {
   	      $scope.topic = {};
      $scope.newTopic = {};

      $scope.createTopic = function() {
        var newTopic = new Topic($scope.topic);
        newTopic.$save(newTopic, function(data) {
          if( data.success == false) {
            alert('Error in creating topic!');
          } else {
            $scope.newTopic.title = data.title;
          }
        });
      }
  }
   ]);
})();