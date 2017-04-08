(function() {
    angular.module('appModule').service('transDataService', transDataService);

    transDataService.$inject = ['$http', '$q'];

    function transDataService($http, $q) {
        return ({
            getTransHistory: getTransHistory,
            makeNewTransfer: makeNewTransfer
        });

        function getTransHistory() {
            var request = $http({
                url: './data/transactions.json',
                dataType: 'json',
                method: 'GET',
                data: '',
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return request.then(handleSuccess, handleError);
        }

        function makeNewTransfer(newTransaction) {
            return $q.resolve(true);
        }

        function handleSuccess(response) {
            return $q.resolve(response.data);
        }

        function handleError(response) {
            if (!angular.isObject(response.data) || !response.data.message) {
                return ($q.reject("An unknown error occurred."));
            }
            return ($q.reject(response.data.message));
        }
    }

})();