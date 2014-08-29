angular.module( 'placesList', [
  'templates-app',
  'templates-common',
  'placesList.home',
  'placesList.about',
  'placesList.list',
  'placesList.editList',
  'placesList.map',
  'ui.router',
  'ngResource'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/list' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | My Places' ;
    }
  });
})

;

