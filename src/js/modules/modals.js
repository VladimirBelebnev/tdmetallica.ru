import iziModal from "izimodal";
import $ from "jquery";

// $("#form-modal").iziModal();
// $("#form-modal").iziModal("setWidth", "41.25rem");
$(() => {
    $("#form-modal").iziModal();
    $("#thank-modal").iziModal();

    $(".modal__skip").on("click", () => {
        document.querySelectorAll(".modal")?.forEach((modal) => {
            $(modal).iziModal("close");
        });
    });
});
