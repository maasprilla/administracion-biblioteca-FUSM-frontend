(function() {
    'use strict';

    angular
        .module('app.imagenes', [])
        .directive('onReadImg', onReadImg);

    /* @ngInject */
    function onReadImg($parse) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: false
        };
        return directive;

        function link(scope, element, attrs) {
            var fn = $parse(attrs.onReadImg);
            element.on('change', function(onChangeEvent) {
                var reader = new FileReader();
                reader.onload = function(onLoadEvent) {
                    scope.$apply(function() {
                        fn(scope, {
                            //leer imagen y quitar la primera parte data:image/png;base64, ....
                            $fileContent: onLoadEvent.target.result.split(',')[1]
                        });
                    });
                };
                reader.readAsDataURL((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
            });
        }
    }
})();