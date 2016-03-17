angular.module('arendaService', []).factory('Obivlenie', function($http){
      return {
          // get all ad
          get : function(){
              return $http.get('/listarenda');
          }
      }
});
