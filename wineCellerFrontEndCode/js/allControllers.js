var allControllers = angular.module("allControllers", [])
allControllers.controller("wineListController", function($scope, $http, $location){
	console.log("wineListController");
	$scope.wineListJson='';
	$scope.cardView = true;
	$scope.showModal = false;

	$scope.fetchWineList = function(){
		$.ajax({
			url: "http://localhost:3000/wines",
			jsonp: "callback",
			dataType: "jsonp",
			data: {
				format: "json"
			},
			success: function( response ) {
				if(!response.hasOwnProperty('error')){
					$scope.wineListJson = response;
					$scope.$apply();
				}else{
					alert("Fetch unsuccessful, contact system adminstrator");
				}
			},
			error: function(XHR, textStatus, errorThrown) {
							console.log("error: " + textStatus);
							console.log("error: " + errorThrown);
					}
		});
	}

	$scope.removeWine = function(wineID){
		$.ajax({
			url: "http://localhost:3000/wines/"+wineID,
			crossDomain: true,
			type: 'DELETE',
			success: function( response ) {
				if(!response.hasOwnProperty('error')){
					alert("Deleted successfully");
					$scope.fetchWineList();
				}else{
					alert("Delete unsuccessful, contact system adminstrator");
				}
			},
			error: function(XHR, textStatus, errorThrown) {
				console.log("error: " + textStatus);
				console.log("error: " + errorThrown);
			}
		});
	}

	$scope.updateLayout = function(isCardView){
		$scope.cardView = isCardView;
	}

	$scope.handleCard = function(isEdit,wineID){
		if(isEdit)
			$location.path('addwine/'+wineID);
		else{
			$scope.removeWine(wineID);
		}
	}

	$scope.getMoreInformation = function(wine){
		$('#modal_title').text(wine.name);
		$('#modal_body').html('<p>'+wine.description+'</p>');
	}

	$scope.fetchWineList();
});

allControllers.controller("addWineController", function($scope,  $routeParams, $location){
	$scope.wineData = {};
	$scope.typeOfReq = "POST";
	$scope.myUrl = "http://localhost:3000/wines";
	$scope.param = $routeParams.param;

	if($scope.param){
		console.log($scope.param);
		$scope.myUrl = $scope.myUrl + "/" + $scope.param;
		$scope.typeOfReq = "PUT";
		$.ajax({
			url: "http://localhost:3000/wines/"+$scope.param,
			jsonp: "callback",
			dataType: "jsonp",
			data: {
				format: "json"
			},
			success: function(response) {
				console.log("findOne: "+response);
				$scope.$apply(function(){
						$scope.wineData = response;
				});
			},
			error: function(XHR, textStatus, errorThrown) {
				console.log("error: " + textStatus);
				console.log("error: " + errorThrown);
			}
		});
	}

	$scope.update = function() {
		console.log(JSON.stringify($scope.wineData));
		$.ajax({
			type: $scope.typeOfReq,
			url: $scope.myUrl,
			crossDomain: true,
			dataType: "json",
			data: $scope.wineData,
			success: function( response ) {
				if(!response.hasOwnProperty('error')){
					console.log('Test');
					$location.path('winelist');
					$location.replace();
					$scope.$apply();
				}
			},
			error: function(XHR, textStatus, errorThrown) {
	            console.log("error: " + textStatus);
	            console.log("error: " + errorThrown);
	        }
		});
	};
});
