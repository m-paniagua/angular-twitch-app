myApp.controller('TwitchController', ['$scope', 'Channels', 'Streams', function($scope, Channels, Streams) {
    var userNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "streamerhouse"]
    $scope.channels = [];
    $scope.streams = [];

    for (var i = 0; i < userNames.length; i++) {
        Channels.getData(userNames[i]).then(function(data) {
            $scope.channels.push(data);
        })
        
        Streams.getData(userNames[i]).then(function(data) {
            $scope.streams.push(data);
        })
    }
}])
