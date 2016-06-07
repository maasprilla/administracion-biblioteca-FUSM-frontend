(function(){
  'use strict';

  angular.module('app.password.recovery.controller', [
  ]).controller('passRecoveryCtrl', passRecoveryCtrl);


  passRecoveryCtrl.$inject = ['$location', '$mdToast', '$stateParams'];
  function passRecoveryCtrl($location, $mdToast, $stateParams){

    // var vm=this;
    //
    //
    //
    // vm.enviar=function(){
    //
    //     RecoveryPass.save(vm.recovery, function() {
    //             $location.path('/bienvenido');
    //             $mdToast.show(
    //                 $mdToast.simple()
    //                     .textContent('Se Enviado Un email a tu correo Electronico...')
    //                     .position('bottom right'));
    //                   },function (error) {
    //                     $mdToast.show(
    //                       $mdToast.simple()
    //                       .textContent('Se Enviado Un email a tu correo Electronico...')
    //                       .position('bottom right'));
    //
    //         });
    // }
  }





})();
