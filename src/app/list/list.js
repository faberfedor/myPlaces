/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.list', [
  'ui.router',
  'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'list', {
    url: '/list',
    views: {
      "main": {
        controller: 'ListCtrl',
        templateUrl: 'list/list.tpl.html'
      }
    },
    data:{ pageTitle: 'List' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'ListCtrl', function ListController( $scope ) {


    $scope.places = [
        {
            name: 'Home',
            id:   'Home',
            GoogleName: '60 East Cliff Street, Somerville, NJ 08876 USA',
            latlon: '40.570487,-74.60814',
            deleteMe: false
        },
        {
            name: 'Work',
            id:   'Work',
            GoogleName: '60 East Cliff Street, Somerville, NJ 08876 USA',
            latlon: '40.570487,-74.60814',
            deleteMe: false
        },
        {
            name: 'Grounds For Sculpture',
            id:   'GfS',
            GoogleName: 'Grounds For Sculpture 18 Fairgrounds Rd Trenton, NJ 08619',
            latlon: '40.2356839,-74.7176335',
            deleteMe: false
        }
    ];

    
})

;

