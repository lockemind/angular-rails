angular.module('flapperNews')
.controller('MainCtrl', [
'$scope',
'posts', // injecting service into controller
function($scope, posts){
  $scope.test = 'Hello world!';

  $scope.posts = posts.posts;

  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') { return; }
    posts.create({
      title: $scope.title,
      link: $scope.link,
    });
    $scope.title = '';
    $scope.link = '';
  };
	
	$scope.incrementUpvotes = function(post) {
	  post.upvotes += 1;
	};
}]);
