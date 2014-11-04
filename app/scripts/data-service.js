(function (angular, ds, _) {
    'use strict';

    var log = this.console.log;

    angular.module('hang-out')
    .service('dataStore', ['storeUrl', 'storeName', 'model-mapper', function (storeUrl, storeName, map) {

        var activityStore = new ds.Store(storeName.activities, storeUrl);

        function storeActivity(activity, then) {
            var entity = new ds.Entity(activity, activity.meta());
            activityStore.Save(entity, function (result) {
                ///<param name="result" type="ds.OperationResult" />
                log(result);
                if (angular.isFunction(then)) {
                    then.call(result, result.data, result.isSuccess, result.reason);
                }
            });
        }

        function fetchJoinableActivities(then) {
            var query = new ds.queryWithAnd().where('startsOn')(ds.is.LowerThan)(new Date().getTime());
            activityStore.Query(query, function (result) {
                ///<param name="result" type="ds.OperationResult" />
                log(result);
                if (angular.isFunction(then)) {
                    var activities = !result.isSuccess ? [] : _.map(result.data, function (entity) {
                        ///<param name="entity" type="ds.Entity" />
                        return {
                            id: entity.Id,
                            activity: map.activity(entity.Data)
                        };
                    });
                    log(activities);
                    then.call(result, activities, result.isSuccess, result.reason);
                }
            });
        }

        this.publishNewActivity = storeActivity;
        this.activitiesToJoin = fetchJoinableActivities;

    }]);

}).call(this, this.angular, this.H.DataStore, this._);