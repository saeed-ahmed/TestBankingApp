(function() {
    angular.module('appModule').component('transHistoryComponent', {
        templateUrl: './app/trans-history/trans-history-template.html',
        controller: transHistoryCtrl,
        controllerAs: 'transHistoryCtrl',
        bindings: {
            transHistoryList: '='
        }

    });

    transHistoryCtrl.$inject = ['transService'];

    function transHistoryCtrl(transService) {
        var vm = this;
        vm.message = 'AOA all...';
        vm.$onInit = function() {
            vm.transHistoryList = this.transHistoryList;
            //console.log('kkkk' + this.transHistoryList);
        }
    }

})();