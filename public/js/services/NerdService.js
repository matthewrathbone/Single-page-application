angular.module('NerdService', [])
	.factory('Nerd', ['$http', function ($http) {
		return {
			// call to get all nerds
			get: function () {
				return $http.get('/api/nerds');
			},
			// create a new nerd
			create: function (data) {
				return $http.post('/api/nerds', data);
			},
			// delete a nerd
			delete: function (id) {
				return $http.delete('/api/nerds/', id);
			}
		}
	}]);
