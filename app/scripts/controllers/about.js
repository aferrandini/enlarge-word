'use strict';

/**
 * @ngdoc function
 * @name enlargeWordApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the enlargeWordApp
 */
angular.module('enlargeWordApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
