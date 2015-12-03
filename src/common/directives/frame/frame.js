import 'common/directives/avatar/avatar';

// Examples of including templates and SASS
let template = require('./frame.tpl.html');
require('./frame.scss');

function sampleFrame () {
  return {
    controller: ($scope, $mdSidenav) => {
      $scope.toggle = () => {
        $mdSidenav('left').toggle();
      };
    },
    restrict: 'E',
    templateUrl: template,
  }
}

angular.module('directives.frame', ['directives.avatar', 'ngMaterial', 'ngMdIcons'])
  .directive('sampleFrame', sampleFrame);