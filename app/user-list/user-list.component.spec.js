describe("userList", function() {
  beforeEach(module("userList"));

  describe("UserListController", function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET("https://trainee-api.pleiads.fr/users").respond([
        {
          id: 1,
          firstName: "Alice",
          lastName: "Merveille",
          email: "alice@mail.com"
        },
        {
          id: 2,
          firstName: "Coco",
          lastName: "Rico",
          email: "coco@mail.com"
        }
      ]);
      $httpBackend
        .expectGET("https://trainee-api.pleiads.fr/users/count")
        .respond({ count: 2 });
      ctrl = $componentController("userList");
    }));

    it("should fetch 2 users", inject(function() {
      expect(ctrl.users).toBeUndefined();
      $httpBackend.flush();
      expect(ctrl.users).toEqual([
        {
          id: 1,
          firstName: "Alice",
          lastName: "Merveille",
          email: "alice@mail.com"
        },
        {
          id: 2,
          firstName: "Coco",
          lastName: "Rico",
          email: "coco@mail.com"
        }
      ]);
    }));

    it("should show a total number of users equal to 2", inject(function() {
      $httpBackend.flush();
      expect(ctrl.count).toBe(ctrl.users.length);
    }));
  });
});
