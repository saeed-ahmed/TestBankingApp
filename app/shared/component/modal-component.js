(function() {
    angular.module('appModule').component('modalComponent', {
        templateUrl: './app/shared/component/modal-template.html',
        transclude: true,
        controller: modalComponentCtrl,
        controllerAs: 'modalComponentCtrl',
        bindings: {
            modalTitle: "=",
            makeNewTransfer: "<",
            closeTransferModal: "<"
        }
    });
    modalComponentCtrl.$indject = '';

    function modalComponentCtrl() {
        var vm = this;
        vm.$onInit = function() {
            vm.modalTitle = this.modalTitle;
        }
        vm.closeModal = function() {
            $('#customModal').modal('toggle');
            this.closeTransferModal();
        }
        vm.makeNewTransaction = function() {
            this.makeNewTransfer();
        }

    }
})();