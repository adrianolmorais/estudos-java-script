(function() {
    'use strict'
    var $buttonMenuHamburgger = document.getElementById("menu-hamburgger");
    var $html = document.getElementsByTagName("html")[0];

    $html.classList.replace("no-js", "js");

    $buttonMenuHamburgger.addEventListener("click", function(event) {
        $html.classList.toggle("menu-opened");
    });

})();