(function (angular) {
    'use strict';

    angular.module('hang-out', ['ngRoute', 'ui.bootstrap.datetimepicker'])
    //.constant('storeUrl', 'http://localhost/HttpDataStore/')
    .constant('storeUrl', 'http://h-httpstore.azurewebsites.net/')
    .constant('storeName', {
        activities: 'h-hang-out-activities'
    })
    .config(['$routeProvider', function ($route) {
        $route
            .when('/', { templateUrl: 'scripts/use-cases.tmpl.html', controller: 'use-cases' })
            .when('/new', { templateUrl: 'scripts/new-activity.tmpl.html', controller: 'new-activity' })
            .when('/join', { templateUrl: 'scripts/join-activity.tmpl.html', controller: 'join-activity' })
            .when('/status', { templateUrl: 'scripts/status.tmpl.html', controller: 'status' })
            .otherwise({ redirectTo: '/' });
    }]);

}).call(this, this.angular);