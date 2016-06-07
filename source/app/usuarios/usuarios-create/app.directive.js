(function(){
  'use strict';
  angular.module('app.usuarios-create.directive', [

  ]).directive('usuariosCreate', usuariosCreate);

  usuariosCreate.$inject = [];
  function usuariosCreate(){
    return{
      scope:{},
      templateUrl:'app/usuarios/usuarios-create/usuarios-create.html',
      controller: 'usuariosCreateCtrl',
      controllerAs: 'vm'
    };
  }
})();
