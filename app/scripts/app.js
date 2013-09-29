'use strict';

angular.module('feedbachApp', ['ngRoute','ngResource', 'ui.bootstrap', 'truncate', 'monospaced.qrcode'])
.config(function ($routeProvider) {
  $routeProvider
    .when('/create/:id', {
      templateUrl: 'views/create.html',
      controller: 'CreateCtrl'
    })
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/animate', {
      templateUrl: 'views/animate.html',
      controller: 'AnimateCtrl'
    })
    .when('/view/:id', {
      templateUrl: 'views/view.html',
      controller: 'ViewCtrl'
    })
    .when('/overview', {
      templateUrl: 'views/overview.html',
      controller: 'OverviewCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .when('/:id', {
      templateUrl: 'views/vote.html',
      controller: 'VoteCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
})
.directive('verticalCenter', function($window){
  return function(scope, element, attr){
    var pixels;
    var w = angular.element($window);
    function setPixels(){
      var h = $window.innerHeight;
      var eh = element[0].clientHeight;
      pixels = (h - eh)/2 - 30;
      if (pixels < 50) pixels = 50 + 'px';
      else             pixels = pixels + 'px';
      element.css('margin-top', pixels);
    }
    setPixels();
    w.bind('resize', function(){
      setPixels();
    });
  }
})
.directive('voteBtn', function(){
  return function(scope, element, attrs){
    var btnClass = ['btn-primary', 'btn-info', 'btn-success', 'btn-warning'];
    element.addClass(btnClass[attrs.voteBtn]);
  }
})
