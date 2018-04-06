var gulp = require('gulp')

gulp.task('test-functional-local', () => {
    console.log('run gulp task: "test-functional-local"')
});

gulp.task('test-functional-local-legacy', () => {
    console.log('run gulp task: "test-functional-local-legacy"');
});

gulp.task('travis', [process.env.GULP_TASK || '']);
