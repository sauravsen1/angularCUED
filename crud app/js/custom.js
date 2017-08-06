var myApp = angular.module('crudApp', []);
myApp.controller('crudCtrl', function($scope) {
	
	$scope.newUser = {};
	$scope.clickedUser = {};
	$scope.message = "";



	$scope.users = [
		{userName: "sauarv", fullName: "Saurav kumer Sen", email: "nothing@gmail.com"},
		{userName: "sharmila", fullName: "Sharmila Sen", email: "nothings@gmail.com"},
		{userName: "shanta", fullName: "Shanta Sen", email: "nothingss@gmail.com"}
	];
	$scope.saveUser = function() {
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
		$scope.message = "New User Added Successfully!";
	};
	$scope.selectUser = function(user) {
		console.log(user);
		$scope.clickedUser = user;
	};
	$scope.updateUser = function() {
		$scope.message = "User Update Successfully!";
	};
	$scope.deleteUser = function() {
		$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
		$scope.message = "User Delete Successfully!";
	}
	$scope.clearMessage = function() {
		$scope.message = "";
	}

});