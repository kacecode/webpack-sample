// Import global dependencies
import angular from 'angular';

import 'angular-material';
// Look Ma, we're importing CSS
require('angular-material/angular-material.css');
import 'angular-material-icons';
import 'angular-animate';
import 'angular-aria';

// Import app to be bootstrapped.
import sampleApp from 'app/sampleApp';


angular.element(document).ready(
  () => angular.bootstrap(document, ['sample-app', 'ngMaterial']));