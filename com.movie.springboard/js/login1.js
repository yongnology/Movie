
// x 버튼 눌를시 닫기
function popupClose() {
    //$('.login_root').fadeOut(200);
    $('.login_root').slideUp(300);
}

// 검정화면 누를시 닫기
// $('.login_root').click(function() {
//     $('.login_root').slideUp(300);
// })


// 로그인 버튼 누를시 열기
function popupOpen() {
    // $('.login_root').slideIn(100);
    $('.login_root').slideDown(200);
    // $('.login_root').toggle(200,);
}
