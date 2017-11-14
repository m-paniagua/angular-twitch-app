myApp.factory('TwitchFactory', function($http, $q) {
    var userNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "streamerhouse"];

    return {
        getChannels: function() {
            var promises = [];

            for (let i = 0; i < userNames.length; i++) {
                promises.push($http.get("https://wind-bow.glitch.me/twitch-api/channels/" + userNames[i]));
            }

            return $q.all(promises);
        },

        getStreams: function() {
            var promises = [];

            for (let i = 0; i < userNames.length; i++) {
                promises.push($http.get("https://wind-bow.glitch.me/twitch-api/streams/" + userNames[i]));
            }

            return $q.all(promises);
        }
    }
})