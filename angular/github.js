(function(){
  var github = function($http){
    var getUser = function(username){
      return $http.get("https://api.github.com/users/"+username)
      .then(function(response){
        return response.data;
      });
    };
    
    var getRepos = function(user){
      return $http.get(user.repos_url).then(function(response){
        return response.data;
      });
    };
    
    var getRepoDetail  = function(repoURL){
      return $http.get("https://api.github.com/repos/" +repoURL).then(function(response){
        return response.data;
      });
    };
    
    var getCollab = function(collab){
      return $http.get(collab).then(function(response){
        return response.data;
      });
    };
    
    return{
      getUser: getUser,
      getRepos: getRepos,
      getRepoDetail: getRepoDetail,
      getCollab: getCollab
    };
  };
  var module = angular.module("gitHubViewer");
  
  module.factory("github", github);
}())