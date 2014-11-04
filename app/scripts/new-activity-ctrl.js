(function (angular) {
    'use strict';

    angular.module('hang-out')
    .controller('new-activity', ['$scope', 'model', function ($s, m) {

        $s.activity = new m.Activity(new m.Individual());

    }]);

}).call(this, this.angular);