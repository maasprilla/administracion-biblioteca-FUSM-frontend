(function(){
  'use strict';

  angular.module('app.header.directive', [

  ]).directive('encabezado', encabezado)
  .directive('encabezadoauth', encabezadoauth);

  encabezado.$inject = [];
  function encabezado(){
    return {
      scope:{},
      restrict: 'EA',
      templateUrl: 'app/header/header.html',
      controller:'LoginController',
      controllerAs:'vm'
  };
}

encabezadoauth.$inject = [];
function encabezadoauth(){
  return {
    scope:{},
    restrict: 'EA',
    templateUrl: 'app/header/headerauth.html',
    controller:'LoginController',
    controllerAs:'vm'
};
}



})();
