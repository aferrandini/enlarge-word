'use strict';

/**
 * @ngdoc overview
 * @name enlargeWordApp
 * @description
 * # enlargeWordApp
 *
 * Main module of the application.
 */
angular
  .module('enlargeWordApp', [
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
