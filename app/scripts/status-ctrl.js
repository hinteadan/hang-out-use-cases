(function (angular) {
    'use strict';

    var notify = this.alert;

    angular.module('hang-out-use-case-app')
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
            .then($s.statusForMe, function (reason) {
                notify('Cannot confirm because: ' + reason);
            });
        };

        $s.wrapIt = function (activityEntry) {
            store
            .wrapActivity(activityEntry.id, activityEntry.token, activityEntry.activity)
            .then($s.statusForMe, function (reason) {
                notify('Cannot wrap activity because: ' + reason);
            });
        };

        $s.cancel = function (activityEntry, cancellationReason) {
            store
            .cancelActivity(activityEntry.id, activityEntry.token, activityEntry.activity, cancellationReason)
            .then($s.statusForMe, function (reason) {
                notify('Cannot cancel activity because: ' + reason);
            });
        };

        $s.bailOut = function (activityEntry, bailOutReason) {
            store
            .bailOut(activityEntry.id, activityEntry.token, activityEntry.activity, me, bailOutReason)
            .then($s.statusForMe, function (reason) {
                notify('Cannot cancel activity because: ' + reason);
            });
        };

    }]);

}).call(this, this.angular);