"use strict";angular.module("enlargeWordApp",["ngRoute","ngSanitize"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("enlargeWordApp").controller("MainCtrl",["$scope",function(a){var b="&nbsp;";a.enlarger={word:"Bye",repeat:10,enlarged:""},a.enlarge=function(){for(var c=a.enlarger.word,d=c.slice(-1),e=1;e<=a.enlarger.repeat;e++)c=c+Array(e+1).join(b)+d;a.enlarger.enlarged=c},a.reset=function(){a.enlarger.word=""},a.enlarge()}]);