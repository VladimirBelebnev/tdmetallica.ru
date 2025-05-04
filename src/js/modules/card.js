import $ from "jquery";

const img = document.querySelector(".project-gallery__main");
// const video = document.querySelector(".gallery__video-link");

$(".project-gallery__item").on("click", (event) => {
    const current = $(event.currentTarget);
    const src = current.find("img, video").attr("src");

    // const imgJQ = $(img);
    // const videoJQ = $(video);

    // const videoTag = video.querySelector("img");
    const imgTag = img.querySelector("img");

    // if (current.hasClass("gallery-item_video")) {
    //     videoJQ.show();
    //     imgJQ.hide();
    //     videoJQ.attr("href", current.attr("data-video-href"));
    //     videoTag.src = current.attr("data-href");
    // }
    // else {
    // videoJQ.hide();
    // imgJQ.show();
    // imgJQ.attr("href", src);
    // imgTag.src = src;
    imgTag.src = src;
    img.href = src;
    img.dispatchEvent(new CustomEvent("changeimg"));
    // }

    // $(".project-gallery__item").removeClass("active");
    // current.addClass("active");
});
