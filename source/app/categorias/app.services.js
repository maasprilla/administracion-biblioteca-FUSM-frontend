(function() {
    'use strict';

    angular.module('app.categorias-services', [

    ]).factory('Categorias', Categorias);

    function Categorias($resource, BASEURL) {
        return $resource(BASEURL + '/categorias/:idCategoria', {
            idCategoria: '@idCategoria'
        }, {
            'update': {
                method: 'PUT'
            }
        });

    }

})();
