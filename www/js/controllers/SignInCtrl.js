app.controller('SignInCtrl', function($scope, $state, OpenFB) {
  $scope.signIn = function () {
    // OpenFB.login()
               
    console.log('sign in triggered');
    $state.go('potentialEvents');
  };
});