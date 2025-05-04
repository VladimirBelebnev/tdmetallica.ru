import $ from "jquery";

$(() => {
    $(".file input").on("change", (e) => {
        const { files } = e.target;
        const text = $(e.target).parent().find(".file__text");

        text.text(files[0].name);
    });
});
