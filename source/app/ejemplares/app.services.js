(function(){
  'use strict';

  angular.module('app.ejemplar-services',[

  ]).factory('Ejemplares',Ejemplares);

  function Ejemplares($resource, BASEURL){
    return $resource(BASEURL + '/ejemplares/:idEjemplar',
      {idEjemplar:'@idEjemplar'},
      {'update': {method: 'PUT'},
      findDisponibilidadByLibro:{
        url:BASEURL + '/ejemplares/disponibilidadbylibro/:estado/:idLibro',
        method:'GET',
        isArray:true,
        params:{
          estado:'@estado',
          idLibro:'@idLibro'
        }
      }
    }
  );

  }

})();
