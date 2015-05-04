var MainCtrl = function($scope, $rootScope, $http, $timeout) {
	$rootScope.loading = true;
	$rootScope.$on('Home', function(){
		$rootScope.homePage = true;
	}) 
	$rootScope.$on('notHome', function() {
		$rootScope.homePage = false;
	}) 
	$rootScope.$on('done-loading', function() {
		$rootScope.loading = false;
	})
}

angular
	.module('msdApp')
	.controller('MainCtrl', MainCtrl)