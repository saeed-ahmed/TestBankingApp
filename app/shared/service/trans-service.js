(function() {
    angular.module('appModule').service('transService', transService);

    transService.$inject = ['$q', 'transDataService'];

    function transService($q, transDataService) {
        return ({
            getTransHistory: getTransHistory,
            makeNewTransfer: makeNewTransfer
        });

        function getTransHistory() {
            var serviceDefer = $q.defer();
            transDataService.getTransHistory().then(function(response) {
                return serviceDefer.resolve(response.data);
            });
            return serviceDefer.promise;
        }

        function makeNewTransfer(newTransaction) {
            var serviceDefer = $q.defer();
            transDataService.makeNewTransfer(newTransaction).then(function(response) {
                return serviceDefer.resolve(true);
            });
            return serviceDefer.promise;
        }
    }

})();