describe("userList", function() {
  beforeEach(module("userList"));

  describe("UserListController", function() {
    it("should create a `users` list with 6 users", inject(function(
      $componentController
    ) {
      var ctrl = $componentController("userList");

      expect(ctrl.users.length).toBe(6);
    }));

    it("should show a total number of users equal to 6", inject(function(
      $componentController
    ) {
      var ctrl = $componentController("userList");

      expect(ctrl.count).toBe(ctrl.users.length);
    }));
  });
});
