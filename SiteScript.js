var slideInterval = 3000;
var switchInterval = 1000;

$(document).ready(function() {
    startSlide()
});

function startSlide(){
    idIntervals = setInterval(nextSlider, slideInterval);
    sliderTimeout = setTimeout(3000);
    buttonTimeout = setTimeout(3000);
}

function clearButtons(){
    $('.switch>ul>li:nth-of-type(1)').animate({
        backgroundColor: "rgba(38, 65, 96, 0.0)" 
    },
    500,"linear");
    $('.switch>ul>li:nth-of-type(2)').animate({
        backgroundColor: "rgba(38, 65, 96, 0.0)" 
    },
    500,"linear");
}

$('.switch>ul>li:nth-of-type(1)').click(function() {
    clearInterval(idIntervals);
    $('.slider:nth-of-type(2)').stop(true);
    $('.slider:nth-of-type(1)').stop(true);
    $('.switch>ul>li:nth-of-type(1)').animate({
        backgroundColor: "rgba(38, 65, 96, 1.0)"
    },
    500,"linear");
    $('.switch>ul>li:nth-of-type(2)').animate({
        backgroundColor: "rgba(38, 65, 96, 0.0)"
    },
    500,"linear");
    buttonControl(1);
})

$('.switch>ul>li:nth-of-type(2)').click(function() {
    clearInterval(idIntervals);
    $('.slider:nth-of-type(2)').stop(true);
    $('.slider:nth-of-type(1)').stop(true);
    $('.switch>ul>li:nth-of-type(2)').animate({
        backgroundColor: "rgba(38, 65, 96, 1.0)"
    },
    500,"linear");
    $('.switch>ul>li:nth-of-type(1)').animate({
        backgroundColor: "rgba(38, 65, 96, 0.0)" 
    },
    500,"linear");
    buttonControl(2);
})

function buttonControl(numberOfSlide){
    clearTimeout(sliderTimeout);
    clearTimeout(buttonTimeout);
    if (numberOfSlide == 2){
        $('.slider:nth-of-type(1)').animate({
            "margin-left" : "0%",
            }, 500,"linear")
    }
    else{
        $('.slider:nth-of-type(1)').animate({
            "margin-left" : "33%",
            }, 500,"linear");
    }   
    sliderTimeout = setTimeout(startSlide, 3000);
    buttonTimeout = setTimeout(clearButtons, 3000);
}


function insertSlider() {
    $('.slider:nth-of-type(2)').animate({
        "margin-left" : "33%",
        },
        0,"linear");
    $(".slider:nth-of-type(1)").appendTo(".slides");
}

function nextSlider() {
    $('.slider:nth-of-type(1)').animate(
        {
        "margin-left" : "0%",
        }, switchInterval,"linear",
        function(){insertSlider()}
    );
}

function buttonSwitch() {
    $('.slider:nth-of-type(1)').animate(
        {
        "margin-left" : "0%",
        }, switchInterval,"linear",
        function(){insertSlider()}
    );
}