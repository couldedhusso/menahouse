
// var mainApp = angular.module('mainApp', ['ui-rangeSlider']);

var mainApp = angular.module('mainApp', ['ui-rangeSlider',
                                         'ui.bootstrap'
                                        ]);

/*app configuration added here*/
mainApp.config(['$interpolateProvider', '$locationProvider',
  function($interpolateProvider, $locationProvider) {

    $interpolateProvider.startSymbol('{>');
    $interpolateProvider.endSymbol('<}');

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
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
        return range
      }
  };
});


mainApp.controller("ItemsDetailsController", ['$scope', 'RangeSliderFactory', function($scope, RangeSliderFactory) {
  $scope.range = RangeSliderFactory.getrangeValue();
}]);


mainApp.controller("mainController", ['$scope', 'RangeSliderFactory','$http', function($scope, RangeSliderFactory, $http) {

  $scope.range = RangeSliderFactory.getrangeValue();
  var url = '/getqueryresults';

  $scope.houses = [];
  $scope.typehouse = "" ;


  $http.get(url).success(function(response) {
         $scope.houses = response;
         $scope.totalItems = $scope.houses.length;

  }).error(function(response) {
          console.log(response);
          alert('This is embarassing. An error has occured. Please check the log for details');
  });


  $scope.currentPage = 1;
  $scope.itemsPerPage = 4;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.getimgpath = function(param){
      return 'storage/thumbnail/'+ param +'.jpeg';
  };

  $scope.getstatus = function(status){

    if (status =='Обмен_продажа') {
        return 'Обмен + продажа';
    }else {
       return 'Обмен';
    }

  };

  $scope.gettypehouse = function(number_room, type_nedvizhimosti) {
      var nbre_room = parseInt(number_room, 10);
      var tproom ;

      if (type_nedvizhimosti == "Комната" ||
          type_nedvizhimosti == 'Частный дом') {

          if (type_nedvizhimosti == 'Частный дом'){
              return 'Дом';
          }

          return 'Комната';

      } else {

        switch (nbre_room) {
          case 1:
            tproom= "однокомнатная ";
            break;

          case 2:
            tproom = "2х комнатная";
            break;

          case 3:
            tproom = "3х комнатная";
            break;

          case 4:
              tproom = "4х комнатная";
              break;

          default:
            tproom = "Студия";
            break;
        }

        return tproom;

        // if (type_nedvizhimosti == 'Новостройки') {
        //     if (tproom != 'Студия') {
        //         return tproom + 'квартира в новостроике';
        //     } else {
        //       return tproom + 'в новостроике';
        //     }
        // } else {
        //   if (tproom == 'Студия') {
        //       return tproom
        //   } else {
        //     return tproom + 'квартира';
        //   }
        // }

      }
  }

}]);


// var mena = angular.module('mena', ['ui.bootstrap']);
var mena = angular.module('mena', ['ui.bootstrap']);

