//SERVICES custom
weatherApp.service('cityService', function() {

  this.city = "San Francisco, CA";

});

weatherApp.service('weatherService', ['$resource', function($resource) {

  this.getWeather = function (city, days, id) {
    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

    return weatherAPI.get({ q: city, cnt: days, appId: id });
    
  };


}]);