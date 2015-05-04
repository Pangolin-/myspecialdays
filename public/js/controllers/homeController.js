function HomeCtrl($scope, $rootScope, $timeout) {
	$rootScope.loading = true;
	$rootScope.$emit('Home');
	imgPath = '/img/bg/';
	var imgArr = [1,2,3,4];
	
	function imagePicker(Ar) {
		var num = 0;
		while (num==0) {
			num = Math.floor( Math.random() * (Ar.length + 1) );
		}
		$rootScope.bg = imgPath + num + ".jpg";
	}
	
	imagePicker(imgArr);
	$rootScope.$on('image-loaded', function() {
		$rootScope.$emit('done-loading');
	});
	$timeout(function() {
		$rootScope.$emit('done-loading');
	}, 500)
}

angular
	.module('msdApp')
	.controller('HomeCtrl', HomeCtrl)