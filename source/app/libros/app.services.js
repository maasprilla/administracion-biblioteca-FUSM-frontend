(function(){
  'use strict';

  angular.module('app.libro-services',[

  ]).factory('Libros',Libros);

  function Libros($resource, BASEURL){
    return $resource(BASEURL + '/libros/:idLibro',
      {idLibro:'@idLibro'},
      {'update': {method: 'PUT'},
      findByTitle:{
        url:BASEURL + '/libros/title/:title',
        method:'GET',
        isArray:true,
        params:{
          title:'@title'
        }
      },
      findWithDisponibilidad:{
        url:BASEURL + '/libros/titledisponible/:title',
        method:'GET',
        isArray:true,
        params:{
          title:'@title'
        }
      },
      findDisponibilidad:{
        url:BASEURL + '/libros/disponibilidad',
        method:'GET',
        isArray:true,
        params:{
          title:'@title'
        }
      }
    }
  );

  }

})();
