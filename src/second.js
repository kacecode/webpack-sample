// Import global dependencies
import angular from 'angular';

import 'common/directives/avatar/avatar';

angular.element(document).ready(
  () => angular.bootstrap(document, ['directives.avatar']));