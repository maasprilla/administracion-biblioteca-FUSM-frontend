(function(){
    'use strict';

    angular.module('app.libros.list.directive', [

    ]).directive('librosList', librosList);

    librosList.$inject = [];
    function librosList(){
      return{
        scope:{},
        templateUrl:'app/libros/libros-list/libros-list.html',
        controller: 'librosListCtrl',
        controllerAs: 'vm'
      }
    }


})();
