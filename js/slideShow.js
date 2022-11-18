$(function () {
    $('.slider_panel').append($('.slider_image').first().clone());
    $('.slider_panel').prepend($('.slider_image').eq(-2).clone());
    let index=1;
    moveSlider(index);
    $('.left_control').click(function () {
        if(index > 1) {
            index--;
            moveSlider(index);
        }else {
            $('.slider_panel').css('left',-2120);
            index=3;
            moveSlider(index);
        }
    });
    $('.right_control').click(function () {
        if(index < 3) {
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
            left:-(index*530)
        },1000);
    }
    setInterval(moveSlider,3000);
});