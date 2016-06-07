(function(){
    'use strict';

    angular.module('app.password.recovery.directive', [

    ]).directive('passRecovery', passRecovery);


    passRecovery.$inject = [];
    function passRecovery(){
      return{
        scope:{},
        templateUrl:'app/password/password-recovery/password-recovery.html',
        controller: 'passRecoveryCtrl',
        controllerAs: 'vm'
      }
    }




})();
