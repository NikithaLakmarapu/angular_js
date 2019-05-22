angular.module("myApp", [])
.controller("myFirstController", ['$scope', function ($scope) {
    console.log("this is a form controller");
$scope.Lakmarapu = "hi";
$scope.hello = "hello world";
}]);