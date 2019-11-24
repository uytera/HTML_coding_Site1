window.jQuery = window.$ = require('jquery');
$(document).ready(function() {
    $('#image-select').change(function(e){
        alert(e.attr('value'));
        $('.hidden-form-elements').css('display', 'flex');
    })
});
