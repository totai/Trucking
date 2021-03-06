// TODO: Use SEQ number to obtain initial values
// TODO: Update info to MySql server, on loss of focus
// TODO: Create init function for each controller
// TODO: Validation with tab icons
// TODO: Implement fotos
// TODO: Exit and Clear button for each header
// TODO: Implement barcode / QR scanner
// TODO: Copy MySQL data into the form, save the data when you FINALIZE

angular.module('ticket.sideMenu.ctrl', [])

  .controller('SideMenuCtrl', function ($scope, $state, $stateParams, $ionicModal) {

    $scope.despacho_SEQ = $stateParams.SEQ

    $scope.item = {
      truck: 0,
      weight: 1,
      batches: 2,
      muestras: 2,
      photos: 1,
      finalize: 0
    }

      $scope.returnHome = function(){
         $state.go('despachos.SEQ',{SEQ: $stateParams.SEQ}, {location: true, inherit: false})
      }

      $ionicModal.fromTemplateUrl('app/login/login.html', function (modal) {
            $scope.loginModal = modal
         },
         {  scope: $scope, animation: 'slide-in-up', focusFirstInput: true, backdropClickToClose: false  }
      )
      $scope.$on('$destroy', function () {
         $scope.loginModal.remove()
      })

   // $scope.icons = Ticket.getIcons();

  })