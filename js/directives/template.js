

var Main = function() {return {template: '',restrict: 'E'}}
var Header = function() {return {template: '',restrict: 'E'}}
var Content = function() {return {template: '',restrict: 'E'}}
	
angular
	.module('msdApp')
	  .directive('main', Main)
	  .directive('header', Header)
	  .directive('content', Content)