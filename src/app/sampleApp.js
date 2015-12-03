import 'common/directives/frame/frame';

angular.module('sample-app', ['directives.frame', 'ngMaterial'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .dark()
      .primaryPalette('green')
      .accentPalette('red');
  });