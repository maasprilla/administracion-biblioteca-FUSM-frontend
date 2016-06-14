(function() {
    'use strict';
    angular
        .module('app.libros-galery.controller', [])
        .controller('librosGaleryCtrl', librosGaleryCtrl);
    librosGaleryCtrl.$inject = ['Libros', 'Reserva', '$mdToast', '$location', 'PrestamosTemporales', 'Ejemplares', '$q'];

    function librosGaleryCtrl(Libros, Reserva, $mdToast, $location, PrestamosTemporales, Ejemplares, $q) {

        var vm=this;
        vm.libros=Libros.query();

    }







})();
