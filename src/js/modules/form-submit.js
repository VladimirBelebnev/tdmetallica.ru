import $ from "jquery";
import iziModal from "izimodal";

$(() => {
    // function disableForm(form) {
    //     form.find("button").prop("disabled", true);
    //     form.addClass("invalid");
    // }

    // function enableForm(form) {
    //     form.find("button").prop("disabled", false);
    //     form.removeClass("invalid");
    // }

    // function validate(form) {
    //     if (form.querySelector(".input_error")) {
    //         disableForm($(form));
    //     } else {
    //         enableForm($(form));
    //     }
    // }

    // // $("#form-modal").on("submit", (event) => {
    // //     const form = event.currentTarget;

    // //     if (!form.classList.contains("invalid")) {
    // //         const data = `ФИО: ${form.elements.fullname.value}, Телефон: ${form.elements.phone.value}`;

    // //         $.ajax({
    // //             url: "https://api.telegram.org/bot2139909234:AAFwDwctBvgY2PqirxtbXlB_74RmzTMLATI/sendMessage",
    // //             data: {
    // //                 chat_id: -1001574161774,
    // //                 text: data,
    // //                 parse_mode: "HTML",
    // //             },
    // //             type: "post",
    // //             success() {
    // //                 console.log("Success");
    // //             },
    // //         });
    // //         event.preventDefault();
    // //         $(form).iziModal("close");
    // //     }
    // // });

    // $("form").on("submit", (event) => {
    //     const form = event.currentTarget;

    //     if (!form.classList.contains("invalid")) {
    //         if (form.closest("#form-modal")) {
    //             $(form.closest("#form-modal")).iziModal("close");
    //             $("#thank-modal").iziModal("open");
    //         }
    //     }

    //     event.preventDefault();
    // });

    // $("input").on("input", (event) => {
    //     // $("#form-modal").addClass("touched");
    //     const input = event.currentTarget;
    //     if (input.matches("input:valid")) {
    //         input.classList.remove("input_error");
    //     } else {
    //         input.classList.add("input_error");
    //     }
    //     validate(input.closest("form"));
    // });

    // const forms = document.querySelectorAll(".wpcf7");

    // forms.forEach((item) => {
    //     item.addEventListener("wpcf7mailsent", (event) => {
    //         const form = event.currentTarget;

    //         if (form.closest("#form-modal")) {
    //             $(form.closest("#form-modal")).iziModal("close");
    //         }

    //         $("#thank-modal").iziModal("open");
    //     });
    // });
});
