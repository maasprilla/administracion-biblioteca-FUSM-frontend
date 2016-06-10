(function() {
    'use strict';

    angular.module('app.prestamo-services', [

    ]).factory('Prestamos', Prestamos)
    .factory('PrestamosTemporales', PrestamosTemporales);

    function Prestamos($resource, BASEURL) {
        return $resource(BASEURL + '/prestamos/:idPrestamo', {
            idPrestamo: '@idPrestamo'
        }, {
            'update': {
                method: 'PUT'
            }
        });

    }

    function PrestamosTemporales() {

      return {
        prestamo : [],
        ejemplar : []
      };

    }

})();
