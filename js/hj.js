/* global $ */
"use strict";

$(document).ready(function () {
    // 메뉴 hover 시 서브메뉴 보이기
    $(".navi > li").hover(
        function () {
            $(this).find(".submenu").stop().slideDown();
        },
        function () {
            $(this).find(".submenu").stop().slideUp();
        }
    );

    // notice 영역 투명도 조절
    $(".notice").mouseover(function () {
        $("#op1").css("opacity", "0.7");
    }).mouseout(function () {
        $("#op1").css("opacity", "1.0");
    });

    // 배너1 이미지 변경
    $(".banner1").mouseover(function () {
        $("#op2").attr("src", "image/pro1.jpg");
    }).mouseout(function () {
        $("#op2").attr("src", "image/pro2.jpg");
    });

    // 배너2 페이드 인/아웃
    $(".banner2").mouseover(function () {
        $("#op3").fadeIn("slow");
    }).mouseout(function () {
        $("#op3").fadeOut("slow");
    });

    // 모달창 열기/닫기
    $("#m").click(function () {
        $("#modal").addClass("active");
    });

    $("#btn").click(function () {
        $("#modal").removeClass("active");
    });
});