(function(){
  'use strict';

  angular.module('app.login.router',[

  ]).config(configure);


  configure.$inject = ['$stateProvider', '$urlRouterProvider'];
  function configure($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
                  .state('login',{
                    url: '/',
                    template: '<login/>'                        
                  });
  }
})();
