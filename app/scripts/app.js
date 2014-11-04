(function (angular) {
    'use strict';

    angular.module('hang-out', ['ngRoute'])
    .constant('storeUrl', 'http://localhost/HttpDataStore/')
    .constant('storeName', {
        activities: 'h-hang-out-activities'
    })
    .config(['$routeProvider', function ($route) {
        $route
            .when('/', { templateUrl: 'scripts/use-cases.tmpl.html', controller: 'use-cases' })
            .when('/new', { templateUrl: 'scripts/new-activity.tmpl.html', controller: 'new-activity' })
            .when('/join', { templateUrl: 'scripts/join-activity.tmpl.html', controller: 'join-activity' })
            .otherwise({ redirectTo: '/' });
    }]);

}).call(this, this.angular);