angular.module("app").config([
  "$routeProvider",
  function config($routeProvider) {
    $routeProvider
      .when("/", {
        template:
          '<div class="content-wrapper">' +
          "<user-list></user-list>" +
          "<user-create></user-create>" +
          "</div>"
      })
      .when("/:userId", {
        template:
          '<div class="content-wrapper">' +
          "<user-list></user-list>" +
          "<user-update></user-update>" +
          "</div>"
      })
      .otherwise("/");
  }
]);
