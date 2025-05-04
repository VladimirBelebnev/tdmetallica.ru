import iziModal from "izimodal";
import $ from "jquery";

// $("#form-modal").iziModal();
// $("#form-modal").iziModal("setWidth", "41.25rem");
$(() => {
    // $("#form-modal").iziModal();
    // $("#thank-modal").iziModal();

    // $(".modal__skip").on("click", () => {
    //     document.querySelectorAll(".modal")?.forEach((modal) => {
    //         $(modal).iziModal("close");
    //     });
    // });

    $(".search__input").on("focus", (e) => {
        $(e.target).closest(".search-wrap").find(".drop-down").slideDown(300);
    });
    $(".search__input").on("blur", (e) => {
        $(e.target).closest(".search-wrap").find(".drop-down").slideUp(300);
    });
});
