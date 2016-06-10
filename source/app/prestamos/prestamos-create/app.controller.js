(function() {
    'use strict';
    angular
        .module('app.prestamos-create.controller', [])
        .controller('prestamosCreateCtrl', prestamosCreateCtrl);
    prestamosCreateCtrl.$inject = ['Libros', 'Reserva', '$mdToast', '$location', 'PrestamosTemporales', 'Ejemplares'];

    function prestamosCreateCtrl(Libros, Reserva, $mdToast, $location, PrestamosTemporales, Ejemplares) {

        var vm = this;

        vm.libros = Libros.query();
        vm.librosSelecionados = PrestamosTemporales.prestamo;

        vm.librosTemp = new Array();
        vm.addLibro = function(item) {
            vm.librosTemp[vm.librosTemp.length] = {
                libro: item,
                disponibilidad: true
            };
            PrestamosTemporales.prestamo = vm.librosTemp;
            vm.librosSelecionados = PrestamosTemporales.prestamo;


        }




        vm.create = function() {

            vm.buscarEjemplares();


            //vm.reserva={ejemplarList:elegirEjemplar(vm.ejemplares)};
            // console.log(vm.reserva);
            // Reserva.save(vm.reserva, function() {
            //     $location.url('/home');
            //     $mdToast.show(
            //         $mdToast.simple()
            //         .textContent('Registro Exitoso...')
            //         .position('bottom right'));
            // }, function(error) {
            //     $mdToast.show(
            //         $mdToast.simple()
            //         .textContent('Error')
            //         .position('bottom right'));
            //
            // });

        }

        vm.buscarEjemplares = function() {
            var list = PrestamosTemporales.prestamo;
            vm.cont=0;
            for (var i = 0; i < list.length; i++) {
              vm.cont=i;
              console.log(vm.cont);
                vm.ejemplares = Ejemplares.findDisponibilidadByLibro({
                    estado: true,
                    idLibro: list[i].libro.idLibro
                }).$promise.then(function(data) {
                    vm.ejemplares = data;
                    console.log('data');
                    console.log(data);
                    console.log(vm.cont);
                    if (vm.ejemplares.length <= 0) {
                        console.log(vm.cont);
                        PrestamosTemporales.prestamo[vm.cont].disponibilidad= false;
                        //console.log(PrestamosTemporales.prestamo);
                    }
                });


            }


        }





        vm.findBookByTitle = function(str) {
            return Libros.findWithDisponibilidad({
                title: str
            });
        }

    }







})();
