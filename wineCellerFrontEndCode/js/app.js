var app = angular.module("MyWineCeller", ["ngRoute","allControllers"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/winelist", {
    templateUrl : "temp/winelist.htm",
    controller  : "wineListController"
  })
  .when("/addwine/:param?", {
    templateUrl : "temp/addwine.htm",
    controller  : "addWineController"
  })
  .otherwise({
    redirectTo: '/'
  });
});
