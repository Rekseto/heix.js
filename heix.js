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
    addRoute: function (_mode, _selector, _fnc) {
        var route = {mode: _mode, selector: _selector, fnc: _fnc};
        var list = Array.prototype.slice.call(waff.qq(route.selector, null, false, true));
        [].forEach.call(list, function (element) {
            element.addEventListener('click', function (e) {
                var data = e.target.getAttribute('data-name'),
                    url = data;
                history.pushState(null, null, url);
                route.fnc(route);
                e.preventDefault();
            });
        });


        this.routes.push(this.route);
    }

}
