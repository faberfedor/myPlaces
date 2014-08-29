/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe( 'list section', function() {
  beforeEach( module( 'placesList.list' ) );

  it( 'should have a dummy test', inject( function() {
    expect( true ).toBeTruthy();
  }));
});

/**
 * Unit tests for the list functionality
 */
describe( 'list controller', function() {
  var scope, httpBackend;

  //mock Application to allow us to inject our own dependencies
  beforeEach(angular.mock.module('placesList'));

  //mock the controller for the same reason and include $rootScope and $controller
  beforeEach(angular.mock.inject(function($rootScope, $controller, _$httpBackend_ ){
    //create an empty scope
    scope = $rootScope.$new();

    scope.httpBackend = _$httpBackend_;
    scope.httpBackend.expect('GET', '../../assets/places.json').respond(
      [
        {
            name: 'Home',
            id:   'Home',
            GoogleName: '60 East Cliff Street, Somerville, NJ 08876 USA',
            latlon: '40.570487,-74.60814',
            tags: [ 'Abode' ],
            deleteMe: false
        },
        {
            name: 'Work',
            id:   'Work',
            GoogleName: '60 East Cliff Street, Somerville, NJ 08876 USA',
            latlon: '40.570487,-74.60814',
            tags: [ 'Abode' ],
            deleteMe: false
        },
        {
            name: 'Wasabi',
            id:   'Wasabi',
            GoogleName: 'Wasabi Asian Plates & Sushi 12 W Main St Somerville, NJ 0887660 East Cliff Street, Somerville, NJ 08876 USA',
            latlon: '40.568392,-74.61217',
            tags: [ 'Restaurant', 'Sushi' ],
            deleteMe: false
        },
        {
            name: 'Grounds For Sculpture',
            id:   'GfS',
            GoogleName: 'Grounds For Sculpture 18 Fairgrounds Rd Trenton, NJ 08619',
            latlon: '40.2356839,-74.7176335',
            tags: [ 'Art', 'Park' ],
            deleteMe: false
        }
      ]
    );

    //declare the controller and inject our empty scope
    $controller('ListCtrl', {$scope: scope});
  }));

  // tests start here
  it('Has for places defined', function(){
    scope.$digest();
    scope.httpBackend.flush();
    expect(scope.places.length).toEqual(4);
  });

  it('First place\'s name is as expected', function(){
    scope.$digest();
    scope.httpBackend.flush();
    expect(scope.places[0].name).toEqual('Home');
  });

});
