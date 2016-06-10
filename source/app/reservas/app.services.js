(function() {
    'use strict';

    angular.module('app.reserva-services', [

    ]).factory('Reserva', Reserva);

    function Reserva($resource, BASEURL) {
        return $resource(BASEURL + '/reservas/:idReserva', {
            idReserva: '@idReserva'
        }, {
            'update': {
                method: 'PUT'
            }
        });

    }

})();
