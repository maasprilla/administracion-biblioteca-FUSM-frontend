(function(){
    'use strict';

    angular.module('app.password.confirm.directive', [

    ]).directive('passConfirm', passConfirm);


    passConfirm.$inject = [];
    function passConfirm(){
      return{
        scope:{},
        templateUrl:'app/password/password-confirm/password-confirm.html',
        controller: 'passConfirmCtrl',
        controllerAs: 'vm'
      }
    }




})();
