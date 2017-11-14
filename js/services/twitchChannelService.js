myApp.factory('Channels', ['$http', function($http) {
    var getData = function(name) {
        return $http.get("https://wind-bow.glitch.me/twitch-api/channels/" + name)
        .then(function(response) {
            return response.data;
        })
    }

    return {
        getData: getData
    }

    // return {
    //     get: function(callback) {
    //         $http.get("https://wind-bow.glitch.me/twitch-api/channels/streamerhouse")
    //         .then(function(response){ 
    //             callback(response.data);
    //          });
    //     }
    // }
}])