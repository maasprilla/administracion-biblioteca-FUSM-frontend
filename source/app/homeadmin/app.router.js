(function(){
    'use strict';

    angular.module('app.homeadmin.router', [

    ]).config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('homeadmin',{
        url: '/homeadmin',
        views:{
          'encabezadoadminauth':{
             template: '<encabezadoadminauth/>'
          },
          'homeadmin':{
             template: '<homeadmin/>'
          },
          'piedepagina':{
             template: '<piedepagina/>'
          }
        }
      });


    }

})();
