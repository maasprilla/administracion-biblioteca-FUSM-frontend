(function(){
  'use strict';

  angular.module('app.password.confirm.controller', [
  ]).controller('passConfirmCtrl', passConfirmCtrl);


  passConfirmCtrl.$inject = ['$location', '$mdToast', '$stateParams'];
  function passConfirmCtrl($location, $mdToast, $stateParams){

    // var vm=this;
    //
    // vm.usuario = Usuarios.findByIdAndCode({idUsuario: $stateParams.idUsuario, codigoRecuperacionPass: $stateParams.codigo });
    // console.log(vm.usuario);
    //
    // vm.update=function(){
    //
    //
    //     console.log('1');
    //     console.log(vm.password1);
    //     console.log('2');
    //     console.log(vm.password2);
    //     if(vm.password1===vm.password2){
    //       vm.usuario.camaracomercio=vm.password1;
    //     Usuarios.updatePass(vm.usuario, function() {
    //             $location.path('/');
    //             $mdToast.show(
    //                 $mdToast.simple()
    //                     .textContent('Su contraseña ha sido cambiada')
    //                     .position('bottom right'));
    //                   },function (error) {
    //                     $mdToast.show(
    //                       $mdToast.simple()
    //                       .textContent('Su contraseña no ha sido cambiada')
    //                       .position('bottom right'));
    //
    //         });
    //   }else{
    //            $mdToast.show(
    //               $mdToast.simple()
    //                 .textContent('las contraseñas no coinciden')
    //                 .position('bottom right'));
    //   }
    // }
  }





})();
