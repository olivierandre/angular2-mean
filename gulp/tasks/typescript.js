var gulp = require('gulp'),
	ts = require('gulp-typescript'),
	tsProject = ts.createProject('tsconfig.json'),
    sourcemaps = require('gulp-sourcemaps');

module.exports = function () {
	return tsProject.src()
        .pipe(sourcemaps.init())
		.pipe(ts(tsProject))
        .pipe(sourcemaps.write())
		.pipe(gulp.dest('./public'));
};
