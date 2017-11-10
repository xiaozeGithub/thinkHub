/**
 * Created by zening on 17/11/10.
 */

const gulp = require('gulp'),
    eslint = require('gulp-eslint')

// lint
const lintDirs = [
    'src/app/**/*.jsx',
    'src/app/**/*.js'
];

gulp.task('lint', () => {
    return gulp.src(lintDirs)
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('lintWatch', ['lint'], () => {
    gulp.watch(lintDirs, function (event) {
        return gulp.src(event.path)
            .pipe(eslint())
            .pipe(eslint.format());
    });
});
