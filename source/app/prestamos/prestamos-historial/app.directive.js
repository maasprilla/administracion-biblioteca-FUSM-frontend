(function(){
  'use strict';
  angular.module('app.prestamos-historial.directive', [

  ]).directive('prestamosHistorial', prestamosHistorial);

  prestamosHistorial.$inject = [];
  function prestamosHistorial(){
    return{
      scope:{},
      templateUrl:'app/prestamos/prestamos-historial/prestamos-historial.html',
      controller: 'prestamosHistorialCtrl',
      controllerAs: 'vm'
    };
  }
})();
