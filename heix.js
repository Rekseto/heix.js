var heix = {
    routes: [],
    /**
     * @func heix#addRoute
     * @desc registring EventListener click for all of elements from selector to change url by History API.
     * @param {String} mode data
     * @param {Selector} selector='body' - CSS Selector
     * @param {Function} callback
     *  (function() { heix.addRoute('data', '.navigation-list-element-link', function (route) { console.log(route.mode)});})();
     */
    addRoute: function (_mode, _selector, _next) {
        var route = {mode: _mode, selector: _selector, next: _next};
        var list = waff.qq(route.selector);
        for (i = 0; i < list.length; ++i) {
            var element = list[i];
            // use waff-query for this
            element.on('click', function(e){
                var data = this.attr('data-name');
                history.pushState(null, null, data);
                // bind route as `this` in callback
                route.next.call(route);
                
                e.preventDefault();
            });
        }
        this.routes.push(this.route);
    }

}
