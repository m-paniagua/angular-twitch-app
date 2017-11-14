myApp.controller('TwitchController', ['$scope', '$q', 'TwitchFactory', function($scope, $q, TwitchFactory) {
    var userNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "streamerhouse"]
    $scope.channels = [];
    $scope.streams = [];

    TwitchFactory.getChannels().then(
        function(channels) {
            for (let index = 0; index < channels.length; index++) {
                $scope.channels.push(channels[index].data);
            }
        }
    )

    TwitchFactory.getStreams().then(
        function(streams) {
            for (let index = 0; index < streams.length; index++) {
                $scope.streams.push(streams[index].data);
            }
        }
    )
}])
