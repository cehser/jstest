function Controller($scope, $http) {

        $scope.customers = [{name:"ABC", address:"Testadresse", number:"1"}];
     
        var isDebug = false;

        $scope.getData = function(url) {
                $http.get(url).success(function(data) {
            $scope.server = data;
          });
        };

        $scope.addCustomer = function() {
                $scope.customers.push({number:$scope.number, name:$scope.name, address:$scope.address});
        };

        $scope.saveData = function() {
                if (!showSave) {
                        alert("Your browser does not support any method of saving JavaScript generated data to files.");
                        return;
                }
                showSave(angular.toJson($scope.server), 'server.json', 'text/plain; charset=UTF-8');
                };
 
        uuid = function() {
                return UUIDjs.create().toString();
        };
}