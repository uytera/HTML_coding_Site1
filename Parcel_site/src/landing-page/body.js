window.jQuery = window.$ = require('jquery');

$(document).ready(function () {
    massOfButtons = document.getElementsByClassName('default-button');

    for (let item of massOfButtons) {
        item.addEventListener("mouseup", (e) => {
            item.classList.remove("pushed-down");
        });

        item.addEventListener("mousedown", (e) => {
            item.classList.add("pushed-down");
        });
    }
});