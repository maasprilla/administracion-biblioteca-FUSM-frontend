(function(){
  'use strict';
  angular.module('app.prestamos-list.directive', [

  ]).directive('prestamosList', prestamosList);

  prestamosList.$inject = [];
  function prestamosList(){
    return{
      scope:{},
      templateUrl:'app/prestamos/prestamos-list/prestamos-list.html',
      controller: 'reservasListCtrl',
      controllerAs: 'vm'
    };
  }
})();
