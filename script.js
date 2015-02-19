var app=angular.module('spa',['ngRoute']);
app.config(function($routeProvider){
      $routeProvider
          .when('/',{
                templateUrl: '/welcome.html'
          })
          .when('/contactUs',{
                templateUrl: '/contactUs.html'
          });
});
app.controller('spaMainController',function($scope){

    /*      
    Here you can handle controller for specific route as well.
    */
});