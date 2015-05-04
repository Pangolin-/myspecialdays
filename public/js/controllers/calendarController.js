var CalCtrl = function($scope, $rootScope, $http, $timeout) {
	$rootScope.loading = true;
	$rootScope.$emit('notHome');
	
	$timeout(function() {
		$rootScope.$emit('done-loading');
	}, 0)
}

angular
	.module('msdApp')
	.controller('CalCtrl', CalCtrl)