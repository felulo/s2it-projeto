(function(window, document) {
  'use strict';

  angular
    .module('form-task-directive')
    .directive('formTask', FormTask);

  FormTask.$inject = [];

  function FormTask() {
    var directive;

    directive = {
      restrict: 'E',
      replace: true,
      templateUrl: 'scripts/directives/form-task/form-task.html',
      scope: {
        edit: '=',
        task: '=',
        callbackSuccess: '&',
        callbackError: '&'
      },
      link: link
    };

    return directive;

    function link(scope, elem, attrs) {

      if (scope.edit) {
        scope.name = scope.task.name;
        scope.description = scope.task.description;
      }

      scope.success = success;

      function success() {
        if (scope.edit) {
          scope.task.name = scope.name;
          scope.task.description = scope.description;
        } else {
          scope.callbackSuccess({
            name: scope.name,
            description: scope.description
          });
        }

        scope.callbackError();
      }
    }
  }
})(this, document);
