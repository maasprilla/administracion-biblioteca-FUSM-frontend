(function(){
  'use strict';

  angular.module('app.carrera-services',[

  ]).factory('Carreras',Carreras);

  function Carreras($resource, BASEURL){
    return $resource(BASEURL + '/carreras/:idCarrera',
      {idCarrera:'@idCarrera'},
      {'update': {method: 'PUT'},
      findByname:{
        url:BASEURL + '/carreras/name/:name',
        method:'GET',
        isArray:true,
        params:{
          name:'@name'
        }
      }
    }
  );

  }

})();
