"use strict";

angular.module("homeHeader").component("homeHeader", {
  templateUrl: "layout/home-header.html",
  controller: function HomeHeaderController() {
    this.logo = "https://kampn.fr/wp-content/uploads/2018/01/kampn-logo.png";
    this.links = [
      {
        name: "Kamp'n",
        url: "https://www.kampn.com/"
      },
      {
        name: "Contact",
        url: "https://www.kampn.com/contact/"
      }
    ];
  }
});
