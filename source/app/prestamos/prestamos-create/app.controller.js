(function() {
    'use strict';
    angular
        .module('app.prestamos-create.controller', [])
        .controller('prestamosCreateCtrl', prestamosCreateCtrl);
    prestamosCreateCtrl.$inject = ['Libros', 'Reserva', '$mdToast', '$location', 'PrestamosTemporales', 'Ejemplares', '$q'];

    function prestamosCreateCtrl(Libros, Reserva, $mdToast, $location, PrestamosTemporales, Ejemplares, $q) {

        var vm = this;

        vm.libros = Libros.query();
        vm.librosSelecionados = PrestamosTemporales.prestamo;

        vm.librosTemp = new Array();
        vm.addLibro = function(item) {
            vm.librosTemp[vm.librosTemp.length] = {
                libro: item,
                disponibilidad: true,
                ejemplares:{}
            };
            PrestamosTemporales.prestamo = vm.librosTemp;
            vm.librosSelecionados = PrestamosTemporales.prestamo;


        }




        vm.create = function() {


            console.log('proceso');
            Ejemplares.findDisponibilidadByLibro({estado:true, idLibro:1}).$promise.then(function(data) {

              PrestamosTemporales.ejemplar=data;


              });
              console.log(PrestamosTemporales.ejemplar);






        }















        vm.findBookByTitle = function(str) {
            return Libros.findWithDisponibilidad({
                title: str
            });
        }

    }







})();
