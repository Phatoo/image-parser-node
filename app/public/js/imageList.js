function imageList($scope, $http) {

    $scope.fetch = function() {
        $http({
            url: "http://localhost:5000/images",
            method: "GET"

        }).success(function(data, status, headers, config) {
            $scope.images = data;

        }).error(function(data, status, headers, config) {
            $scope.status = status;
        });
    }

    
}