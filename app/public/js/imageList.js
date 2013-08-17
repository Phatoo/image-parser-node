function imageList($scope, $http) {

    $scope.url = 'http://xaxa-net.ru/prikol_pics/'
    $scope.message = 'no votes'

    $scope.fetch = function() {
        $http({
            url: "http://localhost:5000/images?url="+$scope.url,
            method: "GET"

        }).success(function(data, status, headers, config) {
            $scope.images = data;

        }).error(function(data, status, headers, config) {
            $scope.status = status;
        });
    }

    $scope.voteUp = function(url) {
        $http({
            url: "http://localhost:5000/images/voteup?url="+url,
            method: "POST"

        }).success(function(data, status, headers, config) {
            $scope.message = data;

        }).error(function(data, status, headers, config) {
            $scope.message = status;
        });
    }

    $scope.voteDown = function(url) {
        $http({
            url: "http://localhost:5000/images/votedown?url="+url,
            method: "POST"

        }).success(function(data, status, headers, config) {
            $scope.message = data;

        }).error(function(data, status, headers, config) {
            $scope.message = status;
        });
    }

    
}