(function(){
  'use strict';

  angular.module('app.prestamos.router',[

  ]).config(configure);


  configure.$inject = ['$stateProvider', '$urlRouterProvider'];
  function configure($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
                  .state('prestamosCreate',{
                    url: '/prestamos-create',
                    template: '<prestamos-create/>'
                  }).state('prestamosList',{
                    url: '/prestamos-list',
                    template: '<prestamos-list/>'
                  }).state('prestamosHistorial',{
                    url: '/prestamos-historial',
                    template: '<prestamos-historial/>'
                  });
  }
})();
