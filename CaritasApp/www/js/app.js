// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('startseite', {
    url: '/starseite',
    templateUrl: 'templates/startseite.html',
    controller: 'startseiteCtrl'
  })

  .state('spender', {
    url: '/spenderSeite',
    templateUrl: 'templates/spender.html',
    controller: 'spenderCtrl'
  })

  .state('hilfe', {
    url: '/hilfe',
    templateUrl: 'templates/hilfe.html',
    controller: 'hilfeCtrl'
  })

  .state('altePerson', {
    url: '/altePerson',
    templateUrl: 'templates/altePerson.html',
    controller: 'altePersonCtrl'
  })

  .state('alleinerziehendePerson', {
    url: '/alleinerziehend',
    templateUrl: 'templates/alleinerziehendePerson.html',
    controller: 'alleinerziehendePersonCtrl'
  })

  .state('warumHilfe', {
    url: '/allein_1_hilfe',
    templateUrl: 'templates/warumHilfe.html',
    controller: 'warumHilfeCtrl'
  })

  .state('kind', {
    url: '/allein_2_Kind',
    templateUrl: 'templates/kind.html',
    controller: 'kindCtrl'
  })

  .state('rechtliches', {
    url: '/allein_3_recht',
    templateUrl: 'templates/rechtliches.html',
    controller: 'rechtlichesCtrl'
  })

  .state('kontakt', {
    url: '/allein_5_Kontakt',
    templateUrl: 'templates/kontakt.html',
    controller: 'kontaktCtrl'
  })

  .state('literaturempfehlungen', {
    url: '/allein_4_literatur',
    templateUrl: 'templates/literaturempfehlungen.html',
    controller: 'literaturempfehlungenCtrl'
  })

$urlRouterProvider.otherwise('/starseite')

  

});