//탭메뉴 스크립트
    // $('.tab_btn li').click(function(){
    //     // 각각의 탭 index값 리턴 매서드
    //     const idx=$('this').index();
    //     console.log(idx);
    //     // 탭영역 클래스 작동
    //     $('.tab_btn li').removeClass('on');
    //     $(this).addClass('on')

    //        // 해당탭 내용 연결 스크립트
    // // 힌트 => 가리구 보이기, idx이용
    // $('.tab_contents .list').stop().hide();
    // $('.tab_contents .list').eq(idx).stop().show();
    // });

    // // 해당질문 답 보이기, 화살표 방향 스크립트
    // $('.tab_contents .list .question').click(function(){
    //     //빈 hasClass 기법
    //     if($(this).hasClass('active')){
    //         $(this).removeClass("active");
    //         //화살표 방향 바꾸기
    //         $(this).children('dd').removeClass('up');
    //         $(this).children('dd').addClass('down');
    //         //해당 내용보여주기
    //         $(this).siblings('.answer').stop().slideUp(500);
    //     }else{//클래스명 active가 없으면 실행
    //         $(this).addClass("active");
    //         //화살표 방향 바꾸기
    //         $(this).children('dd').removeClass('up');
    //         $(this).children('dd').addClass('down');
    //         //해당 내용보여주기
    //         $(this).siblings('.answer').stop().slideDown(500);
    //     }
    // });

    // 탭 섹션 클릭할 때마다 토글 가능
$('.list .question').click(function() {
    $(this).next().slideToggle();
    $("i",this).toggleClass("fa fa-plus fa fa-minus");
});