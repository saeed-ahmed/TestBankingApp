(function() {
    angular.module('appModule').component('transContainer', {
        templateUrl: './app/trans-container/trans-container-template.html',
        controller: transContainerCtrl,
        controllerAs: 'transContainerCtrl'
    });
    transContainerCtrl.$indject = ['transService'];

    function transContainerCtrl(transService) {
        var vm = this;
        vm.transHistoryList = [];
        vm.$onInit = function() {
            transService.getTransHistory().then(function(response) {
                vm.transHistoryList = response;
            });
        }
    }
})();