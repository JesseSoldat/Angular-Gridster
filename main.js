var app = angular.module('app', ['gridster']);


app.controller('MainCtrl', function($scope){
	$scope.title = 'My First Dashboard';
	$scope.gridsterOpts = {
		columns: 12,
		margins: [20,20],
		outerMargin: false,
		pushing: true,
		floating: true,
		swapping: false
	};

	$scope.widgets = [

		{
			title: 'First',
			sizeX: 3,
			sizeY: 3,
			row: 0,
			col: 0
		},
		{
			title: 'Second',
			sizeX: 4,
			sizeY: 4,
			row: 0,
			col: 5
		}

	];
});

