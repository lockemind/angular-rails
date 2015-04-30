
angular.module('flapperNews', ['ui.router'])

.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsCtrl'
    });
  $urlRouterProvider.otherwise('home');
}])

.factory('posts', [function(){
	var o = {
	    posts: []
	  };
	  return o;
}])

.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts){

}])

.controller('MainCtrl', [
'$scope',
'posts', // injecting service into controller
function($scope, posts){
  $scope.test = 'Hello world!';

  $scope.posts = posts.posts;

	$scope.posts = [
	  {title: 'post 1', upvotes: 5},
	  {title: 'post 2', upvotes: 2},
	  {title: 'post 3', upvotes: 15},
	  {title: 'post 4', upvotes: 9},
	  {title: 'post 5', upvotes: 4}
	];

	$scope.addPost = function() {
		if(!$scope.title || $scope.title === '') { return; }

		$scope.posts.push({
			title: $scope.title, 
			link: $scope.link,
			upvotes: 0});
		$scope.title = '';
		$scope.link = '';

		// fake comments
		$scope.posts.push({
		  title: $scope.title,
		  link: $scope.link,
		  upvotes: 0,
		  comments: [
		    {author: 'Joe', body: 'Cool post!', upvotes: 0},
		    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
		  ]
		});
	};
	
	$scope.incrementUpvotes = function(post) {
	  post.upvotes += 1;
	};
}]);


