const gulp = require('gulp');
const server = require('gulp-webserver');
gulp.task('webserver', () => {
    return gulp.src('./src/')
        .pipe(server({
            port: 8085,
            open: true,
            livereload: true,
            proxies: [
                { "source": "/api/getdata", "target": "http://localhost:3000/api/getdata" },
                { "source": "/api/adddata", "target": "http://localhost:3000/api/adddata" }
            ]

        }))
})