(function() {
    angular.module('appModule').directive('modalTrigger', function() {
        return {
            restrict: 'A',
            replace: true,
            link: function(scope, elem, attrs) {
                elem.bind('click', function() {
                    $('#customModal').modal({});
                })
            }
        }
    });
})();