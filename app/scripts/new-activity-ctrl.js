﻿(function (angular) {
    'use strict';

    var notify = this.alert;

    angular.module('hang-out')
    .controller('new-activity', ['$scope', '$location', 'model', 'dataStore', function ($s, $l, m, store) {

        $s.activity = new m.Activity(new m.Individual());

        $s.publish = function () {
            $s.activity.startsOn = $s.activity.startsOn ? new Date(Number($s.activity.startsOn)) : null;
            $s.activity.endsOn = $s.activity.endsOn ? new Date(Number($s.activity.endsOn)) : null;
            store.publishNewActivity($s.activity, function () {
                notify('Published!');
                $l.path('/');
                $s.$apply();
            });
        };

    }]);

}).call(this, this.angular);