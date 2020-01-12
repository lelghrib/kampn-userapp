"use strict";

angular.module("userList").component("userList", {
  templateUrl: "user-list/user-list.html",
  controller: [
    "$http",
    function UserListController($http) {
      var self = this;
      // self.orderProp = "id";

      $http
        .get("https://trainee-api.pleiads.fr/users")
        .then(function(response) {
          self.users = response.data;
        });

      $http
        .get("https://trainee-api.pleiads.fr/users/count")
        .then(function(response) {
          self.count = response.data.count;
        });
    }
  ]
});
