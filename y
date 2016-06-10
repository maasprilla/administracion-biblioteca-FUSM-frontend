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

            vm.buscarEjemplares();
            console.log('proceso');
            console.log(PrestamosTemporales.prestamo[0]);






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


                // vm.ejemplares = Ejemplares.findDisponibilidadByLibro({
                //     estado: true,
                //     idLibro: list[i].libro.idLibro
                // }).$promise.then(function(data) {
                //     vm.ejemplares = data;
                //     console.log('data');
                //     console.log(data);
                //     console.log(vm.cont);
                //     if (vm.ejemplares.length <= 0) {
                //         console.log(vm.cont);
                //         PrestamosTemporales.prestamo[vm.cont].disponibilidad= false;
                //         //console.log(PrestamosTemporales.prestamo);
                //     }
                // });
                activate(PrestamosTemporales.prestamo[i].libro.idLibro, PrestamosTemporales.prestamo[i], i);



            }



        }


        vm.ejemplar;

//         function activate(str) {
//     var promises = [getUsuarios(str)];
//     return $q.all(promises).then(function() {
//
//     });
// }
function activate(str, list, index) {
    var promises = [getUsuarios(str, list, index)];
    return $q.all(promises).then(function() {

    });
}

    function getUsuarios(str, list, index) {
  return Ejemplares.findDisponibilidadByLibro({
      estado: true,
      idLibro: str
  }).$promise.then(function(data) {

    vm.ejemplar=data;
    if(data.length<=0){
      list.disponibilidad=false;
    }

     var ejemplares = new Array();
    for (var i = 0; i < data.length; i++) {
      ejemplares[i]=data[i];

    var libro=list.libro;
    var disponibilidad=list.disponibilidad;


    PrestamosTemporales.prestamo[index]={ejemplares:ejemplares, libro:libro, disponibilidad:disponibilidad};


  }





  });


}







        vm.findBookByTitle = function(str) {
            return Libros.findWithDisponibilidad({
                title: str
            });
        }

    }







})();
