(function (angular) {
    'use strict';

    angular.module('hang-out', ['ngRoute'])
    .constant('storeUrl', 'http://h-httpstore.azurewebsites.net/')
    .config(['$routeProvider', function ($route) {
        $route
            .when('/new', { templateUrl: 'scripts/new-activity.html', controller: 'new-activity' })
            .otherwise({ redirectTo: '/' });
    }]);

}).call(this, this.angular);