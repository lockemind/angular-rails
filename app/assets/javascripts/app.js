angular.module('flapperNews', ['ui.router', 'templates'])

.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl'
      ,
      resolve: {
         // simpleObj:  function(){
         //    return [{title: 'post 1', upvotes: 5, comments: []}];
         // }
        postPromise: ['posts', function(posts){
          return posts.getAll();
        }]
        
      }
    })
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: 'posts/_posts.html',
      controller: 'PostsCtrl'
    });
  $urlRouterProvider.otherwise('home');
}]);