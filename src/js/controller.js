var myApp = angular.module('MyApp', ['ngAnimate']);

function Controller($scope, $http) {

        $scope.customers = [{name:"ABC", street:"Testadresse", number:"1"}];
     
        var isDebug = false;

        $scope.getData = function(url) {
                $http.get(url).success(function(data) {
            $scope.customers = data;
          });
        };

        $scope.addCustomer = function() {
                $scope.customers.push({
                    number:$scope.number, 
                    firm:$scope.firm,
                    name:$scope.name,
                    forename:$scope.forename,
                    street:$scope.street,
                    zip:$scope.zip,
                    city:$scope.city,
                    phone:$scope.phone,
                    mobile:$scope.mobile,
                    email:$scope.email,
                    payment_terms:$scope.payment_terms,
                    billing_address:$scope.billing_address});
        };

        $scope.saveData = function() {
                if (!showSave) {
                        alert("Your browser does not support any method of saving JavaScript generated data to files.");
                        return;
                }
                showSave(angular.toJson($scope.customers), 'customers.json', 'text/plain; charset=UTF-8');
                };
 
        uuid = function() {
                return UUIDjs.create().toString();
        };
}