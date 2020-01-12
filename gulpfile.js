const gulp = require("gulp");
const util = require("gulp-util");
const sequence = require('run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

// O gulp por startar as tasks em paralelo, ele pode não conseguir start o servidor com as
// configurações certas, por isso usamo o plugin run-sequence
gulp.task('default', () =>{
    if(util.env.production){
        sequence('deps', 'app')
        // gulp.start('deps', 'app')
    } else {
        sequence('deps', 'app', 'servidor')
        // gulp.start('deps', 'app', 'servidor')
    }
})
