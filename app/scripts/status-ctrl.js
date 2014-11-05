(function (angular) {
    'use strict';

    angular.module('hang-out')
    .controller('status', ['$scope', 'model', 'dataStore', function ($s, m, store) {

        var me = new m.Individual();

        $s.me = me;
        $s.myActivities = [];
        $s.myAppliedActivities = [];

        $s.statusForMe = function () {
            store.activitiesFor(me)
            .then(function (activities) {
                $s.myActivities = activities;
            });

            store.activitiesAppliedToFor(me)
            .then(function (activities) {
                $s.myAppliedActivities = activities;
            });
        };

    }]);

}).call(this, this.angular);