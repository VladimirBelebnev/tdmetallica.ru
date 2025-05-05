import $ from "jquery";

$(".menu").on("click", (e) => {
    $(e.currentTarget).toggleClass("menu_active");
    $(".mobile-menu").slideToggle(300);
});

$(".filter-item__open").on("click", (e) => {
    const hidden = $(e.currentTarget).next();
    hidden.slideToggle(300);
    $(e.currentTarget).toggleClass("active");
    $(e.currentTarget).parent().toggleClass("active");
});
