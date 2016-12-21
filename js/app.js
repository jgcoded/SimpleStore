(function(){

    var app = angular.module('store', ['store-directives']);

    app.controller('StoreController', ['$http', '$log', function($http, $log) {
        var store = this;
        store.products = [];

        $http.get('js/products.json').then(
            function successCallback(response) {
                store.products = response.data;
            },
            function errorCallback(response) {
                $log.error('Could not fetch products.json, an error occurred: ' + response.status);
                store.products = [];
            });
    }]);

})();