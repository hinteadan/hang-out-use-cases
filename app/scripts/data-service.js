(function (angular, ds) {
    'use strict';

    var log = this.console.log;

    angular.module('hang-out')
    .service('dataStore', ['storeUrl', 'storeName', function (storeUrl, storeName) {

        var activityStore = new ds.Store(storeName.activities, storeUrl);

        function storeActivity(activity, then) {
            var entity = new ds.Entity(activity, activity.meta());
            activityStore.Save(entity, function (result) {
                ///<param name="result" type="ds.OperationResult" />
                if (angular.isFunction(then)) {
                    log(result);
                    then.call(result, result.data, result.isSuccess, result.reason);
                }
            });
        }

        this.publishNewActivity = storeActivity;

    }]);

}).call(this, this.angular, this.H.DataStore);