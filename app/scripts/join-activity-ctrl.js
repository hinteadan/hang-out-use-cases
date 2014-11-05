(function (angular) {
    'use strict';

    angular.module('hang-out')
    .controller('join-activity', ['$scope', 'dataStore', function ($s, store) {

        store.activitiesToJoin().then(function (activities) {
            $s.flag.isLoadingActivities = false;
            $s.activities = activities;
        });

        $s.flag = {
            isLoadingActivities: true
        };
        $s.activities = [];

    }]);

}).call(this, this.angular);