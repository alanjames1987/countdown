var gulp = require('gulp');
var taskListing = require('gulp-task-listing');

var NwBuilder = require('node-webkit-builder');

gulp.task('default', taskListing);

gulp.task('build', function(done) {

	var nw = new NwBuilder({
		files: [
			'bower_components/**',
			'css/**',
			'icon/**',
			'js/**',
			'index.html',
			'package.json',
		],
		platforms: [
			'osx64',
			'win32',
			'win64',
			'linux32',
			'linux64'
		],
	});

	nw.on('log', console.log);

	nw.build()
		.then(function() {
			console.log('all done!');
		})
		.catch(function(error) {
			console.error(error);
		});

});