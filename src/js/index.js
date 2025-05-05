// Libraries

import $ from "jquery";

import "./modules/sliders.js";
import "./modules/modals.js";
import "./modules/phone-mask.js";
import "./modules/form-submit.js";
import "./modules/card.js";
import "./modules/menu.js";
import "./modules/redirect.js";
import "./modules/files.js";

import fslightbox from "fslightbox";

const header = $(".header");
const main = $(".main");

main.css("padding-top", `${header.height() + parseInt(header.css("margin-bottom"))}px`);
