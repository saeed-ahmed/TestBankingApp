(function() {
    angular.module('appModule').component('newTrans', {
        templateUrl: './app/new-trans/new-trans-template.html',
        controller: newTransCtrl,
        controllerAs: 'newTransCtrl',
        bindings: {
            transHistoryList: '='
        }
    });
    newTransCtrl.$indject = ['$filter', 'transService'];

    function newTransCtrl($filter, transService) {
        var vm = this;
        vm.transaction = {};
        vm.$onInit = function() {
            vm.modalTitle = "Confirm Transfer";
            vm.transHistoryList = this.transHistoryList;
            vm.transaction.availableAmount = 5824.76;
            vm.transaction.toAccount = "";
            vm.transaction.amount = "";
            vm.transaction.fromAccount = "Free Checking(4692) - Available " + $filter('currency')(vm.transaction.availableAmount);
        }
        vm.confirmTransfer = function() {
            if (vm.transaction.toAccount.trim() != '' && vm.transaction.amount > 0) {
                vm.transaction.availableAmount = vm.transaction.availableAmount - vm.transaction.amount;
                vm.transaction.fromAccount = "Free Checking(4692) - Available " + $filter('currency')(vm.transaction.availableAmount);
                $('#customModal').modal({});
            }

        }
        vm.makeNewTransfer = function() {
            var newTransaction = {};
            newTransaction.amount = vm.transaction.amount;
            newTransaction.categoryCode = "#12a580";
            newTransaction.merchant = vm.transaction.toAccount;
            newTransaction.merchantLogo = "";
            newTransaction.transactionDate = new Date();
            newTransaction.transactionType = "Online Payment";

            transService.makeNewTransfer(newTransaction).then(function(response) {
                if (response) {
                    vm.transHistoryList.unshift(newTransaction);
                    vm.transaction.toAccount = "";
                    vm.transaction.amount = "";
                    $('#customModal').modal("toggle");
                }
            });
        }
        vm.closeTransferModal = function() {
            vm.transaction.availableAmount = vm.transaction.availableAmount + parseFloat(vm.transaction.amount);
            vm.transaction.fromAccount = "Free Checking(4692) - Available " + $filter('currency')(vm.transaction.availableAmount);
        }
    }
})();