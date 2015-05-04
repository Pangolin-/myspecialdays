function setBg( $rootScope, $timeout ) {
	   return {
		restrict: 'A',
		link: function ( scope, element, attrs ) {
			$rootScope.$on('Home', function() {
				$timeout(function() {
					attrs.$set('style', 'background: url(' + $rootScope.bg + ');background-position:center center;')
				}, 250);
				$timeout(function() {
					$rootScope.$emit('image-loaded');
				}, 1000)
			})
			$rootScope.$on('notHome', function() {
				element.removeAttr('style');
			})
		}
	  };
}

angular
	.module('msdApp')
	.directive('setBg', setBg)