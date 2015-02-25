var MainCtrl = function($scope, $http, $interval, $timeout, $window) {
	$scope.unauth = false;
	$scope.mainPage = true;
	$scope.authenticate = function() {$scope.unauth = false;$scope.mainPage=true;}
	$scope.menuExpanded = true;
	$scope.navExpanded = true;
	$scope.searchExpanded = true;
	
	//INITIAL MOBILE VIEW CHECK
	if ($window.innerWidth <= 920) {
		$scope.mobileView = true;
		$scope.menuExpanded = false;
	}
	else $scope.mobileView = false;
	
	$scope.changePage = function(page) {
		switch (page) {
			case "home":
				$scope.specialDays=false;$scope.story=false;$scope.business=false;$scope.settings=false;
				$scope.mainPage=true;
				break;
			case "story":
				$scope.mainPage = false;$scope.specialDays=false;$scope.business=false;$scope.settings=false;
				$scope.story=true;
				break;
			case "specialDays":
				$scope.mainPage = false;$scope.story=false;$scope.business=false;$scope.settings=false;
				$scope.specialDays=true;
				break;
			case "business":
				$scope.mainPage = false;$scope.story=false;$scope.specialDays=false;$scope.settings=false;
				$scope.business=true;
				break;
			case "settings":
				$scope.mainPage = false;$scope.story=false;$scope.specialDays=false;$scope.business=false;
				$scope.settings=true;
				break;
		}
		if ($scope.mobileView) {
			$scope.menuExpanded = false;
		}
	}
	
	$scope.templates = [
		{
			URL: "templates/mainContent.html"
		}
	,	{
			URL: "templates/story.html"
		}
	,	{
			URL: "templates/specialDays.html"
		}
	,	{
			URL: "templates/businessDir.html"
		}
	,	{
			URL: "templates/settings.html"
		}
	]
	
	//BACKGROUND IMAGES
	  var images = [
    'img/1.jpg'
  , 'img/2.jpg'
  , 'img/3.jpg'
  , 'img/4.jpg'
  , 'img/5.jpg'
  , 'img/6.jpg'
  ];
  
  $scope.bg1 = images[0];
  $scope.bg2 = images[1];
  
  var next = 2;
  
  function getNext() {
    if (next >= images.length) {
      next = 0;
    }
    return next;
  }
  
  var bg1 = document.getElementById('bg1');
  var bg2 = document.getElementById('bg2');
  
  if (!$scope.mobileView) {
	  $interval(function() {
		if (bg2.className != 'show') {
		  bg2.className = 'show'
		  $timeout(function() {
			$scope.bg1 = images[getNext()];
			next++;
		  }, 1000)
		} 
		else {
		  bg2.className = ''
		  $timeout(function() {
			$scope.bg2 = images[getNext()];
			next++;
		  }, 1000)
		}
	  }, 15000)
  }
  else {
		$scope.bg1 = images[5];
  }
   
  //WINDOW WATCHER
  $scope.$watch(function(){
       return $window.innerWidth;
    }, function(value) {
       if (value <= 920) {
		   $scope.mobileView = true;
		   $scope.menuExpanded = false;
	   }
	   else {
		   $scope.mobileView = false;
		   $scope.menuExpanded = true;
	   }
   });

  
}

angular
	.module('msdApp')
	.controller('MainCtrl', MainCtrl)