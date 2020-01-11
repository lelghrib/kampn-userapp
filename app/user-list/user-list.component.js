"use strict";

angular.module("userList").component("userList", {
  templateUrl: "user-list/user-list.html",
  controller: function UserListController() {
    this.count = 6;
    this.users = [
      {
        id: 172,
        firstName: "Yan",
        lastName: "dezdhhg",
        email: "sss@s"
      },
      {
        id: 173,
        firstName: "jack",
        lastName: "davis",
        email: "jack@live.fr"
      },
      {
        id: 223,
        firstName: "test",
        lastName: "test",
        email: "test@test.awd"
      },
      {
        id: 229,
        firstName: "test",
        lastName: "test",
        email: "test@test.com"
      },
      {
        id: 230,
        firstName: "hello",
        lastName: "adwdw",
        email: "awd@adw.awd"
      },
      {
        id: 232,
        firstName: "jean",
        lastName: "dor",
        email: "dor@f.com"
      }
    ];
  }
});
