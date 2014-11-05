(function (angular) {
    'use strict';

    angular.module('hang-out')
    .controller('join-activity', ['dataStore', function (store) {

        store.activitiesToJoin(function (activities) {

        });

    }]);

}).call(this, this.angular);