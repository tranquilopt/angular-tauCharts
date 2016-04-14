/*! Angular tauCharts v0.0.1 | (c) 2015 Ricardo Cunha | License MIT */

/**
 * Angular Module with Service and Directive for tauCharts
 */
angular.module('tauCharts', [])
    /**
     * The tauCharts Service
     */
    .service('tauCharts', function () {
        var chart = {};

        this.newChart = function(options) {
            var _plugins = [];
            options.plugins.forEach(function(name) {
                _plugins.push(tauCharts.api.plugins.get(name)());
            });

            chart = new tauCharts.Chart({
                dimensions: options.dimensions,
                guide: options.guide,
                type: options.type,
                x: options.x,
                y: options.y,
                color: options.color,
                data: options.data,
                plugins: _plugins
            });

            return chart;
        };
    });