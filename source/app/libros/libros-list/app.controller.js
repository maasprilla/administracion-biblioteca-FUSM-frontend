(function() {
    'use strict';

    angular.module('app.libros.list.controller', []).controller('librosListCtrl', librosListCtrl);


    librosListCtrl.$inject = ['$q', '$location', '$mdToast', 'Libros', 'NgTableParams'];

    function librosListCtrl($q, $location, $mdToast, Libros, NgTableParams) {

        var vm = this;
        vm.libros = Libros.query();

        activate();

        function activate() {
            var promises = [getLibros()];
            return $q.all(promises).then(function() {

            });
        }

        function getLibros() {

            return Libros.query().$promise.then(function(data) {
                console.log('data');
                console.log(data);
                vm.info = data;

                vm.librosTable = new NgTableParams({
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
