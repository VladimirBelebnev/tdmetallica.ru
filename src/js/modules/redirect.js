import $ from "jquery";

$(() => {
    $("[data-link]").on("click", (e) => {
        const link = $(e.currentTarget).attr("data-link");
        window.location.href = link;
    });
});
