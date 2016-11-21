(function() {
    'use strict';
})();
/*global angular, $snaphy, jQuery, $,  BaseTableDatatables, browser, console*/

angular.module($snaphy.getModuleName())

    /**
     * Jquery Sparkline graph..
     */
    .directive('snaphySparkline', ['$timeout', function($timeout) {
        return{
            restrict:"E",
            replace: true,
            scope: {
              //array of values..
              "value": "=value",
               "options": "=?options"
            },
            template: '<span class="js-widget-line1"></span>',
            link: function (scope, element, attr) {
                var BaseUIWidgets = function() {
                    // jQuery Sparkline Charts, for more examples you can check out http://omnipotent.net/jquery.sparkline/#s-docs
                    var initWidgetsSparkline = function(){
                        // Line Charts
                        var $lineOptions = {
                            type: 'line',
                            width: '200px',
                            height: '120px',
                            tooltipOffsetX: -25,
                            tooltipOffsetY: 20,
                            lineColor: '#abe37d',
                            fillColor: '#abe37d',
                            spotColor: '#777777',
                            minSpotColor: '#777777',
                            maxSpotColor: '#777777',
                            highlightSpotColor: '#777777',
                            highlightLineColor: '#777777',
                            spotRadius: 2,
                            tooltipPrefix: '',
                            tooltipSuffix: ' Sales',
                            tooltipFormat: '{{prefix}}{{y}}{{suffix}}'
                        };

                        if(scope.options){
                            for(var key in $lineOptions){
                                if($lineOptions.hasOwnProperty(key)){
                                    scope.options[key] = scope.options[key]? scope.options[key] : $lineOptions[key];
                                }
                            }
                        }else{
                            scope.options = $lineOptions;
                        }

                        jQuery(element).sparkline(scope.value, scope.options);
                    };

                    return {
                        init: function() {
                            // Init all charts
                            initWidgetsSparkline();
                        }
                    };
                }();
                // Initialize when page loads
                jQuery(function(){ BaseUIWidgets.init(); });
            }
        };
    }]);