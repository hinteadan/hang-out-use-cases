(function (angular) {
    'use strict';

    angular.module('hang-out', ['ngRoute'])
    .constant('storeUrl', 'http://h-httpstore.azurewebsites.net/')
    .constant('storeName', {
        activities: 'h-hang-out-activities'
    })
    .config(['$routeProvider', function ($route) {
        $route
            .when('/', { templateUrl: 'scripts/use-cases.tmpl.html', controller: 'use-cases' })
            .when('/new', { templateUrl: 'scripts/new-activity.tmpl.html', controller: 'new-activity' })
            .otherwise({ redirectTo: '/' });
    }]);

}).call(this, this.angular);