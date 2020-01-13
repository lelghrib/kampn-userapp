"use strict";

angular.module("userCreate").component("userCreate", {
  templateUrl: "user-create/user-create.html",
  controller: [
    "$http",
    "$scope",
    "$route",
    function userCreateController($http, $scope, $route) {
      $scope.master = {};

      $scope.create = function(user) {
        $scope.master = angular.copy(user);
        $http.post("https://trainee-api.pleiads.fr/users", user).then(
          function(response) {
            $route.reload();
          },
          function(error) {
            // handle error
            $scope.error = error;
          }
        );
      };

      $scope.reset = function(form) {
        if (form) {
          form.$setPristine();
          form.$setUntouched();
        }
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
    }
  ]
});
