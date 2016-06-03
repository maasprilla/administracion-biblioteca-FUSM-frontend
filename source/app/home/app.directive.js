(function(){
    'use strict';

    angular.module('app.home.directive', [

    ]).directive('home', home);

    home.$inject = [];
    function home(){
      return{
        scope:{},
        restrict: 'EA',
        templateUrl:'app/home/home.html'
      };
    }

})();
