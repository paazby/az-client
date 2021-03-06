app.controller('MatchesCtrl', function($rootScope, $scope, $state) {

  $scope.showMatch = function(matchId) {
    console.log(matchId);
    // $state.go(// page with info about specific match)
    $state.go('specificMatch', {id: matchId});
    // use match.id to pass along specific match page
  };

  $scope.potentialMatches = function() {
    $state.go('potentialMatches');
  };
})