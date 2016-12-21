(function() {

    var app = angular.module('store-directives', []);

    app.directive('productGallery', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-gallery.html',
            controller: function() {

                this.current = 0;

                this.setCurrent = function(newValue) {
                    this.current = newValue || 0;
                };

            },
            controllerAs: 'gallery'
        };
    });

    app.directive('productTabs', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-tabs.html',
            controller: function() {
                this.tab = 1;

                this.setTab = function(newValue) {
                    this.tab = newValue;
                };

                this.isSet = function(tabName) {
                    return this.tab === tabName;
                };
            },
            controllerAs: 'tab'
        };
    });

    app.directive('productReviewForm', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/product-review-form.html',
            controller: function() {
                this.review= {};

                this.addReview = function(product) {
                    this.review.createdOn = Date.now();
                    product.reviews.push(this.review);
                    this.review = {};
                };
            },
            controllerAs: 'reviewCtrl'
        }
    });

})();