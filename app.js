angular.module('app', [])
.controller('AppController', ['$scope', '$interval','$timeout', function($scope, $interval, $timeout){

	$interval(function(){

		$scope.$broadcast('timer');

	}, 100);

}])
.controller('EventController', ['$scope', function($scope){

	var handleEvent = null;
	$scope.counter = 0;

	$scope.toggleTime = function(){
		handleEvent ? stopTimer() : startTimer();
	}

	var startTimer = function(){

		handleEvent = $scope.$on('timer', function(event,data){
			$scope.counter++;
		});
		$scope.isActive = true;

	}
	var stopTimer = function(){
		handleEvent();
		handleEvent = null;
		$scope.isActive = false;
	}

	//call start timer on load
	startTimer();

}]);