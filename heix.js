var heix = {
    routes: [],
    addRoute: function (mode, selector) {

        /**
         * @func heix#addRoute
         * @desc registring EventListener click for all of elements from selector to change url by History API
         * @param {String} mode data
         * @param {Selector} selector='body' - CSS Selector
         * @example
         *  heix.addRoute({mode: 'data', selector: '.navigation-list-element-link'});
         *  heix.loadRouters();
         */
        this.routes.push({mode: this.mode, selector: this.selector});
    },
    loadRouters: function () {
        [].forEach.call(this.routes, function (route) {
            var list = Array.prototype.slice.call(document.querySelectorAll(route.selector));
            [].forEach.call(list, function (el) {
                el.addEventListener('click', function (e) {
                    var data = e.target.getAttribute('data-name'),
                        url = data;
                    history.pushState(null, null, url);
                    e.preventDefault();
                })
            });

        })
    }

}
