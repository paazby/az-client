// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('icebreaker', ['ionic']);

app.run(function($ionicPlatform, $rootScope, Database) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  $rootScope.currentUser = {};
  $rootScope.currentUser.id = 0;
  $rootScope.currentEvent = {};

  Database.potentialMatches().success(function(data) {
    $rootScope.potentialMatches = data.results;
  });

  Database.potentialEvents().success(function(data) {
    $rootScope.potentialEvents = data.results;
    console.log(data);
  });

  Database.matches($rootScope.currentUser.id).success(function(data) {
    $rootScope.matches = {};
    for (var i = 0; i < data.results.length; i++) {
      var match = data.results[i];
      $rootScope.matches[match.id] = match;
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/sign-in");

  $stateProvider
    .state('signin', {
      url: '/sign-in',
      templateUrl: '../templates/sign-in.html',
      controller: 'SignInCtrl'
    })

    // .state('tab', {
    //   url: '/tab',
    //   abstract: true,
    //   templateUrl: "../templates/tabs.html"
    // })

    // .state('tab.events', {
    //   url: '/events',
    //   views: {
    //     'tab-events': {
    //       templateUrl: '../templates/events.html',
    //       controller: 'EventsCtrl'
    //     }
    //   }
    // })
    
    // .state('tab.matches', {
    //   url: '/matches',
    //   views: {
    //     'tab-matches': {
    //       templateUrl: '../templates/matches.html',
    //       controller: 'MatchesCtrl'
    //     }
    //   }
    // })

    .state('events', {
      url: '/events',
      templateUrl: '../templates/events.html',
      controller: 'EventsCtrl'
    })

    .state('matches', {
      url: '/matches',
      templateUrl: '../templates/matches.html',
      controller: 'MatchesCtrl'
    })

    .state('potentialEvents', {
      url: '/potentialEvents',
      templateUrl: "../templates/potentialEvents.html",
      controller: 'PotentialEventsCtrl'
    })

    .state('potentialMatches', {
      url: '/potentialMatches',
      templateUrl: '../templates/potentialMatches.html',
      controller: 'PotentialMatchesCtrl'
    })

    .state('specificMatch', {
      url: '/specificMatch/:id',
      templateUrl: '../templates/specificMatch.html',
      controller: 'SpecificMatchCtrl'
    })

    .state('specificEvent', {
      url: '/specificEvent',
      templateUrl: '../templates/specificEvent.html',
      controller: 'SpecificEventCtrl'
    })


})

// .controller('CardsCtrl', function($scope, $ionicSwipeCardDelegate) {

//   $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

//   $scope.cardSwiped = function(index) {
//     $scope.addCard();
//   };

//   $scope.cardDestroyed = function(index) {
//     $scope.cards.splice(index, 1);
//   };

//   $scope.addCard = function() {
//     var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
//     newCard.id = Math.random();
//     $scope.cards.push(angular.extend({}, newCard));
//   }
// })

// .controller('CardCtrl', function($scope, $ionicSwipeCardDelegate) {
//   $scope.goAway = function() {
//     var card = $ionicSwipeCardDelegate.getSwipebleCard($scope);
//     card.swipe();
//   };
// });
