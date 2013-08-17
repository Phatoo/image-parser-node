function linkList($scope, $http) {

    $scope.url = 'http://google.com'

    $scope.fetch = function() {
        $http({
            url: "http://localhost:5000/links?url="+$scope.url,
            method: "GET"

        }).success(function(data, status, headers, config) {
            $scope.images = data;

        }).error(function(data, status, headers, config) {
            $scope.status = status;
        });
    }

    
}