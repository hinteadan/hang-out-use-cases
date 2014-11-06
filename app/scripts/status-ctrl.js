(function (angular) {
    'use strict';

    angular.module('hang-out')
    .controller('status', ['$scope', '$q', 'model', 'dataStore', function ($s, $q, m, store) {

        var me = new m.Individual();

        $s.flag = {
            hasQueried: false,
            isLoadingMyActivities: false,
            isLoadingMyAppliedForActivities: false,
        };

        $s.me = me;
        $s.myActivities = [];
        $s.myAppliedActivities = [];

        $s.statusForMe = function () {
            $q.all([store.activitiesFor(me), store.activitiesAppliedToFor(me)])
            .then(function(activitiesPool){
                $s.myActivities = activitiesPool[0];
                $s.flag.isLoadingMyActivities = false;
                $s.myAppliedActivities = activitiesPool[1];
                $s.flag.isLoadingMyAppliedForActivities = false;
                $s.flag.hasQueried = true;
            });
        };

    }]);

}).call(this, this.angular);