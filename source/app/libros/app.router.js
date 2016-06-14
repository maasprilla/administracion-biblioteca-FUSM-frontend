(function(){
  'use strict';

  angular.module('app.libros.router',[

  ]).config(configure);


  configure.$inject = ['$stateProvider', '$urlRouterProvider'];
  function configure($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
                  .state('librosGalery',{
                    url: '/libros-galery',
                    template: '<libros-galery/>'
                  }).state('librosCreate',{
                    url: '/libros-create',
                    template: '<libros-create/>'
                  }).state('librosList',{
                    url: '/libros-list',
                    template: '<libros-list/>'
                  });
  }
})();
