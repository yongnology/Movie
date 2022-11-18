$(function () {
    $('.slider_panel').append($('.slider_image').first().clone());
    $('.slider_panel').prepend($('.slider_image').eq(-2).clone());
    let index=1;
    moveSlider(index);
    $('.left_control_on').click(function () {
        if(index > 1) {
            index--;
            moveSlider(index);
        }else {
            $('.slider_panel').css('left',-5100);
            index=7;
            moveSlider(index);
        }
    });
    $('.right_control_on').click(function () {
        if(index < 7) {
            index++;
            moveSlider(index);
        }else {
            $('.slider_panel').css('left',0);
            index=1;
            moveSlider(index);
        }
    });
    

    //이미지 슬라이드 구현
    function moveSlider(index) {
        $('.slider_panel').animate({
            left:-(index*490)
        },'slow');
        setInterval(moveSlider,3000);
    }
    
});
