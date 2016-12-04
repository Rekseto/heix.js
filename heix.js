var heix = {
    routes: [],
    addRoute: function (arguments) {
        this.routes.push({mode: arguments.mode, selector: arguments.selector});
    },
    loadRouters: function () {
        [].forEach.call(this.routes, function (route) {
            var list = Array.prototype.slice.call(document.querySelectorAll(route.selector));
            [].forEach.call(list, function (el) {
                console.log('for each 2 działa!');
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
