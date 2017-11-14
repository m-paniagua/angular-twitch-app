myApp.factory('Streams', ['$http', function($http) {
    
    var getData = function(name) {
        return $http.get("https://wind-bow.glitch.me/twitch-api/streams/" + name)
        .then(function(response) {
            return response.data;
        })
    }

    return {
        getData: getData
    }
    // return {
    //     get: function(callback) {
    //         $http.get("https://wind-bow.glitch.me/twitch-api/streams/streamerhouse")
    //         .then(function(response){ 
    //             callback(response.data);
    //          });
    //     }
        
    // }
}])