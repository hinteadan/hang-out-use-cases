(function (angular) {
    'use strict';

    var notify = this.alert;

    angular.module('hang-out')
    .controller('status', ['$scope', '$q', 'model', 'dataStore', function ($s, $q, m, store) {

        var me = new m.Individual(null, 'hintea_dan@yahoo.co.uk');

        $s.flag = {
            hasQueried: false,
            isLoadingMyActivities: false,
            isLoadingMyAppliedForActivities: false,
        };

        $s.me = me;
        $s.myActivities = [];
        $s.myAppliedActivities = [];

        $s.statusForMe = function () {
            $s.flag.isLoadingMyActivities = true;
            $s.flag.isLoadingMyAppliedForActivities = true;
            $q.all([store.activitiesFor(me), store.activitiesAppliedToFor(me)])
            .then(function (activitiesPool) {
                $s.myActivities = activitiesPool[0];
                $s.flag.isLoadingMyActivities = false;
                $s.myAppliedActivities = activitiesPool[1];
                $s.flag.isLoadingMyAppliedForActivities = false;
                $s.flag.hasQueried = true;
            });
        };

        $s.confirmParticipant = function (activityEntry, participant) {
            store
            .confirmParticipant(activityEntry.id, activityEntry.token, activityEntry.activity, participant)
            .then(null, function (reason) {
                notify('Cannot confirm because: ' + reason);
            });
        };

    }]);

}).call(this, this.angular);