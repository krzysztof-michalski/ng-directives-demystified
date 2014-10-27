var logScope = function ($scope) {
    return '\tscope=' + $scope.$id + ', parentScope=' + $scope.$parent.$id;
};
angular.module('directives-demystified', [])

    .directive('dirA', function ($log) {
        return {
            restrict: 'A',
            priority: 500,
            scope:true,
            controller: function ($scope) {
                $log.debug('Controller \tdir-a (500)' + logScope($scope))
            },
            compile: function () {
                $log.debug('Compile \tdir-a (500)');
                return {
                    pre: function ($scope) {
                        $log.debug('Prelink \tdir-a (500)');
                    },
                    post: function ($scope) {
                        $log.debug('Postlink \tdir-a (500)');
                    }
                }
            }
        }
    }).directive('dirB', function ($log) {
        return {
            restrict: 'A',
            priority: 400,
            controller: function ($scope) {
                $log.debug('Controller \tdir-b (400)' + logScope($scope))
            },
            compile: function () {
                $log.debug('Compile \tdir-b (400)');
                return {
                    pre: function ($scope) {
                        $log.debug('Prelink \tdir-b (400)');
                    },
                    post: function ($scope) {
                        $log.debug('Postlink \tdir-b (400)');
                    }
                }
            }
        }
    })
    .directive('dirC', function ($log) {
        return {
            restrict: 'A',
            priority: 400,
            controller: function ($scope) {
                $log.debug('Controller \tdir-c (400)' + logScope($scope))
            },
            compile: function () {
                $log.debug('Compile \tdir-c (400)');
                return {
                    pre: function ($scope) {
                        $log.debug('Prelink \tdir-c (400)');
                    },
                    post: function ($scope) {
                        $log.debug('Postlink \tdir-c (400)');
                    }
                }
            }
        }
    }).directive('dirChildA', function ($log) {
        return {
            restrict: 'A',
            controller: function ($scope) {
                $log.debug('Controller \t\tdir-child-a (400)' + logScope($scope))
            },
            compile: function () {
                $log.debug('Compile \t\tdir-child-a (400)');
                return {
                    pre: function ($scope) {
                        $log.debug('Prelink \t\tdir-child-a (400)');
                    },
                    post: function ($scope) {
                        $log.debug('Postlink \t\tdir-child-a (400)');
                    }
                }
            }
        }
    })
;
