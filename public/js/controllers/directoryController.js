var DirCtrl = function($scope, $rootScope, $http, $timeout) {
	$rootScope.loading = true;
	$rootScope.$emit('notHome');
	$scope.types = [
		"By Name",
		"By Location"
	]
	
	$timeout(function() {
		$rootScope.$emit('done-loading');
	}, 0)
}

angular
	.module('msdApp')
	.controller('DirCtrl', DirCtrl)