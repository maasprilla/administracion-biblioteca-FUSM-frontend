(function(){
    'use strict';

    angular.module('app.home.router', [

    ]).config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('home',{
        url: '/home',
             template: '<home/>'

        
      });


    }

})();
