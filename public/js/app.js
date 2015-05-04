angular
	.module('msdApp', ['ngAnimate','ngRoute','ui.bootstrap'])

angular
	.module('msdApp')
	.config(function($routeProvider) {
		$routeProvider.when("/",
			{
				templateUrl: "templates/home.html",
				controller:"HomeCtrl"
			}
		)
	})