"use strict";angular.module("enlargeWordApp",["ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("enlargeWordApp").controller("MainCtrl",["$scope",function(a){a.enlarger={},a.enlarger.word="",a.enlarger.repeat=10,a.enlarger.enlarged="Bye e  e   e    e     e      e       e        e         e          e",a.enlarge=function(){for(var b=a.enlarger.word,c=b.slice(-1),d="",e=1;e<=a.enlarger.repeat;e++){for(var f=e,d="";f;)d+=" ",f--;b=b+d+c}a.enlarger.enlarged=b}}]);