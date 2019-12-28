window.jQuery = window.$ = require('jquery');

$('#image-select').change(function(e){
        $('.image-select-label__hidden-alert').css('display', 'none');
        var file = document.getElementById('image-select').files[0];

        if(!check_and_preview(file)){
            $('.image-select-label__hidden-alert').css('display', 'block');
            return;
        }

        $('.image-select-label__hidden-form-elements').css('display', 'flex');
        $('.image-select-label__image-path').text(file.name);
})

document.querySelector('#news-from-id').addEventListener('submit', (e) => {
    if($('#text-area').val() == ''){
        e.preventDefault();
        $('#text-area').attr('placeholder', 'Введите текст новости')
        $('#text-area').addClass('alert');
    }
    if($('#image-select').val() == ''){
        e.preventDefault();
        $('.image-select-label__hidden-alert').css('display', 'block');
    }
});

const scrollbar = $('.scrollbar'),
content = $('#text-area');

scrollbar.width(content.height()).find('div').width(content.get(0).scrollHeight);

scrollbar.on('scroll', function(e) {
  content.scrollTop($(this).scrollLeft());
});

document.querySelector('#text-area').addEventListener("input", (e) => {
    $('.symbols').text("Символов " + e.target.value.length + "/150");
});

document.querySelector('.image-select-label__cancel').addEventListener("click", (e) => {
    $('.image-select-label__hidden-form-elements').css('display', 'none');
    $('#image-select').val('');
});

function check_and_preview(file) {
    if (!file.type.match(/image\/(jpeg|jpg|png|gif)/) ) {
        return false;
    }
    
    if(!file.type.match(/image\/(jpeg|jpg|png|gif)/) ) {
        return false;
    }

    var reader = new FileReader();
    reader.addEventListener('load', function(event) {
        $('.image-select-label__avatar').attr('src', event.target.result);
    });
    reader.readAsDataURL(file);
    return true;
}
