(function(){
  'use strict';

  angular.module('app.header.directive', [

  ]).directive('encabezado', encabezado)
  .directive('encabezadoauth', encabezadoauth)
  .directive('encabezadoadminauth', encabezadoadminauth);

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

encabezadoadminauth.$inject = [];
function encabezadoadminauth(){
  return {
    scope:{},
    restrict: 'EA',
    templateUrl: 'app/header/headeradminauth.html',
    controller:'LoginController',
    controllerAs:'vm'
};
}



})();
