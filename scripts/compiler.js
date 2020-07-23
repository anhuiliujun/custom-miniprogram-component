const path = require('path');
const gulp = require('gulp');
const cleanCss = require('gulp-clean-css');
const babel = require('gulp-babel');
const gulpif = require('gulp-if');
const del = require('del');

const isProduction = process.env.NODE_ENV === 'production';
const dist = path.join(__dirname, '../dist');
const src = path.join(__dirname, '../src');
const extTypes = ['assets', 'wxss', 'ts', 'json', 'wxml', 'wxs'];

if (isProduction) {
  extTypes.unshift('clean:dist');
}

gulp.task('clean:dist', function () {
  return del([
    'dist/**/*'
  ]);
});

gulp.task('assets', () => gulp.src(`${src}/**/*.{png,jpg,jpeg,gif,svg}`)
  .on('error', e => console.error(e))
  .pipe(gulp.dest(dist)));

gulp.task('wxss', () => gulp.src(`${src}/**/*.wxss`)
  .on('error', e => console.error(e))
  .pipe(gulpif(isProduction, cleanCss()))
  .pipe(gulp.dest(dist)));

gulp.task('ts', () => gulp.src(`${src}/**/*.ts`)
  .pipe(babel())
  .on('error', (err) => {
    console.log(err);
  })
  .pipe(gulp.dest(dist)));

gulp.task('json', () => gulp.src(`${src}/**/*.json`)
  .pipe(gulp.dest(dist)));

gulp.task('wxml', () => gulp.src(`${src}/**/*.wxml`)
  .pipe(gulp.dest(dist)));

gulp.task('wxs', () => gulp.src(`${src}/**/*.wxs`)
  .pipe(gulp.dest(dist)));

const build = gulp.series(...extTypes);
build();

if (!isProduction) {
  extTypes.forEach((type) => {
    const watcher = gulp.watch(`${src}/**/*${type}`, gulp.series(type));
    watcher.on('change', (event) => {
      console.log(`File ${event} was change`);
    });
    watcher.on('add', (event) => {
      console.log(`File ${event} was add`);
    });
    watcher.on('unlink', (event) => {
      console.log(`File ${event} was remove`);
    });
  });
}
