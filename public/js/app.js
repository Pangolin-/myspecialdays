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
		.when("/about",
			{
				templateUrl: "templates/about.html",
				controller: "AboutCtrl"
			}
		)
		.when("/calendar",
			{
				templateUrl: "templates/calendar.html",
				controller: "CalCtrl"
			}
		)
		.when("/directory",
			{
				templateUrl: "templates/directory.html",
				controller: "DirCtrl"
			}
		)
		.when("/settings",
			{
				templateUrl: "templates/settings.html",
				controller: "SettingsCtrl"
			}
		)
	})