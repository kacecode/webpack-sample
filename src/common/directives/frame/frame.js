import 'common/directives/avatar/avatar';

// Examples of including templates and SASS
require('./frame.tpl.html');
require('./frame.scss');

function sampleFrame () {
  return {
    controller: ($scope, $mdSidenav) => {
      $scope.toggle = () => {
        $mdSidenav('left').toggle();
      };
    },
    restrict: 'E',
    templateUrl: 'common/directives/frame/frame.tpl.html',
  }
}

angular.module('directives.frame', ['directives.avatar', 'ngMaterial', 'ngMdIcons'])
  .directive('sampleFrame', sampleFrame);