(function (angular) {
    'use strict';

    var notify = this.alert;

    angular.module('hang-out')
    .controller('join-activity', ['$scope', '$location', 'dataStore', 'model', function ($s, $l, store, m) {

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
            store
                .joinActivity(activityEntry.id, activityEntry.token, activityEntry.activity, me)
                .then(function () {
                    notify('Joined!');
                    $l.path('/');
                }, function (reason) {
                    notify('Cannot join this activity because: ' + reason);
                });
        };
    }]);

}).call(this, this.angular);