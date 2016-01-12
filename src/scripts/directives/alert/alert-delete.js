(function(window, document) {
  'use strict';

  angular
    .module('alert-delete-directive')
    .directive('alertDelete', AlertDelete);

  AlertDelete.$inject = [];

  function AlertDelete() {
    var directive;

    directive = {
      restrict: 'E',
      replace: true,
      templateUrl: 'scripts/directives/alert/alert-delete.html',
      scope: {
        callbackSuccess: '&',
        callbackError: '&'
      },
      link: link
    };

    function link(scope, elem, attrs) {
      scope.success = success;

      function success() {
        scope.callbackSuccess();

        scope.callbackError();
      }
    }

    return directive;
  }
})(this, document);
