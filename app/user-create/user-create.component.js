"use strict";

angular.module("userCreate").component("userCreate", {
  templateUrl: "user-create/user-create.html",
  controller: [
    "$http",
    "$scope",
    "$route",
    function userCreateController($http, $scope, $location) {
      $scope.master = {};

      $scope.create = function(user) {
        $scope.master = angular.copy(user);
        $http.post("https://trainee-api.pleiads.fr/users", user).then(
          function(response) {
            $location.reload();
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
