(function() {
    'use strict';
    angular
        .module('app.libros-create.controller', [])
        .controller('librosCreateCtrl', librosCreateCtrl);
    librosCreateCtrl.$inject = ['Libros', 'Procedencias','Editoriales','Categorias','Carreras', '$mdToast', '$location', 'PrestamosTemporales', 'Ejemplares', '$q'];

    function librosCreateCtrl(Libros, Procedencias,Editoriales,Categorias,Carreras, $mdToast, $location, PrestamosTemporales, Ejemplares, $q) {

      var vm=this;
      vm.procedencias=Procedencias.query();
      vm.editoriales=Editoriales.query();
      vm.categorias=Categorias.query();

      vm.create = function() {
          console.log(vm.libro);
          Libros.save(vm.libro, function() {
              $location.url('/libros-galery');
              $mdToast.show(
                  $mdToast.simple()
                  .textContent('Registro de Libro Exitoso...')
                  .position('bottom right'));
          }, function(error) {
              $mdToast.show(
                  $mdToast.simple()
                  .textContent('el libro ya se encuentra registrado')
                  .position('bottom right'));

          });

      }

      vm.findByname = function(str) {
          return Carreras.findByname({
              name: str
          });
      }



    }







})();
