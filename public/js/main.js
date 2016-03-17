
// var listarenda = angular.module('listArenda', ['mainCtrl', 'arendaService']);

var listarenda = angular.module('listArenda', []);

/*app configuration added here*/
listarenda.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[');
  $interpolateProvider.endSymbol(']}');
});


listarenda.controller('ListArendaController',['$scope', '$http', function($scope, $http) {

      // $scope.loading = true ;
      // $http.get('/listarenda').success(function(listarenda){
      //     $scope.listarenda = listarenda ;
      //
      //     //$scope.mainImageUrl = listarenda.images[0];
      //     $scope.mainImageUrl = listarenda.path;
      //     $scope.loading = false ;
      // });


      $http.get('/listimg').success(function(listarenda){
          // $scope.listarenda = listarenda ;

          //$scope.mainImageUrl = listarenda.images[0];
          $scope.mainImageUrl = listarenda.path;
          $scope.loading = false ;
      });



      // $scope.setImage = function(imageUrl){
      //     $scope.mainImageUrl = imageUrl;
      // }

      $scope.orderProp = 'price';
}]);
