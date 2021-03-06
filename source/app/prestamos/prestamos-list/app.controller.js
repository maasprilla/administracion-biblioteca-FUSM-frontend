(function() {
    'use strict';

    angular.module('app.prestamos-list.controller', []).controller('reservasListCtrl', reservasListCtrl);


    reservasListCtrl.$inject = ['$q', '$location', '$mdToast', 'Reserva', 'NgTableParams'];

    function reservasListCtrl($q, $location, $mdToast, Reserva, NgTableParams) {

        var vm = this;
        vm.reserva = Reserva.query();

        activate();

        function activate() {
            var promises = [getReserva()];
            return $q.all(promises).then(function() {

            });
        }

        function getReserva() {

            return Reserva.query().$promise.then(function(data) {
                vm.info = data;


                vm.reservaTable = new NgTableParams({
                    page: 1,
                    count: 5
                }, {
                    total: vm.info.length,
                    getData: function($defer, params) {
                        vm.data = vm.info.slice((params.page() - 1) * params.count(), params.page() * params.count());
                        $defer.resolve(vm.data);
                        console.log(vm.data);
                    }
                });

            });

        }

    }





})();
