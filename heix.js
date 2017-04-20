(function () {
    var heix = {
        initHeix : function () {
           var anchorsList = document.querySelectorAll('a[data-route]');
           for(var i = 0; i < anchorsList.length; i++) {
               anchorsList[i].addEventListener('click',function () {
                   history.pushState(null, null, this.getAttribute('href'));
                   e.preventDefault();
               });
            }
        },
        createOwnRoute : function () {

        }
    }
})();