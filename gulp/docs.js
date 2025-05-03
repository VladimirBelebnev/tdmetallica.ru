const gulp = require("gulp");

// HTML

const fileInclude = require("gulp-file-include");
const htmlclean = require("gulp-htmlclean");
const webpHTML = require("gulp-webp-html");

// SASS

const sass = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const webpCss = require("gulp-webp-css");

const server = require("gulp-server-livereload");
const clean = require("gulp-clean");
const fs = require("fs");
const sourceMaps = require("gulp-sourcemaps");
const groupMedia = require("gulp-group-css-media-queries");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const webpack = require("webpack-stream");
const babel = require("gulp-babel");
const changed = require("gulp-changed");

// Images

const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");

// Settings

const fileIncludeSetting = {
    prefix: "@@",
    basepath: "@file",
};

const serverOptions = {
    livereload: true,
    open: true,
};

function plumberNotify(title) {
    return {
        errorHandler: notify.onError({
            title,
            message: "Error <%= error.message %>",
            sound: false,
        }),
    };
}

// Tasks

gulp.task("html:docs", () => gulp
    .src(["./src/html/**/*.html", "!./src/html/blocks/*.html", "!./src/html/elements/*.html"])
    .pipe(changed("./docs/"))
    .pipe(plumber(plumberNotify("HTML")))
    .pipe(fileInclude(fileIncludeSetting))
    // .pipe(htmlclean())
    // .pipe(webpHTML())
    .pipe(gulp.dest("./docs/")));

gulp.task("sass:docs", () => gulp
    .src("./src/scss/*.scss")
    .pipe(changed("./docs/css/"))
    .pipe(plumber(plumberNotify("SCSS")))
    // .pipe(sourceMaps.init())
    .pipe(sassGlob())
    .pipe(sass())
    // .pipe(webpCss())
    .pipe(groupMedia())
    .pipe(autoprefixer())
    .pipe(csso())
    // .pipe(sourceMaps.write())
    .pipe(gulp.dest("./docs/css/")));

gulp.task("images:docs", () => gulp
    .src("./src/img/**/*", { encoding: false })
    .pipe(changed("./docs/img/"))
    // .pipe(webp())
    // .pipe(gulp.dest("./docs/img/"))
    // .pipe(gulp.src("./src/img/**/*"))
    .pipe(changed("./docs/img/"))
    .pipe(imagemin({ verbose: true }))
    .pipe(gulp.dest("./docs/img/")));

gulp.task("fonts:docs", () => gulp
    .src("./src/fonts/**/*")
    .pipe(changed("./docs/fonts/"))
    .pipe(gulp.dest("./docs/fonts/")));

gulp.task("files:docs", () => gulp
    .src("./src/files/**/*")
    .pipe(changed("./docs/files/"))
    .pipe(gulp.dest("./docs/files/")));

gulp.task("js:docs", () => gulp
    .src("./src/js/*.js")
    .pipe(changed("./docs/js/"))
    .pipe(plumber(plumberNotify("JS")))
    .pipe(babel())
    .pipe(webpack(require("../webpack.config.js")))
    .pipe(gulp.dest("./docs/js/")));

gulp.task("clean:docs", (done) => {
    if (fs.existsSync("./docs/")) {
        return gulp
            .src("./docs/", { read: false })
            .pipe(clean({ force: true }));
    }
    done();
});

gulp.task("server:docs", () => gulp
    .src("./docs/")
    .pipe(server(serverOptions)));
