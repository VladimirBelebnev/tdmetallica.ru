import $ from "jquery";

$(".menu").on("click", (e) => {
    $(e.currentTarget).toggleClass("menu_active");
    $(".mobile-menu").slideToggle(300);
});
