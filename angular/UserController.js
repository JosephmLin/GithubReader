(function() {
  var app = angular.module('gitHubViewer');

  var UserController = function($scope, github, $routeParams) {
    var onUserComplete = function(data) {
      $scope.user = data
      $scope.error = ""
      github.getRepos($scope.user).then(onRepos, onError)
    };
    var onRepos = function(data) {
      $scope.repos = data;
    };
    var onError = function(reason) {
      $scope.error = "Could not Fetch the User!"
    };
    //This takes in a string needed to run the github query in repocontroller.
    //WE'll pass it in the url params
    $scope.onContributor = function (data) {
      $location.path("/user/" + $scope.username + "/" + data)
    }

    $scope.error = " "
    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count"
    github.getUser($scope.username).then(onUserComplete, onError);
  }
  app.controller("UserController", UserController);
}());