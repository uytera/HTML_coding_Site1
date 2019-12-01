window.jQuery = window.$ = require('jquery');
$(document).ready(function(){
    document.querySelector('.reg-form__cancel').addEventListener("click", (e) => {
        $('.reg-consturction').css('display', 'none');
    });

    document.querySelector('.header-button').addEventListener("click", (e) => {
        $('.reg-consturction').css('display', 'block');
    });
    
    document.querySelector('.reg-form').addEventListener('submit', (e) => {
        if($('.reg-form__login').val() == ''){
            e.preventDefault();
            $('.reg-form__login').attr('placeholder', 'Введите логин')
            $('.reg-form__login').addClass('alert');
        }
        if($('.reg-form__password').val() == ''){
            e.preventDefault();
            $('.reg-form__password').attr('placeholder', 'Введите пароль')
            $('.reg-form__password').addClass('alert');
        }
    });
})



