(function(){
  'use strict';
  angular.module('app.prestamos-create.directive', [

  ]).directive('prestamosCreate', prestamosCreate);

  prestamosCreate.$inject = [];
  function prestamosCreate(){
    return{
      scope:{},
      templateUrl:'app/prestamos/prestamos-create/prestamos-create.html',
      controller: 'prestamosCreateCtrl',
      controllerAs: 'vm'
    };
  }
})();
