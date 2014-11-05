(function (angular) {
    'use strict';

    angular.module('hang-out')
    .controller('join-activity', ['$scope', 'dataStore', 'model', function ($s, store, m) {

        var me = new m.Individual();

        store.activitiesToJoin().then(function (activities) {
            $s.flag.isLoadingActivities = false;
            $s.activities = activities;
        });

        $s.flag = {
            isLoadingActivities: true
        };
        $s.activities = [];
        $s.me = me;
        $s.join = function (activityEntry) {
            console.log(activityEntry);
            console.log(me);
        };
    }]);

}).call(this, this.angular);