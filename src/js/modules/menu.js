import $ from "jquery";

$(".menu").on("click", (e) => {
    $(e.currentTarget).toggleClass("menu_active");
    // $(".drop-down").slideToggle(300);
});
