(function(window, document) {
  'use strict';

  angular
    .module('app')
    .config(Routes);

  Routes.$inject = ['$routeProvider'];

  function Routes($routeProvider) {

    $routeProvider.when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    });

    $routeProvider.otherwise('/');

  }
})(this, document);
