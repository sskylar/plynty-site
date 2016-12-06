(function() {
  'use strict';

  angular.module('app')
    .controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$scope', '$location', '$rootScope'];

  function AppCtrl($scope, $location, $rootscope) {

    $scope.$watch(function() {
        return $location.path();
      
      }, function(path) {
        $scope.page = path;
      
      }
    );

    $scope.refresh = function() {
      $rootScope.$broadcast('refresh',[]);
    };

  }

  angular.module('app', ['ngMaterial'])
    .controller('FormController', FormController);

  function FormController($scope) {
    $scope.user = {
      name: 'Paul',
      email: 'paulfischer60@gmail.com'
    };
  }

})();


