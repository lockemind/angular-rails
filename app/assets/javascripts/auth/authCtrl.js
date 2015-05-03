angular.module('flapperNews')
.controller('AuthCtrl', [
'$scope',
'$state',
'Auth',
function($scope, $state, Auth){

	$scope.login = function() {
	   Auth.login($scope.user).then(function(){
	     $state.go('home');
	   });
	 };

	 $scope.register = function() {
 	 	console.log('register running ' , $scope.user);
	   Auth.register($scope.user).then(
	   	function(){
	   	 console.log('trying to go home ');
	     $state.go('home');
	   },
	   function(par){ console.log('trying to go 1 ', par.data.errors);},
	   function(par){console.log('trying to go 2 ', par);}
	 );
	 };
	 
}]);