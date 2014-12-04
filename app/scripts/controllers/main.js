'use strict';

/**
 * @ngdoc function
 * @name enlargeWordApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the enlargeWordApp
 */
angular.module('enlargeWordApp')
  .controller('MainCtrl', function ($scope) {
    var space = '&nbsp;';

    $scope.enlarger = {
      word: 'Bye',
      repeat: 10,
      enlarged: ''
    };

    $scope.enlarge = function() {
      var word = $scope.enlarger.word;
      var lastLetter = word.slice(-1);

      for (var i=1; i<=$scope.enlarger.repeat; i++) {
        word = word + Array(i+1).join(space) + lastLetter;
      }

      $scope.enlarger.enlarged = word;
    };

    $scope.reset = function() {
      $scope.enlarger.word = '';
    };

    $scope.enlarge();
  });
