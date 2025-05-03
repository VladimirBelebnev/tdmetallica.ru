import $ from "jquery";
import "malihu-custom-scrollbar-plugin";

$(function(){
    $("[name^='#']").click(function(){
            var _href = $(this).attr("name");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
});