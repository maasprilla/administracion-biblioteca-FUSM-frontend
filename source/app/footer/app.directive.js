(function(){
  angular.module('app.footer.directive',[

  ]).directive('piedepagina', piedepagina);

  piedepagina.$inject = [];
  function piedepagina(){
    return {
      scope:{},
      restrict: 'EA',
      templateUrl:'app/footer/footer.html'
    };
  }



})();
