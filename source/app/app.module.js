(function () {
    'use strict';

    angular.module('app', [
        'ui.router',
        'ngResource',
        'angular.filter',
        'ngMessages',
        'ngMaterial',
        'satellizer',
        'ngTable',
        '720kb.datepicker',
        //'templates',
        'app.config',
        'app.footer',
        'app.header',
        'app.home',
        'app.homeadmin',
        'app.login',
        'app.password.confirm',
        'app.password.recovery'
    ]);

})();
