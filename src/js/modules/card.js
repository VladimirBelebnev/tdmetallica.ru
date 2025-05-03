import $ from "jquery";
import fslightbox from "fslightbox";

const img = document.querySelector(".gallery__photo-link");
const video = document.querySelector(".gallery__video-link");

$(".gallery-item").on("click", (event) => {
    const current = $(event.currentTarget);
    const src = current.find("img, video").attr("src");

    const imgJQ = $(img);
    const videoJQ = $(video);

    const videoTag = video.querySelector("img");
    const imgTag = img.querySelector("img");

    if (current.hasClass("gallery-item_video")) {
        videoJQ.show();
        imgJQ.hide();
        videoJQ.attr("href", current.attr("data-video-href"));
        videoTag.src = current.attr("data-href");
        // videoTag.play();
    } else {
        videoJQ.hide();
        imgJQ.show();
        imgJQ.attr("href", src);
        imgTag.src = src;
        // videoTag.currentTime = 0;
        // videoTag.pause();
    }

    $(".gallery-item").removeClass("active");
    current.addClass("active");

    refreshFsLightbox();
});