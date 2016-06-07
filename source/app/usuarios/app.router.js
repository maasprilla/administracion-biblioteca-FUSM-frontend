(function(){
  'use strict';

  angular.module('app.usuarios.router',[

  ]).config(configure);


  configure.$inject = ['$stateProvider', '$urlRouterProvider'];
  function configure($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
                  .state('usuariosCreate',{
                    url: '/usuarios-create',
                    template: '<usuarios-create/>'
                  });
  }
})();
