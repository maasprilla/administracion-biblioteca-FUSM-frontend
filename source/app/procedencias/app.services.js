(function() {
    'use strict';

    angular.module('app.procedencia-services', [

    ]).factory('Procedencias', Procedencias);

    function Procedencias($resource, BASEURL) {
        return $resource(BASEURL + '/procedencialibros/:idProcedencia', {
            idProcedencia: '@idProcedencia'
        }, {
            'update': {
                method: 'PUT'
            }
        });

    }

})();
