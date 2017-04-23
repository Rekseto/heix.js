var heix = (function () {
    var _createOwnRoute = function (selector, _next) {
        document.addEventListener("DOMContentLoaded", function () {
            var anchorsList = document.querySelectorAll(selector);
            for (var i = 0; i < anchorsList.length; ++i) {
                var next = _next;
                anchorsList[i].addEventListener("click", function (e) {
                    e.preventDefault();
                    history.pushState(null, null, this.getAttribute("href"));
                    next.call();
                });
            }
        });
    }
    var _test = function () {
    }
    return {
        createOwnRoute: _createOwnRoute,
        test: _test
    }
})();