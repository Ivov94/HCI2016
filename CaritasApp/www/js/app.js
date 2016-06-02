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
    
  

      .state('start', {
    url: '/starseite',
    templateUrl: 'templates/start.html',
    controller: 'startCtrl'
  })

  .state('spenden', {
    url: '/spenderSeite',
    templateUrl: 'templates/spenden.html',
    controller: 'spendenCtrl'
  })

  .state('asylzentrum', {
    url: '/Asylzentrum',
    templateUrl: 'templates/asylzentrum.html',
    controller: 'asylzentrumCtrl'
  })

  .state('asylrechtsberatung', {
    url: '/Asylrechtsberatung',
    templateUrl: 'templates/asylrechtsberatung.html',
    controller: 'asylrechtsberatungCtrl'
  })

  .state('treffpunktSterreich', {
    url: '/Treffpunkt Österreich',
    templateUrl: 'templates/treffpunktSterreich.html',
    controller: 'treffpunktSterreichCtrl'
  })

  .state('begegnungSterreich', {
    url: '/Begegnung Österreich',
    templateUrl: 'templates/begegnungSterreich.html',
    controller: 'begegnungSterreichCtrl'
  })

  .state('deutschkurse', {
    url: '/Deutschkurse',
    templateUrl: 'templates/deutschkurse.html',
    controller: 'deutschkurseCtrl'
  })

  .state('carbizBildungsberatung', {
    url: '/Carbiz - Bildungsberatung',
    templateUrl: 'templates/carbizBildungsberatung.html',
    controller: 'carbizBildungsberatungCtrl'
  })

  .state('baleh', {
    url: '/Baleh',
    templateUrl: 'templates/baleh.html',
    controller: 'balehCtrl'
  })

  .state('lerncafS', {
    url: '/Lerncafés',
    templateUrl: 'templates/lerncafS.html',
    controller: 'lerncafSCtrl'
  })

  .state('psychosozialeAngebote', {
    url: '/page37',
    templateUrl: 'templates/psychosozialeAngebote.html',
    controller: 'psychosozialeAngeboteCtrl'
  })

  .state('hausAmadou', {
    url: '/Haus Amadou',
    templateUrl: 'templates/hausAmadou.html',
    controller: 'hausAmadouCtrl'
  })

  .state('notquartiereFRFlChtlinge', {
    url: '/Notquartiere für Flüchtlinge',
    templateUrl: 'templates/notquartiereFRFlChtlinge.html',
    controller: 'notquartiereFRFlChtlingeCtrl'
  })

  .state('wGsFRUnbegleiteteMinderjHrigeFlChtlinge', {
    url: '/WGs für unbegleitete minderjährige Flüchtlinge',
    templateUrl: 'templates/wGsFRUnbegleiteteMinderjHrigeFlChtlinge.html',
    controller: 'wGsFRUnbegleiteteMinderjHrigeFlChtlingeCtrl'
  })

  .state('wohnhUsereFlChtlinge', {
    url: '/Wohnhäuser',
    templateUrl: 'templates/wohnhUsereFlChtlinge.html',
    controller: 'wohnhUsereFlChtlingeCtrl'
  })

  .state('initiativeMedicalAidForRefugees', {
    url: '/Initiative Medical Aid for Refugees',
    templateUrl: 'templates/initiativeMedicalAidForRefugees.html',
    controller: 'initiativeMedicalAidForRefugeesCtrl'
  })

  .state('hilfeSuchen', {
    url: '/hilfe',
    templateUrl: 'templates/hilfeSuchen.html',
    controller: 'hilfeSuchenCtrl'
  })

  .state('asylwerber', {
    url: '/auflistung',
    templateUrl: 'templates/asylwerber.html',
    controller: 'asylwerberCtrl'
  })

  .state('beratungFRAsylwerberInnen', {
    url: '/Beratung für AsylwerberInnen',
    templateUrl: 'templates/beratungFRAsylwerberInnen.html',
    controller: 'beratungFRAsylwerberInnenCtrl'
  })

  .state('wohnen', {
    url: '/wohnen',
    templateUrl: 'templates/wohnen.html',
    controller: 'wohnenCtrl'
  })

  .state('ausbildung', {
    url: '/ausbildung',
    templateUrl: 'templates/ausbildung.html',
    controller: 'ausbildungCtrl'
  })

  .state('kontakt', {
    url: '/kontaktAltePerson',
    templateUrl: 'templates/kontakt.html',
    controller: 'kontaktCtrl'
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

  .state('asylIntegration', {
    url: '/page11',
    templateUrl: 'templates/asylIntegration.html',
    controller: 'asylIntegrationCtrl'
  })

  .state('kontakt2', {
    url: '/allein_5_Kontakt',
    templateUrl: 'templates/kontakt2.html',
    controller: 'kontakt2Ctrl'
  })

  .state('literaturempfehlungen', {
    url: '/allein_4_literatur',
    templateUrl: 'templates/literaturempfehlungen.html',
    controller: 'literaturempfehlungenCtrl'
  })

  .state('pflege', {
    url: '/altePerson1',
    templateUrl: 'templates/pflege.html',
    controller: 'pflegeCtrl'
  })

  .state('pflegeZuhause', {
    url: '/altePersonPflegeZuhause',
    templateUrl: 'templates/pflegeZuhause.html',
    controller: 'pflegeZuhauseCtrl'
  })

  .state('24StundenBetreuung', {
    url: '/altePerson24H',
    templateUrl: 'templates/24StundenBetreuung.html',
    controller: '24StundenBetreuungCtrl'
  })

  .state('mobilesHospiz', {
    url: '/altePersonMobilesHospiz',
    templateUrl: 'templates/mobilesHospiz.html',
    controller: 'mobilesHospizCtrl'
  })

  .state('pflegewohnhUser', {
    url: '/altePersonPflegewohnhaeuser',
    templateUrl: 'templates/pflegewohnhUser.html',
    controller: 'pflegewohnhUserCtrl'
  })

  .state('unsereHUser', {
    url: '/altePersonHaeuser',
    templateUrl: 'templates/unsereHUser.html',
    controller: 'unsereHUserCtrl'
  })

  .state('notruftelefon', {
    url: '/altePersonNotruftelefon',
    templateUrl: 'templates/notruftelefon.html',
    controller: 'notruftelefonCtrl'
  })

  .state('obdachWohnen', {
    url: '/obdach_wohnen',
    templateUrl: 'templates/obdachWohnen.html',
    controller: 'obdachWohnenCtrl'
  })

  .state('beratung', {
    url: '/beratung',
    templateUrl: 'templates/beratung.html',
    controller: 'beratungCtrl'
  })

  .state('mobileNotversorgung', {
    url: '/mobile_notversorgung',
    templateUrl: 'templates/mobileNotversorgung.html',
    controller: 'mobileNotversorgungCtrl'
  })

  .state('notschlafstellen', {
    url: '/notschlafstellen',
    templateUrl: 'templates/notschlafstellen.html',
    controller: 'notschlafstellenCtrl'
  })

  .state('tagesaufenthalt', {
    url: '/tagesaufenthalt',
    templateUrl: 'templates/tagesaufenthalt.html',
    controller: 'tagesaufenthaltCtrl'
  })

  .state('mobileWohnbetreuung', {
    url: '/mobile_wohnbetreuung',
    templateUrl: 'templates/mobileWohnbetreuung.html',
    controller: 'mobileWohnbetreuungCtrl'
  })

  .state('sozialRCkkehrberatung', {
    url: '/sozial_und_rueckkehrberatung',
    templateUrl: 'templates/sozialRCkkehrberatung.html',
    controller: 'sozialRCkkehrberatungCtrl'
  })

  .state('p7', {
    url: '/p7_wiener_service_fuer_wohnungslose',
    templateUrl: 'templates/p7.html',
    controller: 'p7Ctrl'
  })

  .state('wohnungssicherungNOst', {
    url: '/wohnungssicherung_noe_ost',
    templateUrl: 'templates/wohnungssicherungNOst.html',
    controller: 'wohnungssicherungNOstCtrl'
  })

  .state('tageszentrumAmHauptbahnhof', {
    url: '/tageszentrum_am_hauptbahnhof',
    templateUrl: 'templates/tageszentrumAmHauptbahnhof.html',
    controller: 'tageszentrumAmHauptbahnhofCtrl'
  })

  .state('betreuunggszentrumGruft', {
    url: '/betreuungszentrum_gruft',
    templateUrl: 'templates/betreuunggszentrumGruft.html',
    controller: 'betreuunggszentrumGruftCtrl'
  })

  .state('zweiteGruft', {
    url: '/zweite_gruft',
    templateUrl: 'templates/zweiteGruft.html',
    controller: 'zweiteGruftCtrl'
  })

  .state('wRmestuben', {
    url: '/waermestuben',
    templateUrl: 'templates/wRmestuben.html',
    controller: 'wRmestubenCtrl'
  })

  .state('streetwork', {
    url: '/streetwork',
    templateUrl: 'templates/streetwork.html',
    controller: 'streetworkCtrl'
  })

  .state('canisibus', {
    url: '/canisibus',
    templateUrl: 'templates/canisibus.html',
    controller: 'canisibusCtrl'
  })

  .state('kLtetelefon', {
    url: '/kaeltetelefon',
    templateUrl: 'templates/kLtetelefon.html',
    controller: 'kLtetelefonCtrl'
  })

  .state('notschlafstellenFRFrauen', {
    url: '/notschlafstellen_frauen',
    templateUrl: 'templates/notschlafstellenFRFrauen.html',
    controller: 'notschlafstellenFRFrauenCtrl'
  })

  .state('notschlafstellenFRMNner', {
    url: '/notschlafstellen_maenner',
    templateUrl: 'templates/notschlafstellenFRMNner.html',
    controller: 'notschlafstellenFRMNnerCtrl'
  })

  .state('notschlafstellenFRJugendliche', {
    url: '/notschlafstellen_jugendliche',
    templateUrl: 'templates/notschlafstellenFRJugendliche.html',
    controller: 'notschlafstellenFRJugendlicheCtrl'
  })

  .state('louiseBus', {
    url: '/louise_bus',
    templateUrl: 'templates/louiseBus.html',
    controller: 'louiseBusCtrl'
  })

$urlRouterProvider.otherwise('/starseite')

  

});