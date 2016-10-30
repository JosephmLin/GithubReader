(function() {
  var app = angular.module('gitHubViewer');

  var RepoController = function($scope, github, $routeParams) {
    var onRepoComplete = function(data) {
      $scope.openIssues = data.open_issues_count;
      $scope.error = ""
      github.getCollab(data.url + "/contributors").then(onCollabComplete, onError)
      
    };
    var onCollabComplete = function(data){
      console.log(data[1]);
      $scope.collaborators = data;
    }
    var onError = function(reason) {
      $scope.error = "Could not Fetch the Repo/Collaborators!"
    };
    $scope.collabSortOrder = 'username'
    $scope.username = $routeParams.username;
    $scope.repo = $routeParams.repo;
    github.getRepoDetail($scope.username + "/" + $scope.repo).then(onRepoComplete, onError);
  }
  app.controller("RepoController", RepoController);
}());