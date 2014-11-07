(function (angular) {
    'use strict';

    var notify = this.alert;

    angular.module('hang-out-use-case-app')
    .controller('new-activity', ['$scope', '$location', 'model', 'dataStore', function ($s, $l, m, store) {

        function stampTime(value) {
            return angular.isDate(value) ? value.getTime() : Number(value);
        }

        $s.activity = new m.Activity(new m.Individual());

        $s.publish = function () {
            $s.activity.startsOn = $s.activity.startsOn ? stampTime($s.activity.startsOn) : null;
            $s.activity.endsOn = $s.activity.endsOn ? stampTime($s.activity.endsOn) : null;
            store.publishNewActivity($s.activity).then(function () {
                notify('Published!');
                $l.path('/');
            });
        };

    }]);

}).call(this, this.angular);