(function (angular, ds, _) {
    'use strict';

    var log = this.console.log;

    angular.module('hang-out')
    .service('dataStore', ['$q', 'storeUrl', 'storeName', 'model-mapper', function ($q, storeUrl, storeName, map) {

        var activityStore = new ds.Store(storeName.activities, storeUrl);

        function as$q(fn) {
            ///<param name="fn" type="Function" />
            return function () {
                var deff = $q.defer();
                fn.apply(null, _.union(arguments, [function (payload) {
                    if (this.isSuccess) {
                        deff.resolve(payload);
                    }
                    else {
                        deff.reject(this.reason);
                    }
                }]));
                return deff.promise;
            }
        }

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
            var query = new ds.queryWithAnd().where('startsOn')(ds.is.HigherThan)(new Date().getTime());
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

        this.publishNewActivity = as$q(storeActivity);
        this.activitiesToJoin = as$q(fetchJoinableActivities);

    }]);

}).call(this, this.angular, this.H.DataStore, this._);