
//CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {

  $scope.city = cityService.city;
  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  });

  $scope.submit = function() {
    $location.path("/forecast");
  };

}]);

weatherApp.controller('forecastController', ['$scope','$routeParams', 'cityService', 'weatherService' function($scope, $routeParams, cityService, weatherService) {

  $scope.city = cityService.city;

  $scope.days = $routeParams.days || "2";

  //console.log("$routeParams", $routeParams)


  $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days, '966a14fe76bbe00e14dea1a253fe5019');

  //converter
  $scope.convertToF = function(kelvin) {
    return Math.round(( 1.8 * (kelvin - 273)) + 32 );
  }

  $scope.convertDate = function(date) {
    return new Date(date * 1000);
  }

  //console.log($scope.weatherResult);

}]);