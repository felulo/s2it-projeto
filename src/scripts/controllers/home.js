(function(window, document) {
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['TaskViewmodel'];

  function HomeController(TaskViewmodel) {
    this.taskVM = TaskViewmodel;
  }
})(this, document);