mena.config(['$interpolateProvider', '$locationProvider',
  function($interpolateProvider, $locationProvider) {

    $interpolateProvider.startSymbol('{>');
    $interpolateProvider.endSymbol('<}');

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
]);


// ======================================================== gestion des favoris

mena.controller("MesFavorisController", ['$scope', '$http', function($scope,  $http) {

   var url = '/getuserbookmarkedproperties';
   $scope.mesfavoris = [];

   $http.get(url).success(function(response) {
          $scope.mesfavoris = response;

   }).error(function(response) {
           console.log(response);
         //  alert('This is embarassing. An error has occured. Please check the log for details');
   });

   $scope.totalItems = $scope.mesfavoris.length;
   $scope.currentPage = 1;
   $scope.itemsPerPage = 2;

  //  $scope.addItemToBookmark  = function(iditem){
  //    $http.get('/bookmarked', {  params: { id: iditem } })
  //      .then(function(results) {
  //         alert('hi from backend');
  //      }, function(reason) {
  //         // TODO : Send reason to developers
  //      })
  //  }

    $scope.addItemToBookmark = function(iditem){

        $http.get('/bookmarked', {  params: { id: iditem } }).success(function(response) {
                alert('hi from backend');

        }).error(function(response) {
                console.log(response);
              //  alert('This is embarassing. An error has occured. Please check the log for details');
        });
    }



   $scope.getimgpath = function(param){
       return '/storage/thumbnail/'+ param +'.jpeg';
   };

   $scope.gettypehouse = function(number_room, type_nedvizhimosti) {
       var nbre_room = parseInt(number_room, 10);
       var tproom ;


       if (type_nedvizhimosti == "Комната" ||
           type_nedvizhimosti == 'Частный дом') {

           if (type_nedvizhimosti == 'Частный дом'){
               return 'Дом';
           }

           return 'Комната';

       } else {

         switch (nbre_room) {
           case 1:
             tproom= "одноком.";
             break;

           case 2:
             tproom = "2х комн.";
             break;

           case 3:
             tproom = "3х комн.";
             break;

           case 4:
               tproom = "4х комн.";
               break;

           default:
             tproom = "Студия";
             break;
         }

        return tproom;

       }
   }

}]);


mena.controller("UserMailInboxController", ['$scope', '$http', function($scope,  $http) {

   var url = '/mailbox/usermail';
   $scope.usermessages = [];

   $http.get(url).success(function(response) {
          $scope.usermessages = response;
          $scope.totalMails = response.length;
   }).error(function(response) {
           console.log(response);
         //  alert('This is embarassing. An error has occured. Please check the log for details');
   });


   $scope.currentPage = 1;
   $scope.mailPerPage = 10;

   $scope.sliceTexte = function(sizeText){
        return parseInt((sizeText * 85) / 100)

   };

  //  $scope.addItemToBookmark  = function(iditem){
  //    $http.get('/bookmarked', {  params: { id: iditem } })
  //      .then(function(results) {
  //         alert('hi from backend');
  //      }, function(reason) {
  //         // TODO : Send reason to developers
  //      })
  //  }

}]);


mena.controller("UserMailSentController", ['$scope', '$http', function($scope,  $http) {

   var url = '/mailbox/usermailsenv';
   $scope.usermessages = [];

    // scope.msg = 'UserMailTrashController';

   $http.get(url).success(function(response) {
          $scope.usermessages = response;
          $scope.totalMails = response.length;

   }).error(function(response) {
           console.log(response);
         //  alert('This is embarassing. An error has occured. Please check the log for details');
   });


   $scope.currentPage = 1;
   $scope.mailPerPage = 10;

   $scope.sliceTexte = function(sizeText){
        return parseInt((sizeText * 85) / 100)

   };
}]);


mena.controller("UserMailTrashController", ['$scope', '$http', function($scope,  $http) {

   var url = '/mailbox/usermailstrash';
   $scope.usermessages = [];

   $http.get(url).success(function(response) {
          $scope.usermessages = response;
          $scope.totalMails = response.length;
    //      scope.msg = 'UserMailTrashController';
   }).error(function(response) {
           console.log(response);
         //  alert('This is embarassing. An error has occured. Please check the log for details');
   });


   $scope.currentPage = 1;
   $scope.mailPerPage = 10;

   $scope.sliceTexte = function(sizeText){
        return parseInt((sizeText * 85) / 100)

   };
}]);


mena.controller("UserMailFavorisController", ['$scope', '$http', function($scope,  $http) {

   var url = '/mailbox/usermailsfavoris';
   $scope.usermessages = [];

   $http.get(url).success(function(response) {
          $scope.usermessages = response;
          $scope.totalMails = response.length;
   }).error(function(response) {
           console.log(response);
         //  alert('This is embarassing. An error has occured. Please check the log for details');
   });


   $scope.currentPage = 1;
   $scope.mailPerPage = 10;

   $scope.sliceTexte = function(sizeText){
        return parseInt((sizeText * 85) / 100)

   };
}]);


// ======================================================== gestion du mailbox

// var mena = angular.module('mena', ['ui.bootstrap']);
var menahouseInbox = angular.module('menahouseInbox', []);

menahouseInbox.config(['$interpolateProvider', '$locationProvider',
  function($interpolateProvider, $locationProvider) {

    $interpolateProvider.startSymbol('{>');
    $interpolateProvider.endSymbol('<}');

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
]);


menahouseInbox.controller('inboxController',['$scope', '$http', function($scope,  $http){
    $scope.gretting = "inbox module";
}]);
