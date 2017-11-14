myApp.controller('TwitchController', ['$scope', '$q', 'TwitchFactory', function($scope, $q, TwitchFactory) {
    var userNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "streamerhouse"]
    $scope.channels;
    $scope.streams;

    TwitchFactory.getChannels().then(
        function(data) {
            $scope.channels = data;
            // console.log(data);
        }
    )

    TwitchFactory.getStreams().then(
        function(data) {
            $scope.streams = data;
        }
    )
}])
