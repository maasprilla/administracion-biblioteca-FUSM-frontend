(function() {
    'use strict';
    angular
        .module('app.usuarios-create.controller', [])
        .controller('usuariosCreateCtrl', usuariosCreateCtrl);
    usuariosCreateCtrl.$inject = ['Usuarios', 'Carreras', '$mdToast', '$location'];

    function usuariosCreateCtrl(Usuarios, Carreras, $mdToast, $location) {
        var vm = this;
        vm.usuario = {
            idEstadoUsuario: {
                idEstadoUsuario: 1
            },
            rolList: [{
                idRol: "ALUM"
            }]
        };
        vm.create = function() {
            console.log(vm.usuario);
            Usuarios.save(vm.usuario, function() {
                $location.url('/home');
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Registro de Usuarios Exitoso...')
                    .position('bottom right'));
            }, function(error) {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('el email ya se encuentra registrado')
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
