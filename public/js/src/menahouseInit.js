var mainApp = angular.module('mainApp', ["ui-rangeSlider"]);

/*app configuration added here*/
mainApp.config(['$interpolateProvider', '$locationProvider',
  function($interpolateProvider, $locationProvider) {

    $interpolateProvider.startSymbol('{>');
    $interpolateProvider.endSymbol('<}');

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });;
  }
]);

mainApp.factory('RangeSliderFactory', function() {
  // private variables and functions
  var range = {
    min: 20,
    max: 100
  };

  // public API
  return {
    getrangeValue : function() {
      return range; }
  };

});


// fqs == filter query string
mainApp.service('IndexSearcService', function() {

       var _filters = {
         gorod : '',
         type_nedvizhimosti:''
       };

        //  var _name = 'Bob';

      //  var setfilterValue = function(parm) {
      //     filters.push(parm);
      //  };
       //
      //  var getfilterValue = function(parm) {
      //     return filters;
      //  };


      return {
          // getfilterValue: function() {
          //       console.log('ghytjhuytjuhjutjh  jtyhnjth hythnykth ytgyt');
          //       return filters;
          // },

             setfilterValue: function (filter) {
               _filters = filter;
             },
             getfilterValue: function () {
               return _filters;
             }

          // setfilterValue: setfilterValue,
          // getfilterValue: getfilterValue
      };

});


// mainApp.service('ListingItemsearchService', function() {
//
//   var range = {
//     min: 20,
//     max: 100
//   };
//
//   return {
//     getrangeValue : function() {
//       return range; }
//   };
//
// });

mainApp.controller("IndexController", ['$scope', '$http', function($scope,  $http) {


  // $scope.filters = {
  //   gorod: '',
  //   type_nedvizhimosti: ''
  // };

  var url = '/properties/all';
  var method = 'POST';

  var params = {
    'gorod': '',
    'type_nedvizhimosti': ''
  };

  $scope.IndexSearch = function() {

      params = {
        'gorod': $scope.qs.gorod,
        'type_nedvizhimosti': $scope.qs.type_nedvizhimosti
      }

      $http({ method :  method, url : url, data : params}).then(function(response) {
          console.log('Voila!');
          console.log(response);
      },

      function(response) {
          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
      });
  };

  // $scope.initData = function(){
  //
  //     for (var fld in $scope.filters) {
  //                 if (fld in $scope.qs) {
  //                     $scope.filters[fld] = qs[fld];
  //                 }
  //     }
  //
  //     console.log('hi');
  //
  //     console.log($scope.filters);
  // };

}]);


mainApp.controller("mainController", ['$scope', 'RangeSliderFactory','$http', function($scope, RangeSliderFactory, $http) {
  $scope.range = RangeSliderFactory.getrangeValue();



  // ``$scope.filters = IndexSearcService.getfilterValue();


  var method = 'GET';

  $scope.IndexSearch = function() {

      // $scope.data = $data;

      var url = '`/properties/all`';

      var params = {
        'gorod': '',
        'type_nedvizhimosti': ''
      };

      params = {
        'gorod': $scope.qs.gorod,
        'type_nedvizhimosti': $scope.qs.type_nedvizhimosti
      }

      $http({
          method :  method,
          url : url,
          data: $.param($scope.qs),}).
          success(function(response) {
              //console.log(response);
            //  alert('Voila!');
             $scope.data = $scope.qs;
              // $scope.data = window.location.search($scope.qs);
              // window.location = url;
          }).error(function(response) {
              console.log(response);
              alert('This is embarassing. An error has occured. Please check the log for details');
       });

      // then(function(response) {
      //     console.log('Voila!');
      //     console.log(response);
      // },
      //
      // function(response) {
      //     $scope.data = response.data || 'Request failed';
      //     $scope.status = response.status;
      // });

    }


  $scope.getItems = function() {

    console.log($scope.qs);

    var url = '/properties/all';
    $http({
            method: method,
            url: url,
            data: $.param($scope.qs),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(response) {
            //console.log(response);
          // SS$scope.data = $scope.qs;
        }).error(function(response) {
            console.log(response);
            alert('This is embarassing. An error has occured. Please check the log for details');
        });


      // $http({ method :  method, url : url,  data: { test: 'test' } }).success(function(response) {
      //     console.log('Voila!');
      //     console.log(response);
      //
      //     $scope.data = response;
      // },
      //
      // function(response) {
      //     $scope.data = response.data || 'Request failed';
      //     $scope.status = response.status;
      // });

  };


  // $scope.data = IndexSearcFactory.getfilterValue();

  // $scope.filters = {
  //   gorod: '',
  //   type_nedvizhimosti: ''
  // };

  // $scope.qsdata = {};
  // $scope.qsdata  = IndexSearcFactory.getfilterValue();

  //  $scope.initData = function(){
   //
  //      console.log($scope.qs);
  //  };

  // $scope.initData = function(){
  //
  //     for (var fld in $scope.filters) {
  //                 if (fld in $scope.qs) {
  //                     $scope.filters[fld] = qs[fld];
  //                 }
  //     }
  //
  //     console.log('hi');
  //
  //     console.log($scope.filters);
  // };

}]);


mainApp.directive('searchfilter', function(){

  return {
    restrict: 'E',
    templateUrl:'/resources/viewa/layouts/partials/nav.blade.php'
  };

});

mainApp.controller("getSearchRespone", function($scope) {
  $scope.initData = function() {

    $scope.qs
      //  console.log($scope.qs);


  };
});
//
// mainApp.controller('SearchItemsController', ['$scope','$location', '$http' ,
//                       function($scope, $location, $http)
// {
//     $scope.datafilter = {};
//     //$scope.loading = false ;
//
//     $scope.processForm = function(search){
//       $scope.datafilter = angular.copy(search);
//
//       var qs = $location.search($scope.datafilter);
//       window.location = "./properties";
//
//
//       $http({
//           method  : 'post',
//           url     : 'properties/getdata',
//           data    : $.param(qs),  // pass in data as strings
//           headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
//       }).success(function(response) {
//             console.log(response);
//       });
// }}]);

//
// angular.element(document).ready(function () {
//     angular.bootstrap(document, ['mainApp']);
// });


// angular.module('myApp', [])
//   .controller('Ctrl', function($scope, MyFactory) {
//     $scope.data = MyFactory.getPlayer();
//     $scope.update = MyFactory.swapPlayer;
//   })
//   .factory('MyFactory', function() {
//     // private variables and functions
//     var player = {
//         name: 'Peyton Manning',
//         number: 18
//       },
//       swap = function() {
//         player.name = 'A.J. Green';
//       };
//     // public API
//     return {
//       getPlayer: function() {
//         return player;
//       },
//       swapPlayer: function() {
//         swap();
//       }
//     };
//   });
