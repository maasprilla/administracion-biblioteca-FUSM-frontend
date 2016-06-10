(function(){
  'use strict';
  angular
  .module('app.prestamos-list.controller',[])
  .controller('prestamosListCtrl',prestamosListCtrl);
  prestamosListCtrl.$inject = ['PrestamosTemporales'];
  function prestamosListCtrl(PrestamosTemporales) {
    var vm = this;
    console.log('prestamo guardado');
    console.log(PrestamosTemporales.prestamo);


   }
})();
