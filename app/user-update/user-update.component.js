"use strict";

angular.module("userUpdate").component("userUpdate", {
  templateUrl: "user-update/user-update.html",
  controller: [
    "$http",
    "$scope",
    "$routeParams",
    "$location",
    "$timeout",
    function userUpdateController($http, $scope, $routeParams, $location) {
      var self = this;
      this.hideConfirmation = true;
      this.deleteConfirmation = true;

      $http
        .get("https://trainee-api.pleiads.fr/users/" + $routeParams.userId)
        .then(
          function(response) {
            self.user = response.data;
          },
          function(error) {
            // handle error
            $scope.error = error;
          }
        );

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
        $http
          .patch(
            "https://trainee-api.pleiads.fr/users/" + $routeParams.userId,
            user
          )
          .then(
            function(response) {
              //confirmation msg to user & redirect
              $scope.reset();
              self.hideConfirmation = false;
              setTimeout(function() {
                $scope.$apply(function() {
                  self.hideConfirmation = true;
                  $location.path("/");
                });
              }, 2500);
            },
            function(error) {
              // handle error
              // self.error = error;
            }
          );
      };

      $scope.delete = function(user) {
        $scope.master = angular.copy(user);
        $http
          .delete("https://trainee-api.pleiads.fr/users/" + $routeParams.userId)
          .then(
            function(response) {
              //confirmation msg to user & redirect
              self.deleteConfirmation = false;
              setTimeout(function() {
                $scope.$apply(function() {
                  self.deleteConfirmation = true;
                  $location.path("/");
                });
              }, 2500);
            },
            function(error) {
              // handle error
              // self.error = error;
            }
          );
      };

      $scope.cancel = function(form) {
        $location.path("/");
      };
    }
  ]
});
