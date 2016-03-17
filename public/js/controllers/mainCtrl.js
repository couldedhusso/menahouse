angular.module('mainCtrl', []).controller('ListArendaController', function($scope, $http, Obivlenie) {
    $scope.obivlenieData = {} ;

    $scope.loading = true ;

    // $scope.loading = false ;
    Obivlenie.get().success(function(data){
        $scope.obivlenie = data ;
        $scope.loading = false ;
    });

});
