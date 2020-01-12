angular.module("app").config([
  "$routeProvider",
  function config($routeProvider) {
    $routeProvider
      .when("/", {
        template: "<user-create></user-create>"
      })
      .otherwise("/");
  }
]);
