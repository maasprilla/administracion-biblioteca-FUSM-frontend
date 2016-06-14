(function(){
  'use strict';
  angular.module('app.libros-create.directive', [

  ]).directive('librosCreate', librosCreate);

  librosCreate.$inject = [];
  function librosCreate(){
    return{
      scope:{},
      templateUrl:'app/libros/libros-create/libros-create.html',
      controller: 'librosCreateCtrl',
      controllerAs: 'vm'
    };
  }
})();
