(function(window, document) {
  'use strict';

  angular
    .module('app', [
      'ngRoute',
      
      'app.viewmodel',
      'app.directive'
    ]);
})(this, document);
