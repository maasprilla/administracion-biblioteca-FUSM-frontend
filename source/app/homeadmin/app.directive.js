(function(){
    'use strict';

    angular.module('app.homeadmin.directive', [

    ]).directive('homeadmin', homeadmin);

    homeadmin.$inject = [];
    function homeadmin(){
      return{
        scope:{},
        restrict: 'EA',
        templateUrl:'app/homeadmin/homeadmin.html'
      };
    }

})();
