var fs = require('fs')
   ,gulp = require('gulp')
   ,babel = require('gulp-babel')
   ,concat = require('gulp-concat');
 


gulp.task('babel', function(){
	var react = babel({
		presets: ['react', 'es2015']
	}).on('error', function(err){
    	console.log(err);
    });

    gulp.src(['./js/src/classes/*.js', './js/src/main.js'])
        .pipe(react)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./js/dist'));
});

gulp.task('images', function(){
	var images = {};
	var categories = ['people', 'animals'];
	for(var i in categories){
		var category = categories[i];
		var files = fs.readdirSync('res/images/'+category);
		for(var k in files){
			var file = files[k];
			var id = null;
			var type = null
			if(file.startsWith('original_')){
				type = 'template';
				id = file.replace('original_', '').replace('.jpg', '');
			}
			if(file.startsWith('modified_')){
				type = 'test';
				id = file.replace('modified_', '').replace('.jpg', '');
			}
			if(file.startsWith('control_')){
				type = 'control';
				id = file.replace('control_', '').replace('.jpg', '');
			}
			if(type){
				// console.log(type);
				if(!images[id]){
					images[id] = {
						category: category
					};	
				} 
				images[id][type] = file;
			}
		}
	}

	fs.writeFile('./js/dist/images.js', 'var VPT_IMAGES = '+JSON.stringify(images), function(err){
		if(err) throw err;
	}); 
});

gulp.task('watch', function(){
	gulp.watch('./js/src/app.js', ['babel']);
});
