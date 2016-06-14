(function() {
    'use strict';

    angular.module('app.editoriales-services', [

    ]).factory('Editoriales', Editoriales);

    function Editoriales($resource, BASEURL) {
        return $resource(BASEURL + '/editoriales/:idEditoriales', {
            idEditoriales: '@idEditoriales'
        }, {
            'update': {
                method: 'PUT'
            }
        });

    }

})();
