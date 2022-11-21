const { src, dest, watch, series } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');

const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

function js() {
	return src('src/js/**/*.js')
		.pipe(dest('build/js'));
}

function css() {
	return src('src/scss/app.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(sourcemaps.write('.'))
		.pipe(dest('build/css'));
}

function images() {
	return src('src/img/**/*')
		.pipe(imagemin({ optimizationLevel: 3 }))
		.pipe(dest('build/img'));
}

function convertToWebp() {
	const options = {
		quality: 50,
	};

	return src('src/img/**/*.{png,jpg}').pipe(webp(options)).pipe(dest('build/img'));
}

function convertToAvif() {
	const options = {
		quality: 50,
	};

	return src('src/img/**/*.{png,jpg}').pipe(avif(options)).pipe(dest('build/img'));
}

function dev() {
	watch('src/js/**/*', js);
	watch('src/scss/**/*.scss', css);
	watch('src/img/**/*', images);
	watch('src/img/**/*', convertToWebp);
	watch('src/img/**/*', convertToAvif);
}

exports.js = js;
exports.css = css;
exports.dev = dev;
exports.images = images;
exports.convertToWebp = convertToWebp;
exports.convertToAvif = convertToAvif;
exports.default = series(js, images, convertToWebp, convertToAvif, css, dev);
