(function() {
    'use strict';
    angular
        .module('app.prestamos-create.controller', [])
        .controller('prestamosCreateCtrl', prestamosCreateCtrl);
    prestamosCreateCtrl.$inject = ['Libros', 'Reserva', '$mdToast', '$location', 'PrestamosTemporales', 'Ejemplares', '$q'];

    function prestamosCreateCtrl(Libros, Reserva, $mdToast, $location, PrestamosTemporales, Ejemplares, $q) {

        var vm = this;

        vm.libros = Libros.findDisponibilidad();
        vm.librosSelecionados = null;
        //
        vm.misLibros = new Array();
        vm.addLibro = function(item) {

            vm.repeticiones = vm.buscarenlista(item, vm.misLibros);
            if (vm.repeticiones < item.ejemplarList.length) {
                vm.misLibros[vm.misLibros.length] = {
                    item: item
                };
                vm.librosSelecionados = vm.misLibros;
            } else {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Lo sentimos no hay mas ejemplares disponibles de este libro')
                    .position('bottom right'));
            }



        }

        vm.buscarenlista = function(item, list) {
            var x = 0;
            for (var i = 0; i < list.length; i++) {
                if (list[i].item == item) {
                    x++;
                }

            }
            return x;
        }


        vm.create = function() {

            var uniqueList = vm.listaLibrosUnique(vm.misLibros);
            console.log(uniqueList);
            var numVeces = 0;
            var misEjemplares = new Array();
            for (var i = 0; i < uniqueList.length; i++) {
                numVeces = vm.buscarenlista(uniqueList[i].item, vm.misLibros);
                for (var j = 0; j < numVeces; j++) {
                    console.log('veces');
                    console.log(numVeces);
                    console.log('tamaño');
                    console.log(uniqueList[i].item.ejemplarList.length);

                    var extra = vm.extraerEjemplar(0, (uniqueList[i].item.ejemplarList.length) - 1);
                    misEjemplares[misEjemplares.length] = uniqueList[i].item.ejemplarList[extra];

                    uniqueList[i].item.ejemplarList.splice(extra, 1);
                    console.log('ext');
                    console.log(extra);
                    console.log('fin');
                    console.log(uniqueList[i].item);

                }

            }
            console.log('ejm');
            console.log(misEjemplares);
            vm.reserva={ejemplarList:misEjemplares}
            Reserva.save(vm.reserva, function() {
              vm.libros = Libros.findDisponibilidad();
              vm.librosSelecionados = null;            
              vm.misLibros = new Array();
                $location.url('/prestamos-create');
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Reserva Exitosa...')
                    .position('bottom right'));
            }, function(error) {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Reserva Fallida')
                    .position('bottom right'));

            });




        }

        vm.listaLibrosUnique = function(list) {
            var uniqueList = new Array();
            for (var i = 0; i < list.length; i++) {
                var numVeces = vm.buscarenlista(list[i].item, uniqueList);
                if (numVeces < 1) {
                    uniqueList[uniqueList.length] = list[i];
                }
            }
            return uniqueList;

        }

        vm.extraerEjemplar = function(inferior, superior) {
            var numPosibilidades = superior - inferior
            var aleat = Math.random() * numPosibilidades
            aleat = Math.round(aleat)
            return parseInt(inferior) + aleat

        }


    }









})();
