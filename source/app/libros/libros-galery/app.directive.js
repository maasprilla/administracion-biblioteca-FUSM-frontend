(function(){
  'use strict';
  angular.module('app.libros-galery.directive', [

  ]).directive('librosGalery', librosGalery);

  librosGalery.$inject = [];
  function librosGalery(){
    return{
      scope:{},
      templateUrl:'app/libros/libros-galery/libros-galery.html',
      controller: 'librosGaleryCtrl',
      controllerAs: 'vm'
    };
  }
})();
