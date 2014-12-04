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
  	$scope.enlarger = {};
  	$scope.enlarger.word = '';
  	$scope.enlarger.repeat = 10;
  	$scope.enlarger.enlarged = 'Bye e  e   e    e     e      e       e        e         e          e';

  	$scope.enlarge = function() {
  		var word = $scope.enlarger.word;
		var lastLeter = word.slice(-1);

		var spaces = '';
		for (var i=1; i<=$scope.enlarger.repeat; i++) {
			var count = i;
			var spaces = '';
			while(count) {
				spaces += ' ';
				count--;
			}

  			word = word + spaces + lastLeter;
  		}

  		$scope.enlarger.enlarged = word;
  	}
  });
